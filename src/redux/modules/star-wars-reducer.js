export const GET_SW_DATA = '@getStarWarsInfo/GET_SW_DATA';

const initialState = {
  films: [],
  people: [],
  starships: [],
  vehicles: [],
  planets: [],
  species: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SW_DATA: {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    default: return state;
  }
}

export default reducer;