import React, { Component } from 'react';
import LoginView from './LoginView';
import SignupView from './SignupView';
import { connect } from 'react-redux';

import { requestLogin } from '../../actions/';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: false,
        };
    }



    render() {
        if (!this.props.isLoggedIn) {
            return <SignupView {...this.props} />;
        } else {
            return <LoginView {...this.props} />;
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
