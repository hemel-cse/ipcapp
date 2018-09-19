import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import ProfileView from './ProfileView';
import { connect } from 'react-redux';

import { requestLogout } from '../../actions/loginActions';
import { requestProfile } from '../../actions/profileActions';
import * as navigationActions from 'app/actions/navigationActions';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
         this.state = {
            username: '',
        };
    }
    
    componentDidMount(){
            
        if(!this.props.isProfileFetched){
            this.fetchProfile();
        }
        
    }

    componentDidUpdate(prevProps) {

        if(!this.props.isProfileFetched){
            this.fetchProfile();
        }
        if(!this.props.isLoggedIn) {
            navigationActions.navigateToLogin();
        }
    }

    fetchProfile = () => {
        this.props.onProfileFetch(this.props.usernameLoggedIn, this.props.tokenLoggedIn);
    }

    render() {
        if(!this.props.isProfileFetched){
            return <ActivityIndicator />;
        }
        else {
        return (
            <ProfileView {...this.props} {...this.state} />
         );
        }
    }
}

function mapStateToProps(state, props) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        usernameLoggedIn: state.loginReducer.username,
        tokenLoggedIn: state.loginReducer.token,
        isProfileFetched: state.profileReducer.isProfileFetched,
        userPhone: state.profileReducer.phone,
        loading: state.loadingReducer.isLoginLoading,

    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogout: () => { dispatch(requestLogout()); },
        onProfileFetch: (username, token) => { dispatch(requestProfile(username, token)); },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
