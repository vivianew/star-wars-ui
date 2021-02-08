import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStarWarsFilms } from '../../actions/getStarWarsInfoActions';
import Page from '../../components/Page/Page';

const FilmsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarWarsFilms())
  }, [])

  const films = useSelector((state) => state.starWars.films);

  console.log('films', films)

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