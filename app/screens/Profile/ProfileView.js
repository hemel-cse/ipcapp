import React, { Component } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import styles from './styles';

class ProfileView extends Component {
    constructor(props) {
        super(props);
    }

    handleuserLogout = (e) => {
        this.props.onLogout();
        e.preventDefault();
    }


    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27, textAlign: 'center'}}>
                    Profile
                </Text>
                <View style={{margin: 7}}/>
                <View style={{margin: 7}}/>
                <Text style={{fontSize: 16, textAlign: 'center'}}>
                    profileview
                </Text>
                <Text style={{fontSize: 16, textAlign: 'center'}}>
                    {this.props.userPhone}
                </Text>
                <View style={{margin: 7}}/>
                <Button 
                    onPress={this.handleuserLogout} title="Logout"
                    style={{width: '60%', textAlign: 'center', margin: 10, backgroundColor: 'red'}} />

            </ScrollView>
        );
    }
}

export default ProfileView;
