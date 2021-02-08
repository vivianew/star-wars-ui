import React from 'react';
import ListItem from './ListItem';
import './list.scss';

const List = ({ data, titleKey }) => {
  return (
    <div className="list__container">
      {
        data.map((item) => {
          return (
            <ListItem
              key={item.created}
              itemInfo={item}
              itemTitle={item[titleKey]}
            />
          )
        })
      }

    </div>
  )
}

export default List;