import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import * as navigationActions from 'app/actions/navigationActions';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        
        
    }

    componentDidUpdate(prevProps) {

        if(!this.props.isLoggedIn) {
            navigationActions.navigateToLogin();
        }
    }
    
    render() {
        return <HomeView {...this.props} />;
    }
}

 function mapStateToProps(state, props) {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn,
    };
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);