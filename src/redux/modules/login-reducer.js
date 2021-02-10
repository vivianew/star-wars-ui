export const REGISTRATION_SUCCESS = '@loginReducer/REGISTRATION_SUCCESS';
export const LOGIN_SUCCESS = '@loginReducer/LOGIN_SUCCESS';
export const HANDLE_LOGIN_VALUES = '@loginReducer/HANDLE_LOGIN_VALUES';
export const LOGIN_ERROR = '@loginReducer/LOGIN_ERROR';
export const LOGOUT = '@loginReducer/LOGOUT';
export const VALIDATE_EMAIL_FOR_RESET = '@loginReducer/VALIDATE_EMAIL_FOR_RESET';
export const UPDATE_RESET_PW_STEP = '@loginReducer/UPDATE_RESET_PW_STEP';
export const CLEAR_FORM_VALUES = '@loginReducer/CLEAR_FORM_VALUES';

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  username: '',
  password: '',
  email: '',
  isLoggedIn: !!user,
  error: '',
  hasRegisteredSuccessfully: false,
  isEmailValid: false,
  resetPasswordStep: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return {
        ...initialState,
        hasRegisteredSuccessfully: true,
      }
    case HANDLE_LOGIN_VALUES: {
      return {
        ...state,
        [action.key]: action.value,
        error: '',
      }
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        error: action.error,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
      }
    }
    case LOGOUT: {
      return {
        ...initialState,
        isLoggedIn: false,
      }
    }
    case VALIDATE_EMAIL_FOR_RESET: {
      return {
        ...state,
        isEmailValid: true,
        userResetToken: action.userResetToken,
      }
    }
    case UPDATE_RESET_PW_STEP: {
      return {
        ...state,
        resetPasswordStep: action.step,
      }
    }
    case CLEAR_FORM_VALUES: {
      return {
       ...state,
        username: '',
        password: '',
        email: '',
      }
    }
    default: return state;
  }
}

export default reducer;