/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isLoggedIn: false,
    token: null,
    username: '',
    password: ''
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
            password: action.password
        };
    },
    [types.LOGOUT_REQUEST](state) {
        return {
            ...state,
            username: '',
            password: '',
            isLoggedIn: false,
            token: null,
        };
    },
    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            isLoggedIn: true,
            token: action.response
        };
    },
    [types.LOGIN_FAILED](state) {
        return {
            ...state,
            isLoggedIn: false
        };
    }
});