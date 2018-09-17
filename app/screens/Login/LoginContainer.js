import React, { Component } from 'react';
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
        if (this.props.isLoggedIn) {
            this.loggedIn();
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
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (username, password) => { dispatch(requestLogin(username, password)); },
        onSignUp: (username, password, email) => { dispatch(requestSignup(username, password, email)); }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
