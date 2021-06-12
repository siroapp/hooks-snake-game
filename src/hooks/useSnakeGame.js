import { useEffect, useReducer } from 'react';
import {
  defaultDifficulty,
  Delta,
  Difficulty,
  Direction,
  DirectionKeyCodeMap,
  GameStatus,
  OppositeDirection,
  initialPosition,
  initialValues,
} from '../constants';
import {
  initFields,
  isCollision,
  getFoodPosition,
  isEatingMyself,
} from '../utils';

const reducer = (state, action) => {
  const { body, fields, status, direction } = state;
  switch (action.type) {
    case 'move':
      if (status !== GameStatus.playing) {
        return state;
      }
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
        return { ...state, status: GameStatus.gameover };
      }
      const newBody = [...body];
      const newFields = [...fields];
      if (newFields[newPosition.y][newPosition.x] !== 'food') {
        const removingTrack = newBody.pop();
        newFields[removingTrack.y][removingTrack.x] = '';
      } else {
        const food = getFoodPosition(fields.length, [...newBody, newPosition]);
        newFields[food.y][food.x] = 'food';
      }
      newFields[newPosition.y][newPosition.x] = 'snake';
      newBody.unshift(newPosition);
      return {
        ...state,
        body: newBody,
        fields: newFields,
      };

    case 'changeDirection':
      if (status !== GameStatus.playing) {
        return state;
      }
      if (OppositeDirection[direction] === action.direction) {
        return state;
      }
      return { ...state, direction: action.direction };

    case 'start':
      return { ...state, status: GameStatus.playing };

    case 'stop':
      return { ...state, status: GameStatus.suspended };

    case 'reset':
      return {
        ...state,
        body: [initialPosition],
        fields: initFields(35, initialPosition),
        status: GameStatus.init,
        direction: Direction.up,
      };

    case 'changeDifficulty':
      if (status !== GameStatus.init) {
        return state;
      }
      if (action.difficulty < 1 || action.difficulty > Difficulty.length) {
        return state;
      }
      return { ...state, difficulty: action.difficulty };

    default:
      throw new Error();
  }
};

const useSnakeGame = () => {
  const [state, dispatch] = useReducer(reducer, {
    body: [initialPosition],
    fields: initialValues,
    status: GameStatus.init,
    direction: Direction.up,
    difficulty: defaultDifficulty,
  });

  useEffect(() => {
    const interval = Difficulty[state.difficulty - 1];
    const timer = setInterval(() => {
      dispatch({ type: 'move' });
    }, interval);
    return () => clearInterval(timer);
  }, [state.difficulty]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newDirection = DirectionKeyCodeMap[e.keyCode];
      if (!newDirection) {
        return;
      }
      dispatch({ type: 'changeDirection', direction: newDirection });
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const onStart = () => dispatch({ type: 'start' });
  const onStop = () => dispatch({ type: 'stop' });
  const onRestart = () => dispatch({ type: 'reset' });
  const onChangeDirection = (newDirection) =>
    dispatch({ type: 'changeDirection', direction: newDirection });
  const onChangeDifficulty = (newDifficulty) =>
    dispatch({ type: 'changeDifficulty', difficulty: newDifficulty });

  return {
    body: state.body,
    difficulty: state.difficulty,
    fields: state.fields,
    status: state.status,
    start: onStart,
    stop: onStop,
    reload: onRestart,
    updateDirection: onChangeDirection,
    updateDifficulty: onChangeDifficulty,
  };
};

export default useSnakeGame;
