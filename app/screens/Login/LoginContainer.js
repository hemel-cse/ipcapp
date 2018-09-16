import React, { Component } from 'react';
import LoginView from './LoginView';
import SignupView from './SignupView';
import { connect } from 'react-redux';

import { requestLogin } from '../../actions/';

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

    handleLoginSignup = (e) => {
      this.setState(state => ({
        loginpage: !state.loginpage
      }));
      e.preventDefault();
    }

    componentDidMount(){
        if (this.state.isLoggedIn) {
            this.props.navigation.navigate('Profile')
        }
    }

    render() {

        if (!this.state.loginpage) {
            return <SignupView {...this.props} {...this.state} login={this.handleLoginSignup} />;
        } else {
            return <LoginView {...this.props} {...this.state} signup={this.handleLoginSignup} />;
        }
    }
}

function mapStateToProps(state,props) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (username, password) => { dispatch(requestLogin(username, password)); },
        onSignUp: (username, password) => { dispatch(requestSignup(username, password)); }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
