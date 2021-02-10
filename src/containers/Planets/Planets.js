import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStarWarsData } from '../../actions/getStarWarsInfoActions';
import Page from '../../components/Page/Page';

const Planets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarWarsData('planets'))
  }, [])

  const planets = useSelector((state) => state.starWars.planets);

  return (
    <div>
      <Page
        title="Planets"
        intro="Planets of Star Wars"
        data={planets}
        titleKey="name"
      />
    </div>
  )
}

export default Planets;