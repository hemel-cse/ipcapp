/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestLogin(username, password) {
    return {
        type: types.LOGIN_REQUEST,
        username,
        password
    };
}


export function requestLogout() {
    return {
        type: types.LOGOUT_REQUEST
    };
}


export function loginFailed() {
    return {
        type: types.LOGIN_FAILED
    };
}

export function onLoginResponse(response) {
    return {
        type: types.LOGIN_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}


export function requestSignup(username, password, email, phone, address, city, country, name, nid, bio, firstName, lastName, profileType) {
    return {
        type: types.SIGNUP_REQUEST,
        username, 
        password, 
        email, 
        phone, 
        address, 
        city, 
        country, 
        name, 
        nid, 
        bio, 
        firstName, 
        lastName, 
        profileType
    };
}

export function signupFailed() {
    return {
        type: types.SIGNUP_FAILED
    };
}

export function onSignupResponse(response) {
    return {
        type: types.SIGNUP_RESPONSE,
        response
    };
}