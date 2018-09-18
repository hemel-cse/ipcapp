import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function registerUser(username, password, email, phone) {
    const payload = {username: username, password: password, email: email, phone: phone};
    return Api(
        ApiConstants.SIGNUP,
        payload,
        'post',
        null
    );
}
