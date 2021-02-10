import { HTTP } from '../utils/http-util';
import { GET_SW_DATA } from '../redux/modules/star-wars-reducer';

export const getStarWarsData = (dataType) => async (dispatch) => {
  const { data: { results }} = await HTTP.getStarWars(dataType);
  dispatch({
    type: GET_SW_DATA,
    key: dataType,
    value: results,
  })
};