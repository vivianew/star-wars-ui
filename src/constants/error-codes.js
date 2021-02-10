export const USER_NOT_FOUND = 'USER_NOT_FOUND';
export const PASSWORD_INVALID = 'PASSWORD_INVALID';
export const USER_EXISTS = 'USER_EXISTS';
export const FORGOT_EMAIL_NOT_FOUND = 'FORGOT_EMAIL_NOT_FOUND';

export const LOGIN_ERRORS = {
  [USER_NOT_FOUND]: 'Sorry your username/password is wrong, please check your credentials',
  [PASSWORD_INVALID]: 'Sorry your username/password is wrong, please check your credentials',
  [USER_EXISTS]: 'Sorry, this username already exists',
  [FORGOT_EMAIL_NOT_FOUND]: 'Sorry, please check your credentials'
}