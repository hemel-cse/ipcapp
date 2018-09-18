import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Button, Image } from 'react-native';
import styles from './styles';
import images from '../../config/images';

class SignupView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            phone: '',
            profileType: '',
            typeSelect: false,
        };
    }


    handleUserSignup = (e) => {
        this.props.onSignUp(this.state.username, this.state.password, this.state.email, this.state.phone);
        e.preventDefault();
    }
    
    render() {

        return (
            <ScrollView style={{padding: 20}}>
                <View style={{alignItems: 'center', bottom: 5}}> 
                    <Image source={images.icons.logo} style={{resizeMode: 'contain', height: 200 , width: 200 }} />
                </View>
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
                    value={this.state.username} 
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
                <TextInput
                    style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                    placeholder='Phone' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='default' 
                    value={this.state.phone} 
                    onChangeText={(text) => this.setState({ phone: text })} />
                <View style={{margin: 7}}/>
                <Button onPress={this.handleUserSignup} title="Signup"/>
                <View style={{margin: 7}}/>
                <Text style={{fontSize: 16, textAlign: 'center'}}>
                    Aready, signed up?
                </Text>
                <View style={{margin: 7}}/>
                <Button 
                    onPress={this.props.login} title="Login"
                    style={{width: '60%', textAlign: 'center', margin: 10, backgroundColor: 'red'}}
                    />

            </ScrollView>
        );
    }
}


export default SignupView;
