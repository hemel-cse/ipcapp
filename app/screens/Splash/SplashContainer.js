import React, { Component } from 'react';
import SplashView from './SplashView';
import { connect } from 'react-redux';

class SplashContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        };
    }

    componentDidMount(){
        
        if(this.props.isLoggedIn){
            this.props.navigation.navigate('App');
        }
        else {
            this.props.navigation.navigate('Auth')
        }
        
    }

    render() {
        return <SplashView {...this.props} {...this.state} />;
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
)(SplashContainer);