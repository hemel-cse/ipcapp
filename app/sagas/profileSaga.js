/* Redux saga class
 * Profile for the user on the app
 * requires username and token.
 * un - username
 * token - token
 */
import { put, call, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import userProfile from 'app/api/methods/userProfile';
import * as profileActions from 'app/actions/profileActions';
// import * as navigationActions from 'app/navigation';

// import * as navigationService from 'app/navigation/navigationService';
// import { NavigationActions } from 'react-navigation';

//selector Function used to access reducer statess
export const getNetworkState = state => {
    return {
        isConnected: state.network.isConnected
    };
};

// Our worker Saga that get the user profile
export default function* profileAsync(action) {
    yield put(profileActions.enableLoader());
    try {
        const response = yield call(
            userProfile,
            action.username,
            action.token,
        );
        console.log(response)
        if (response.id) {
            yield put(profileActions.onProfileResponse(response));
            yield put(profileActions.disableLoader({}));
            // yield put(NavigationActions.navigate({ routeName: 'Profile' }));
        } else {
            yield put(profileActions.profileFailed());
            yield put(profileActions.disableLoader({}));
            setTimeout(() => {
                Alert.alert('Profile Failed!', response.Message);
            }, 200);
        }
    } catch (error) {
        console.log(error)
        yield put(profileActions.profileFailed());
        yield put(profileActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('Request Problem', 'failed');
        }, 200);
    }
}
