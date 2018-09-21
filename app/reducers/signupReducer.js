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
    email: '',
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

export const signupReducer = createReducer(initialState, {
    [types.SIGNUP_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
            password: action.password,
            email: action.email,
            firstName: action.firstName,
            lastName: action.lastName,
            name: action.name,
            picture: action.picture,
            bio: action.bio,
            phone: action.phone,
            address: action.address,
            zipCode: action.zipCode,
            city: action.city,
            country: action.country,
            photoId: action.photoId,
            profileType: action.profileType,
            nid: action.nid,
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