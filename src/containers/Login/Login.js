import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { updateLoginValue, register, submitLogin } from '../../actions/loginActions';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import './login.scss';

const Login = () => {
  const dispatch = useDispatch();

  const {
    username,
    password,
    error,
  } = useSelector((state) => state.login);

  const { location: { pathname } } = useHistory();
  const isRegister = pathname === '/register';

  const handleUsernameInput = () => (e) => {
    dispatch(updateLoginValue('username', e.target.value))
  }

  const handlePasswordInput = () => (e) => {
    dispatch(updateLoginValue('password', e.target.value))
  }


  const handleSubmit = () => () => {

   if (isRegister) {
     dispatch(register())
   } else {
     dispatch(submitLogin())
   }
  }

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
            label="Password 🔑"
            type="password"
            value={password}
            onChange={handlePasswordInput()}
            placeholder="Leia's password"
          />

          <Button
            type="submit"
            label="Submit"
          />
        </form>

        {!isRegister &&
        <div className="login__footnote">
          Not registered yet? Register <Link to="/register">here</Link>
        </div>
        }

        {isRegister &&
        <div className="login__footnote">
          Already registered? Login <Link to="/login">here</Link>
        </div>
        }

        {
          error && (
            <div>{error}</div>
          )
        }
      </div>
    </div>
  )
}

export default Login;