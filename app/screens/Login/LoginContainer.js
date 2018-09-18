import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import LoginView from './LoginView';
import SignupView from './SignupView';
import { connect } from 'react-redux';

import { requestLogin, requestSignup } from '../../actions/loginActions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            loginpage: true,
            username: '',
            password: '',
            email: '',
            profileType: '',
            typeSelect: false,
        };


    }


    componentDidMount(){

        if (this.props.isLoggedIn) {
            this.loggedIn();
        }
        
    }

    componentDidUpdate(prevProps) {
        if(this.props.isLoggedIn){
            this.loggedIn();
        }
        
    }

    handleLoginSignup = (e) => {
      this.setState(state => ({
        loginpage: !state.loginpage
      }));
      e.preventDefault();
    }


    loggedIn = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        if(this.props.loading){
            return <ActivityIndicator />;
        }
        if (!this.state.loginpage) {
            return <SignupView {...this.props} {...this.state} login={this.handleLoginSignup} />;
        } else {
            return <LoginView {...this.props} {...this.state} signup={this.handleLoginSignup} />;
        }
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        isSignedUp: state.signupReducer.isSignedUp,
        loading: state.loadingReducer.isLoginLoading,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (username, password) => { dispatch(requestLogin(username, password)); },
        onSignUp: (username, password, email, phone) => { dispatch(requestSignup(username, password, email, phone)); }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
