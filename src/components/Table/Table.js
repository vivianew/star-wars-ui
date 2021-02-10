import React from 'react';
import './table.scss';

const Table = ({ item }) => {
  const isArr = (item) => Array.isArray(item) ? item.join(', ') : item;

  return (
    <div>
      {
        Object.keys(item).map((key) => (
          <div
            key={key}
            className="table__row"
          >
            <div>{key}:</div>
            <div>{isArr(item[key])}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Table;