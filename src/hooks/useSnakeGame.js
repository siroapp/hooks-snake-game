import { useCallback, useEffect, useState } from 'react';
import {
  defaultInterval,
  defaultDifficulty,
  initialPosition,
  initialValues,
  Delta,
  Difficulty,
  Direction,
  DirectionKeyCodeMap,
  GameStatus,
  OppositeDirection,
} from '../constants';
import {
  initFields,
  isCollision,
  isEatingMyself,
  getFoodPosition,
} from '../utils';

let timer = null;

const unsubscribe = () => {
  if (!timer) {
    return;
  }
  clearInterval(timer);
};

// const reducer = (state, action) => {
//   const { position, fields, direction, status } = state;
//   switch (action.type) {
//     case 'tick':
//       if (status !== GameStatus.playing) {
//         return state;
//       }

//       const { x, y } = position;
//       const delta = Delta[direction];
//       const newPosition = {
//         x: x + delta.x,
//         y: y + delta.y,
//       };
//       if (isCollision(fields.length, newPosition)) {
//         unsubscribe();
//         return { ...state, status: GameStatus.gameover };
//       }
//       const newFields = [...fields];
//       newFields[y][x] = '';
//       newFields[newPosition.y][newPosition.x] = 'snake';
//       return { ...state, position: newPosition, fields: newFields };

//     case 'start':
//       return {
//         ...state,
//         status: GameStatus.playing,
//       };

//     case 'restart':
//       return {
//         position: initialPosition,
//         fields: initFields(35, initialPosition),
//         status: GameStatus.init,
//         direction: Direction.up,
//       };

//     case 'changeDirection':
//       if (status !== GameStatus.playing) {
//         return status;
//       }
//       if (OppositeDirection[direction] === action.direction) {
//         return status;
//       }
//       return {
//         ...state,
//         direction: action.direction,
//       };
//     default:
//       throw new Error();
//   }
// };

const reducer = (state, action) => {
  const { fields, body, direction } = state;
  switch (action.type) {
    case 'move':
      const { x, y } = body[0];
      const delta = Delta[direction];
      const newPosition = {
        x: x + delta.x,
        y: y + delta.y,
      };
      if (
        isCollision(fields.length, newPosition) ||
        isEatingMyself(fields, newPosition)
      ) {
        unsubscribe();
        return { ...state, status: GameStatus.gameover };
      }
      const newBody = [...body];
      const newFields = [...fields];
      if (fields[newPosition.y][newPosition.x] !== 'food') {
        // しっぽを消す
        const removingTrack = newBody.pop();
        newFields[removingTrack.y][removingTrack.x] = '';
      } else {
        // 新しいえさをフィールドに追加する
        const food = getFoodPosition(fields.length, [...newBody, newPosition]);
        newFields[food.y][food.x] = 'food';
      }
      newFields[newPosition.y][newPosition.x] = 'snake';
      newBody.unshift(newPosition);
      return { ...state, body: newBody, fields: newFields };

    default:
      throw new Error();
  }
};

const useSnakeGame = () => {
  const [fields, setFields] = useState(initialValues);
  const [body, setBody] = useState([initialPosition]);
  // const [state, dispatch] = useReducer(reducer, {
  //   position: initialPosition,
  //   fields: initialValues,
  //   status: GameStatus.init,
  //   direction: Direction.up,
  // });
  const [status, setStatus] = useState(GameStatus.init);
  const [direction, setDirection] = useState(Direction.up);
  const [difficulty, setDifficulty] = useState(defaultDifficulty);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    // ゲームの中の時間を管理する
    const interval = Difficulty[difficulty - 1];
    timer = setInterval(() => {
      setTick((tick) => tick + 1);
      // dispatch({ type: 'tick' });
    }, interval);
    return unsubscribe;
  }, [difficulty]);

  useEffect(() => {
    if (status !== GameStatus.playing) {
      return;
    }
    const canContinue = handleMoving();
    if (!canContinue) {
      unsubscribe();
      setStatus(GameStatus.gameover);
    }
  }, [tick]);

  const start = () => setStatus(GameStatus.playing);
  // const onStart = () => dispatch({ type: 'start' });

  const stop = () => setStatus(GameStatus.suspended);

  const reload = () => {
    const interval = Difficulty[difficulty - 1];
    timer = setInterval(() => {
      setTick((tick) => tick + 1);
      // dispatch({ type: 'tick' });
      // }, defaultInterval);
    }, interval);
    setStatus(GameStatus.init);
    setBody([initialPosition]);
    setDirection(Direction.up);
    setFields(initFields(35, initialPosition));
    // dispatch({ type: 'restart' });
  };

  const updateDirection = useCallback(
    (newDirection) => {
      if (status !== GameStatus.playing) {
        return;
      }
      if (OppositeDirection[direction] === newDirection) {
        return;
      }
      setDirection(newDirection);
      // dispatch({ type: 'changeDirection', direction: newDirection });
    },
    [direction, status]
  );

  const updateDifficulty = useCallback(
    (difficulty) => {
      if (status !== GameStatus.init) {
        return;
      }
      if (difficulty < 1 || difficulty > Difficulty.length) {
        return;
      }
      setDifficulty(difficulty);
    },
    [status, difficulty]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newDirection = DirectionKeyCodeMap[e.keyCode];
      if (!newDirection) {
        return;
      }
      // dispatch({ type: 'changeDirection', direction: newDirection });
      updateDirection(newDirection);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [updateDirection]);

  const handleMoving = () => {
    const { x, y } = body[0];
    const delta = Delta[direction];
    const newPosition = {
      x: x + delta.x,
      y: y + delta.y,
    };
    if (
      isCollision(fields.length, newPosition) ||
      isEatingMyself(fields, newPosition)
    ) {
      return false;
    }
    const newBody = [...body];
    const newFields = [...fields];
    if (fields[newPosition.y][newPosition.x] !== 'food') {
      const removingTrack = newBody.pop();
      // fields[removingTrack.y][removingTrack.x] = '';
      newFields[removingTrack.y][removingTrack.x] = '';
    } else {
      const food = getFoodPosition(fields.length, [...newBody, newPosition]);
      // fields[food.y][food.x] = 'food';
      newFields[food.y][food.x] = 'food';
    }
    //fields[newPosition.y][newPosition.x] = 'snake';
    newFields[newPosition.y][newPosition.x] = 'snake';
    newBody.unshift(newPosition);
    setBody(newBody);
    // setFields(fields);
    setFields(newFields);
    return true;
  };

  return {
    body,
    difficulty,
    fields,
    status,
    start,
    start,
    stop,
    reload,
    updateDirection,
    updateDifficulty,
  };
};

export default useSnakeGame;
