import React from 'react';
import PropTypes from "prop-types";
import List from '../List/List';
import './page.scss';

const Page = (props) => {
  const {
    title,
    intro,
    data,
    titleKey,
  } = props;


  return (
    <div className="page__container">
      <div className="page__title">{title}</div>

      <div className="page__data">
        <div className="page__intro">
          {intro}
        </div>

        <div className="page__data-info">
          <List
            data={data}
            titleKey={titleKey}
          />
        </div>
      </div>
    </div>
  )
}

Page.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  data: PropTypes.array,
}

Page.defaultProps = {
  title: '',
  intro: '',
  data: [],
}

export default Page;