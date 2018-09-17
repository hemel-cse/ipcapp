/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isSignedUp: false,
    token: null,
    username: '',
    password: '',
    email: ''
};

export const signupReducer = createReducer(initialState, {
    [types.SIGNUP_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
            password: action.password,
            email: action.email
        };
    },
    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.SIGNUP_RESPONSE](state, action) {
        return {
            ...state,
            isSignedUp: true,
            token: action.response
        };
    },
    [types.SIGNUP_FAILED](state) {
        return {
            ...state,
            isSignedUp: false
        };
    }
});