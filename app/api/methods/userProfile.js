import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function userProfile(username, token) {
    const name = username;
    const authToken = "Token "+ token;
    return Api(
        ApiConstants.PROFILE + name + "/",
        null,
        'get',
        authToken
    );
}
