import React, { Component } from 'react';
import ProfileView from './ProfileView';
import { connect } from 'react-redux';

class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return <ProfileView {...this.props} />;
    }
}

function mapStateToProps(state,props) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
    };
}
function mapDispatchToProps(dispatch) {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
