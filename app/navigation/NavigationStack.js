import { createStackNavigator } from 'react-navigation';

import Login from 'app/screens/Login';
import Profile from 'app/screens/Profile';


const RNApp = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: { header: null, gesturesEnabled: false }
    },
    Profile: {
        screen: Profile,
        navigationOptions: { title: 'Profile' }
    }
});

export default RNApp;
