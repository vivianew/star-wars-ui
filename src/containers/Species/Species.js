import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStarWarsData } from '../../actions/getStarWarsInfoActions';
import Page from '../../components/Page/Page';

const Species = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarWarsData('species'))
  }, [])

  const species = useSelector((state) => state.starWars.species);

  return (
    <div>
      <Page
        title="Species"
        intro="Species of Star Wars"
        data={species}
        titleKey="name"
      />
    </div>
  )
}

export default Species;