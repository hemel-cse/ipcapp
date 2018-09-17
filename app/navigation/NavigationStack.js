import { createStackNavigator } from 'react-navigation';

import Login from 'app/screens/Login';
import Profile from 'app/screens/Profile';


const RNApp = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: { title: 'Profile', gesturesEnabled: false }
    },
    Login: {
        screen: Login,
        navigationOptions: { header: null, gesturesEnabled: false }
    }
});

export default RNApp;
