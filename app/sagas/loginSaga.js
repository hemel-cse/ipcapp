/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import loginUser from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
// import * as navigationActions from 'app/navigation';
import * as navigationActions from 'app/actions/navigationActions';

//selector Function used to access reducer states
export const getNetworkState = state => {
    return {
        isConnected: state.network.isConnected
    };
};

// Our worker Saga that logins the user
export default function* loginAsync(action) {
    yield put(loginActions.enableLoader());
    try {
        const response = yield call(
            loginUser,
            action.username,
            action.password
        );
        console.log(response)
        if (response.token) {
            yield put(loginActions.onLoginResponse(response.token));
            yield put(loginActions.disableLoader({}));
            navigationActions.navigateToHome();
        } else {
            yield put(loginActions.loginFailed());
            yield put(loginActions.disableLoader({}));
            setTimeout(() => {
                Alert.alert('Login Failed!', response.Message);
            }, 200);
        }
    } catch (error) {
        console.log(error)
        yield put(loginActions.loginFailed());
        yield put(loginActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('Request Problem', 'failed');
        }, 200);
    }
}
