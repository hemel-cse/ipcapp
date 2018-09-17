import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function loginUser(username, password) {
    const payload = {username: username, password: password};
    return Api(
        ApiConstants.LOGIN,
        payload,
        'post',
        null
    );
}