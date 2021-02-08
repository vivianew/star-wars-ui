import { HTTP } from '../utils/http-util';
import {
  GET_SW_FILMS
} from '../redux/modules/star-wars-reducer';

export const getStarWarsFilms = () => async (dispatch) => {
  const { data: { results }} = await HTTP.get('films');

  dispatch({
    type: GET_SW_FILMS,
    films: results
  })
}