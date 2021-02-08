export const REGISTRATION_SUCCESS = '@loginReducer/registrationSuccess';
export const REGISTRATION_FAIL = '@loginReducer/registrationFail';
export const LOGIN_SUCCESS = '@loginReducer/loginSuccess';
export const LOGIN_FAIL = '@loginReducer/loginFail';

export const HANDLE_LOGIN_VALUES = '@loginReducer/handleLoginValues';
export const LOGIN_ERROR = '@loginReducer/loginError';

const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        films: action.films,
      }
    case HANDLE_LOGIN_VALUES: {
      return {
        ...state,
        [action.key]: action.value,
      }
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        error: action.message,
      }
    }

    default: return state;
  }
}

export default reducer;