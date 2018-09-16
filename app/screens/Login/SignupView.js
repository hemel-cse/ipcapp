import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

class SignupView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            profileType: '',
            typeSelect: false,
        };
    }


    userSignup (e) {
        this.props.onSignup(this.state.username, this.state.password);
        e.preventDefault();
    }

    render() {

        if(!this.state.typeSelect) {
            return (
                <View> ok </View>
            );
        }
        else {

        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27, textAlign: 'center'}}>
                    Signup
                </Text>
                <View style={{margin: 7}}/>
                <TextInput 
                    style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}
                    placeholder='Username' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='default' 
                    value={this.props.username} 
                    onChangeText={(text) => this.setState({ username: text })} />
                <TextInput
                    style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}} 
                    placeholder='Password' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    secureTextEntry={true} 
                    value={this.state.password} 
                    onChangeText={(text) => this.setState({ password: text })} />
                <TextInput
                    style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                    placeholder='Email' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='default' 
                    value={this.state.email} 
                    onChangeText={(text) => this.setState({ email: text })} />
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userSignup(e)} title="SignUp"/>
                <View style={{margin: 7}}/>
                <Text style={{fontSize: 16, textAlign: 'center'}}>
                    Aready, signed up?
                </Text>
                <View style={{margin: 7}}/>
                <Button 
                    onPress={(e) => this.userSignup(e)} title="Login"
                    style={{width: '60%', textAlign: 'center', margin: 10, backgroundColor: 'red'}}/>

            </ScrollView>
        );
        }
    }
}

export default SignupView;