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
        navigationOptions: { header: null, gesturesEnabled: false }
    },
});

export default RNApp;
