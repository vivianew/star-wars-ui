import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStarWarsData } from '../../actions/getStarWarsInfoActions';
import Page from '../../components/Page/Page';

const FilmsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarWarsData('films'))
  }, [])

  const films = useSelector((state) => state.starWars.films);

  return (
    <div>
      <Page
        title="Films"
        intro="It's not complete anymore but here are some SW films"
        data={films}
        titleKey="title"
      />
    </div>
  )
}

export default FilmsContainer;