/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isProfileFetched: false,
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    name: '',
    picture: '',
    bio: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    photoId: '',
    profileType: '',
    nid: '',

};

export const profileReducer = createReducer(initialState, {
    [types.PROFILE_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
            token: action.token,
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
            username: action.response.username,
            firstName: action.response.first_name,
            lastName: action.response.last_name,
            name: action.response.name,
            nid: action.response.nid,
            bio: action.response.bio,
            city: action.response.city,
            country: action.response.country,
            profileType: action.response.profile_type,
            address: action.response.address
        };
    },
    [types.PROFILE_FAILED](state) {
        return {
            ...state,
            isProfileFetched: false,
        };
    },
    [types.PROFILE_RESET](state){
        return{
            ...state,
            isProfileFetched: false,
            id: '',
            username: '',
            firstName: '',
            lastName: '',
            name: '',
            picture: '',
            bio: '',
            phone: '',
            address: '',
            zipCode: '',
            city: '',
            country: '',
            photoId: '',
            profileType: '',
            nid: '',
        };
    }
});