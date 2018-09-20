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

    }

    handleLoginSignup = (e) => {
      this.setState(state => ({
        loginpage: !state.loginpage
      }));
      e.preventDefault();
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
        onSignUp: (username, password, email, phone, address, city, country, name, nid, bio, firstName, lastName, profileType) => {
             dispatch(requestSignup(username, password, email, phone, address, city, country, name, nid, bio, firstName, lastName, profileType)); 
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);