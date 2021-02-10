import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateLoginValue,
  sendEmailForReset,
  validateResetLink,
  submitNewPassword,
} from '../../actions/loginActions';
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { LOGIN_ERRORS } from '../../constants/error-codes';
import './login.scss';

const ForgetPW = () => {
  const dispatch = useDispatch();

  const {
    email,
    resetPasswordStep,
    password,
    error,
  } = useSelector((state) => state.login);

  const handleEmail = () => (e) => {
    dispatch(updateLoginValue('email', e.target.value))
  }

  const submitForgotPasswordEmail = () => () => {
    dispatch(sendEmailForReset())
  }

  const continueResetPW = () => () => {
    dispatch(validateResetLink())
  }

  const handleNewPassword = () => (e) => {
    dispatch(updateLoginValue('password', e.target.value))
  }

  const handleSubmitNewPassword = () => () => {
    dispatch(submitNewPassword())
  }

  return (
    <div className="login__container">
      <div className="login__content">
        <div className="login__title">
          Forgot Your Password?
        </div>
        <form
          onSubmit={submitForgotPasswordEmail()}
          className="login__form"
        >
          <Input
            label="email 📧"
            type="text"
            value={email}
            onChange={handleEmail()}
            placeholder="leia@organa.com"
          />
          <Button
            type="submit"
            label="Show Me Password Reset Link"
          />
        </form>

        {
          resetPasswordStep === 1 && (
            <div className="login__footnote login__link">
              <div onClick={continueResetPW()}>Click this link to continue reset password</div>
            </div>
          )
        }

        {
          resetPasswordStep === 2 && (
            <form
              onSubmit={handleSubmitNewPassword()}
              className="login__form login__new-pw"
            >
              <Input
                label="new password 🔑"
                type="password"
                value={password}
                onChange={handleNewPassword()}
                placeholder="Leia's NEW password"
              />
              <Button
                type="submit"
                label="Submit My New Password"
              />
            </form>

          )
        }

        {
           resetPasswordStep === 3 && (
            <div className="login__footnote login__success">
              Your password reset is successful, please login again <Link to="/" >here</Link>
            </div>

          )
        }

        {
          error && (
            <div className="login__error">{LOGIN_ERRORS[error] || error}</div>
          )
        }

        {
          <div className="login__footnote">
            Go back to login <Link to="/login">here</Link>
          </div>

        }
      </div>
    </div>
  )
}

export default ForgetPW;