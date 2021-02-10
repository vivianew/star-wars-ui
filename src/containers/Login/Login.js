import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { updateLoginValue, register, submitLogin } from '../../actions/loginActions';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { LOGIN_ERRORS } from "../../constants/error-codes";
import './login.scss';

const Login = () => {
  const dispatch = useDispatch();

  const {
    username,
    password,
    error,
    email,
    hasRegisteredSuccessfully,
  } = useSelector((state) => state.login);

  const { location: { pathname } } = useHistory();
  const isRegister = pathname === '/register';
  const isLogin = pathname === '/login';

  const handleUsernameInput = () => (e) => {
    dispatch(updateLoginValue('username', e.target.value))
  }

  const handlePasswordInput = () => (e) => {
    dispatch(updateLoginValue('password', e.target.value))
  }

  const handleEmailInput = () => (e) => {
    dispatch(updateLoginValue('email', e.target.value))
  }

  const handleSubmit = () => () => {
   if (isRegister) {
     dispatch(register())
   } else {
     dispatch(submitLogin())
   }
  }

  const getErrorWarning = (err) => (
    <div>
      {
        err && (
          <div className="login__footnote-error">
            <div className="login__error">
              {LOGIN_ERRORS[err] || err}
            </div>
          </div>
        )
      }
    </div>
  )

  return (
    <div className="login__container">
      <div className="login__content">
        <div className="login__title">
          {
            isRegister ? '🌠 Register Here' : '🌠 Login Here'
          }
        </div>

        <form
          onSubmit={handleSubmit()}
          className="login__form"
        >
          <Input
            label="Username 💁"
            type="text"
            value={username}
            onChange={handleUsernameInput()}
            placeholder="Leia"
          />

          <Input
            label="email 📧"
            type="text"
            value={email}
            onChange={handleEmailInput()}
            placeholder="leia@organa.com"
          />

          <Input
            label="Password 🔑"
            type="password"
            value={password}
            onChange={handlePasswordInput()}
            placeholder="Leia's password"
          />

          <Button
            type="submit"
            label={isRegister ? 'Register' : 'Login'}
          />
        </form>

        {(!isRegister && !hasRegisteredSuccessfully) &&
          <>
            <div className="login__footnote">
              Not registered yet? Register <Link to="/register">here</Link>
            </div>
            <div className="login__footnote">
              Or forgot your password? Reset <Link to="/forgetPW">here</Link>
            </div>
          </>
        }

        {(isRegister && !hasRegisteredSuccessfully) &&
        <div className="login__footnote">
          Already registered? Login <Link to="/login">here</Link>
        </div>
        }

        {
          (hasRegisteredSuccessfully && !isLogin) && (
            <div className="login__footnote login__success">
              Successful registration! Login <Link to="/login">here</Link>
            </div>
          )
        }

        {
          <div className="login__error-mobile">
            {getErrorWarning(error)}
          </div>
        }
      </div>

      <div className="login__error-desktop">
        {getErrorWarning(error)}
      </div>
    </div>
  )
}

export default Login;