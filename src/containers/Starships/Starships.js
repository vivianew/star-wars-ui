import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStarWarsData } from '../../actions/getStarWarsInfoActions';
import Page from '../../components/Page/Page';

const Starships = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarWarsData('starships'))
  }, [])

  const starships = useSelector((state) => state.starWars.starships);

  return (
    <div>
      <Page
        title="Vehicles"
        intro="Vehicles of Star Wars"
        data={starships}
        titleKey="name"
      />
    </div>
  )
}

export default Starships;