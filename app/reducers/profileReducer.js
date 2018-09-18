/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isProfileFetched: false,
    id: '',
    username: '',
    first_name: '',
    last_name: '',
    name: '',
    picture: '',
    bio: '',
    phone: '',
    address: '',
    zip_code: '',
    city: '',
    country: '',
    photo_id: '',
    profile_type: '',

};

export const profileReducer = createReducer(initialState, {
    [types.PROFILE_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
        };
    },
    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.PROFILE_RESPONSE](state, action) {
        return {
            ...state,
            isProfileFetched: true,
            phone: action.response.phone,
            username: action.response.username
        };
    },
    [types.PROFILE_FAILED](state) {
        return {
            ...state,
            isProfileFetched: false
        };
    }
});