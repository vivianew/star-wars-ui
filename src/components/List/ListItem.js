import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import Table from '../../components/Table/Table';
import Arrow from '../Icons/Arrow';
import './list.scss';

const ListItem = ({ itemInfo, itemTitle }) => {
  const [isExpanded, setExpand] = useState(false);
  const expandItem = () => setExpand(!isExpanded);

  return (
    <div className="list-item__container" onClick={expandItem}>
      <div className="list-item__title">
        <span>{itemTitle}</span>
        <Arrow
          rotation={isExpanded ? 90 : - 90}
          onClick={expandItem}
          animation="0.5s"
        />
      </div>
      <Collapse isOpened={isExpanded}>
        <div className="list-item__info">
          <Table item={itemInfo} />
        </div>
      </Collapse>
    </div>
  )
}

ListItem.propTypes = {
  itemTitle: PropTypes.string,
  children: PropTypes.node,
}

ListItem.defaultProps = {
  itemTitle: '',
  children:  null,
}

export default ListItem;