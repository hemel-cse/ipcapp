import React, { Component } from 'react';
import ProfileView from './ProfileView';
import { connect } from 'react-redux';

import { requestLogout } from '../../actions/loginActions';
import { requestProfile } from '../../actions/profileActions';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
         this.state = {
            username: '',
        };
    }

    componentDidMount(){

        if (!this.props.isLoggedIn) {
            this.loggedIn();
        }
            
        if(!this.props.isProfileFetched){
            this.fetchProfile();
        }
        
    }

    componentDidUpdate(prevProps) {
        if (!this.props.isLoggedIn) {
            this.loggedIn();
        }
        if(!this.props.isProfileFetched){
            this.fetchProfile();
        }
    }

    loggedIn = () => {
        this.props.navigation.navigate('Login')
    }

    fetchProfile = () => {
        this.props.onProfileFetch(this.props.usernameLoggedIn);
    }


    render() {
        return (
            <ProfileView {...this.props} {...this.state} />
         );
    }
}

function mapStateToProps(state, props) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        usernameLoggedIn: state.loginReducer.username,
        tokenLoggedIn: state.loginReducer.token,
        isProfileFetched: state.profileReducer.isProfileFetched,
        userPhone: state.profileReducer.phone,

    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogout: () => { dispatch(requestLogout()); },
        onProfileFetch: (username) => { dispatch(requestProfile(username)); },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
