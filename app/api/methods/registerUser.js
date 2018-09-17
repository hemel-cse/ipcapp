import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function registerUser(username, password, email) {
    const payload = {username: username, password: password, email: email};
    return Api(
        ApiConstants.SIGNUP,
        payload,
        'post',
        null
    );
}
