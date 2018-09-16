import React, { Component } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import styles from './styles';

class ProfileView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            profileType: '',
        };
    }


    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27, textAlign: 'center'}}>
                    Profile
                </Text>
                <View style={{margin: 7}}/>
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userSignup(e)} title="SignUp"/>
                <View style={{margin: 7}}/>
                <Text style={{fontSize: 16, textAlign: 'center'}}>
                    ok
                </Text>


            </ScrollView>
        );
    }
}

export default ProfileView;
