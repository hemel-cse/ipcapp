import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

class LoginView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    handleuserLogin = (e) => {
        this.props.onLogin(this.state.username, this.state.password);
        e.preventDefault();
    }


    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27, textAlign: 'center'}}>
                    Login
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
                <View style={{margin: 7}}/>
                <Button onPress={this.handleuserLogin} title="Login"/>
                <View style={{margin: 7}}/>
                <Text style={{fontSize: 16, textAlign: 'center'}}>
                    Not Registered?
                </Text>
                <View style={{margin: 7}}/>
                <Button 
                    onPress={this.props.signup} title="Signup"
                    style={{width: '60%', textAlign: 'center', margin: 10, backgroundColor: 'red'}} />
            </ScrollView>
        );
    }
}

export default LoginView;
