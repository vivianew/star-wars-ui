export const GET_SW_FILMS = '@getSarWarsInfo/films';

const initialState = {
  films: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SW_FILMS:
      return {
        ...state,
        films: action.films,
      }

    default: return state;
  }
}

export default reducer;