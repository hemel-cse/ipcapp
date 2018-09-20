import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import * as navigationActions from 'app/actions/navigationActions';
import { requestProfile } from '../../actions/profileActions';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
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
            return <HomeView {...this.props} {...this.state} />;
        }
    }
}

 function mapStateToProps(state, props) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
        userProfileType: state.profileReducer.profileType,
        usernameLoggedIn: state.loginReducer.username,
        tokenLoggedIn: state.loginReducer.token,
        isProfileFetched: state.profileReducer.isProfileFetched,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onProfileFetch: (username, token) => { dispatch(requestProfile(username, token)); },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);