import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStarWarsData } from '../../actions/getStarWarsInfoActions';
import Page from '../../components/Page/Page';

const Vehicles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarWarsData('vehicles'))
  }, [])

  const vehicles = useSelector((state) => state.starWars.vehicles);

  return (
    <div>
      <Page
        title="Vehicles"
        intro="Vehicles of Star Wars"
        data={vehicles}
        titleKey="name"
      />
    </div>
  )
}

export default Vehicles;