import React from 'react';
import TableRow from './TableRow';

const Table = ({ item }) => {
  const keys = Object.keys(item);
  const values = Object.values(item);

  console.log('keys', keys)
  console.log('values', values)

  return (
    <div>
      {
        Object.keys(item).map((key) => (
          <div key={key}>
            <div>{key}</div>
            <div>{item[key]}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Table;