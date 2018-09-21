/* Redux saga class
 * Register the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 * email - email
 */
import { put, call, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import registerUser from 'app/api/methods/registerUser';
import * as loginActions from 'app/actions/loginActions';
// import * as navigationActions from '@actions/navigationActions';

//selector Function used to access reducer states
export const getNetworkState = state => {
    return {
        isConnected: state.network.isConnected
    };
};

// Our worker Saga that register the user
export default function* signupAsync(action) {
    yield put(loginActions.enableLoader());
    try {
        const response = yield call(
            registerUser,
            action.username,
            action.password,
            action.email,
            action.phone, 
            action.address, 
            action.city, 
            action.country, 
            action.name, 
            action.nid, 
            action.bio, 
            action.firstName, 
            action.lastName, 
            action.profileType
        );
        console.log(action.profileType)
        console.log(response)
        if (response.auth_token) {
            console.log(response)
            yield put(loginActions.onSignupResponse(response.auth_token));
            yield put(loginActions.disableLoader({}));
            setTimeout(() => {
                Alert.alert('Signup Complete', 'Login Now');
            }, 200);
            // yield put(navigationActions.navigateToHomeScreen({}));
        } else {
            yield put(loginActions.signupFailed());
            yield put(loginActions.disableLoader({}));
            setTimeout(() => {
                Alert.alert('Signup Failed', response.Message);
            }, 200);
        }
    } catch (error) {
        yield put(loginActions.signupFailed());
        yield put(loginActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('Request Error', 'failed');
        }, 200);
    }
}
