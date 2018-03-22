export const LOGGED_IN = 'LOGIN';
export const LOGGED_OUT = 'LOGOUT';

export const LOGIN = (authDetails) => ({type: LOGGED_IN, details:authDetails});
export const LOGOUT = () => ({type: LOGGED_OUT});
