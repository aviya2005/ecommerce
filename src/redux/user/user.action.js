import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START
});
export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
});
export const signInSuccess = user => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user
});
export const signInFailure = error => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error
});
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});
