import React, { Component } from 'react';
import { ScrollView, View, Text, Button, KeyboardAvoidingView } from 'react-native';
import styles from './styles';

class ProfileView extends Component {
    constructor(props) {
        super(props);
    }

    handleuserLogout = (e) => {
        // this.props.onResetProfile();
        this.props.onLogout();
        e.preventDefault();
    }


    render() {
        if(this.props.userProfileType == "MCT" || this.props.userProfileType == "ORG"){
            return (
                <View style={styles.container}>
        
                    <Text style={styles.headerText, {fontSize: 18, paddingTop: 15, textAlign: 'center', color: "grey"}}>
                        User Profile
                    </Text>
                    <ScrollView style={{padding: 20}}>
                        <KeyboardAvoidingView behavior='position'>
                                <View style={{margin: 7}}/>
                                <Text style={{fontSize: 16}}>
                                    Name: {this.props.userOrgName}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    Phone: {this.props.userPhone}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    Address: {this.props.userAddress}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    City: {this.props.userCity}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    Country: {this.props.userCountry}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    Profile Type: Marchent
                                </Text>
                                <View style={{margin: 20}}/>
                                <Button 
                                    onPress={this.handleuserLogout} title="Logout"
                                    style={{width: '60%', textAlign: 'center', margin: 10, backgroundColor: 'red'}} />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            );

        }
        else {
            return (
                <View style={styles.container}>
    
                    <Text style={styles.headerText, {fontSize: 18, paddingTop: 15, textAlign: 'center', color: "grey"}}>
                        User Profile
                    </Text>
                    <ScrollView style={{padding: 20}}>
                        <KeyboardAvoidingView behavior='position'>
                                <View style={{margin: 7}}/>
                                <Text style={{fontSize: 16}}>
                                    Name: {this.props.userFirstName} {this.props.userLastName}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    Phone: {this.props.userPhone}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    NID: {this.props.userNid}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    Address: {this.props.userAddress}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    City: {this.props.userCity}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    Country: {this.props.userCountry}
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    Profile Type: Consumer
                                </Text>
                                <View style={{margin: 20}}/>
                                <Button 
                                    onPress={this.handleuserLogout} title="Logout"
                                    style={{width: '60%', textAlign: 'center', margin: 10, backgroundColor: 'red'}} />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            );
        }
        
    }
}

export default ProfileView;
