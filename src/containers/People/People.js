import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStarWarsData } from '../../actions/getStarWarsInfoActions';
import Page from '../../components/Page/Page';

const PeopleContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStarWarsData('people'))
  }, [])

  const people = useSelector((state) => state.starWars.people);

  return (
    <div>
      <Page
        title="People"
        intro="People of Star Wars"
        data={people}
        titleKey="name"
      />
    </div>
  )
}

export default PeopleContainer;