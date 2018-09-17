import React, { Component } from 'react';
import ProfileView from './ProfileView';
import { connect } from 'react-redux';

import { requestLogout } from '../../actions/loginActions';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){

        if (!this.props.isLoggedIn) {
            this.loggedIn();
        }
        
    }

    loggedIn = () => {
        this.props.navigation.navigate('Login')
    }


    render() {
        if (!this.props.isLoggedIn) {
            this.loggedIn();
        }
        return (
            <ProfileView {...this.props} {...this.state} />
         );
    }
}

function mapStateToProps(state,props) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogout: () => { dispatch(requestLogout()); },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
