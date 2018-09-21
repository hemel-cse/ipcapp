import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";

import Login from 'app/screens/Login';
import Profile from 'app/screens/Profile';
import Home from 'app/screens/Home';
import Splash from 'app/screens/Splash';

const HomeStack = createStackNavigator({
  Home: {
        screen: Home,
        navigationOptions: { 
          header: null, 
          gesturesEnabled: false 
        }
    },
});

const ProfileStack = createStackNavigator({
  Profile: {
        screen: Profile,
        navigationOptions: { 
          header: null, 
          gesturesEnabled: false,
          tabBarVisible: false
        }
    },
});

const LoginStack = createStackNavigator({
  Login: {
        screen: Login,
        navigationOptions: { 
          header: null, 
          gesturesEnabled: false,
          tabBarVisible: false
        }
    },
});

const HomeTab = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
  },
  {
    initialRouteName: "Home",
    navigationOptions: ({ navigation }) => {
      const { routeName, routes } = navigation.state;
      let params = routes && routes[1] && routes[1].params;
      return {
          tabBarIcon: ({ focused, tintColor }) => {
          let iconName;
          if (routeName === 'Home') {
            iconName = 'ios-home';
          } else if (routeName === 'Profile') {
            iconName = 'ios-contact';
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
        tabBarVisible:
          params && params.hideTabBar != null ? !params.hideTabBar : true,
        swipeEnabled:
          params && params.hideTabBar != null ? !params.hideTabBar : true
      };
    },
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style: {
        height: 60,
        paddingVertical: 5,
        backgroundColor: "#fff"
      },
      labelStyle: {
        fontSize: 13,
        lineHeight: 20,
        fontFamily: "CircularStd-Book"
      }
    },
    // tabBarComponent: TabBarBottom,
    // tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true
  }
);

const AppStack = createStackNavigator(
  { 
    HomeTab: HomeTab, 
  },
  {
    navigationOptions: { 
          header: null, 
          gesturesEnabled: false,
          tabBarVisible: false
    },
  }
);
const AuthStack = createStackNavigator(
  { 
    Login: LoginStack, 
  },
  {
    navigationOptions: { 
          header: null, 
          gesturesEnabled: false,
          tabBarVisible: false
    },
  }
);


const RNApp = createSwitchNavigator(
  {
    SplashScreen: Splash,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'SplashScreen',
    navigationOptions: {
      header: null, 
    },
  }
);

export default RNApp;
