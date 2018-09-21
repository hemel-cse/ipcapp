/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import registerSaga from './registerSaga';
import profileSaga from "./profileSaga";

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(types.SIGNUP_REQUEST, registerSaga)]);
    yield all([takeEvery(types.PROFILE_REQUEST, profileSaga)]);

}
