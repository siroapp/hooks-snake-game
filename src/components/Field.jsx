import React from 'react';

const Field = ({ fields }) => {
  return (
    <div className="field">
      {fields.map((row, rowIdx) => {
        return row.map((column, colIdx) => {
          return <div key={`row=${rowIdx}col=${colIdx}`} className={`dots ${column}`}></div>;
        });
      })}
    </div>
  );
};

export default Field;
