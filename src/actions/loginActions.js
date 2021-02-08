import { HTTP } from '../utils/http-util';
import {
  HANDLE_LOGIN_VALUES,
  LOGIN_ERROR,
} from '../redux/modules/login-reducer';

export const updateLoginValue = (key, value) => (dispatch) => {
  dispatch({
    type: HANDLE_LOGIN_VALUES,
    key,
    value,
  })
}

export const register = () => async (dispatch, getState) => {
  const { login: { username, password } } = getState();
  console.log('us', username)

  if (username && password) {
    try {
      await HTTP.post('signup', {
        username,
        password,
      })
    } catch (e) {
      console.log('register error:', e);
    }
  } else {
    dispatch({
      type: LOGIN_ERROR,
      message: 'Please fill in the fields'
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


    } catch (e) {
      console.log('submitLogin error:', e);
    }
  } else {
    dispatch({
      type: LOGIN_ERROR,
      message: 'Please fill in the fields'
    })
  }
}