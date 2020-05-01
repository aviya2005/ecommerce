import { all, call, takeLatest, put } from "redux-saga/effects";

import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.action";
export function* clearCartOnSignOutSuccess() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOutSuccess);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
