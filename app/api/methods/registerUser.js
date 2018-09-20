import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function registerUser(username, password, email, phone, address, city, country, name, nid, bio, firstName, lastName, profileType) {
    const payload = {
        username: username, 
        password: password, 
        email: email, 
        phone: phone,
        address: address,
        city: city,
        country: country,
        name: name,
        nid: nid,
        bio: bio,
        first_name: firstName,
        last_name: lastName,
        profile_type: profileType,
    };

    return Api(
        ApiConstants.SIGNUP,
        payload,
        'post',
        null
    );
}
