import { HTTP } from '../utils/http-util';
import {
  HANDLE_LOGIN_VALUES,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTRATION_SUCCESS,
  VALIDATE_EMAIL_FOR_RESET,
  UPDATE_RESET_PW_STEP,
  CLEAR_FORM_VALUES,
} from '../redux/modules/login-reducer';

export const updateLoginValue = (key, value) => (dispatch) => {
  dispatch({
    type: HANDLE_LOGIN_VALUES,
    key,
    value,
  })
}

export const register = () => async (dispatch, getState) => {
  const { login: { username, password, email } } = getState();

  if (username && password && email) {
    try {
      await HTTP.post('signup', {
        username,
        password,
        email,
      });

      dispatch({
        type: REGISTRATION_SUCCESS,
      })


    } catch (e) {
      const errorCode = e.response.data.errorCode;

      dispatch({
        type: LOGIN_ERROR,
        error: errorCode,
      });

      dispatch({
        type: CLEAR_FORM_VALUES,
      });
    }
  } else {
    dispatch({
      type: LOGIN_ERROR,
      error: 'Please fill in the fields',
    })
  }
}

export const submitLogin = () => async (dispatch, getState) => {
  const { login: { username, password } } = getState();

  if (username && password) {
    try {
      const { data } = await HTTP.post('signin', {
        username,
        password,
      })

      if (data.accessToken) {
        localStorage.setItem("user", JSON.stringify(data));
      }

      dispatch({
        type: LOGIN_SUCCESS
      })
    } catch (e) {
      const errorCode = e.response.data.errorCode;

      dispatch({
        type: LOGIN_ERROR,
        error: errorCode,
      })

      dispatch({
        type: CLEAR_FORM_VALUES,
      })
    }
  } else {
    dispatch({
      type: LOGIN_ERROR,
      error: 'Please fill in the fields',
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");

  dispatch({
    type: LOGOUT
  })
};

export const sendEmailForReset = () => async (dispatch, getState) => {
  const { login: { email } } = getState();

  if (email) {
    try {
      const { data: { userResetToken } } = await HTTP.post('forgot', { email })

      dispatch({
        type: VALIDATE_EMAIL_FOR_RESET,
        userResetToken,
      });

      dispatch({
        type: UPDATE_RESET_PW_STEP,
        step: 1,
      });
    } catch (e) {
      const errorCode = e.response.data.errorCode;

      dispatch({
        type: LOGIN_ERROR,
        error: errorCode,
      })
    }
  } else {
    dispatch({
      type: LOGIN_ERROR,
      error: 'Please fill in the fields',
    })
  }
}

export const validateResetLink = () => async (dispatch, getState) => {
  const { login: { userResetToken } } = getState();

  try {
    await HTTP.get('reset', `${userResetToken}` )

    dispatch({
      type: UPDATE_RESET_PW_STEP,
      step: 2,
    })

  } catch (e) {
    console.log('validateResetLink error:', e)
  }
}

export const submitNewPassword = () => async (dispatch, getState) => {
  const { login: { password, userResetToken } } = getState();

  try {
    await HTTP.post('resetPW', { password, token: userResetToken })

    dispatch({
      type: UPDATE_RESET_PW_STEP,
      step: 3,
    })

    dispatch({
      type: CLEAR_FORM_VALUES,
    })

  } catch (e) {
    console.log('validateResetLink error:', e)
  }
}