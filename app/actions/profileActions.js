/*
 * Reducer actions related with Profile
 */
import * as types from './types';

export function requestProfile(username) {
    return {
        type: types.PROFILE_REQUEST,
        username,
    };
}


export function profileFailed() {
    return {
        type: types.PROFILE_FAILED
    };
}

export function onProfileResponse(response) {
    return {
        type: types.PROFILE_RESPONSE,
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