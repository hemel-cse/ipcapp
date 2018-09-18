import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function userProfile(username) {
    const name = username;
    return Api(
        ApiConstants.PROFILE + name + "/",
        null,
        'get',
        null
    );
}
