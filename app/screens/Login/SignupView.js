import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Button, Image, Picker } from 'react-native';
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
            address: '',
            city: '',
            country: '',
            name: '',
            nid: '',
            bio: '',
            firstName: '',
            lastName: '',
            profileType: 'CMR',
            typeSelect: false,
        };
    }

    selectProfileType = (e) => {
        this.setState(state => ({
        typeSelect: !state.typeSelect,
      }));
      e.preventDefault();
    }




    handleUserSignup = (e) => {
        this.props.onSignUp(
            this.state.username, 
            this.state.password, 
            this.state.email, 
            this.state.phone,
            this.state.address,
            this.state.city,
            this.state.country,
            this.state.name,
            this.state.nid,
            this.state.bio,
            this.state.firstName,
            this.state.lastName,
            this.state.profileType,

        );
        e.preventDefault();
    }
    
    render() {
        if(!this.state.typeSelect){
            return (
                <View style={styles.container}>
                    <Picker
                        selectedValue={this.state.profileType}
                        style={{ height: 50, width: 180 }}
                        itemStyle={{ backgroundColor: "grey", color: "blue", fontSize:18 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({profileType: itemValue})}>
                        <Picker.Item label="Consumer" value="CMR" />
                        <Picker.Item label="Marchent" value="MCT" />
                        <Picker.Item label="Organization" value="ORG" />
                    </Picker>

                    <Button 
                        onPress={this.selectProfileType} title="Select"
                        style={{width: '60%', textAlign: 'center', margin: 10, backgroundColor: 'red'}}
                    />
                    <View style={{margin: 7}}/>
                    <Text style={{fontSize: 16, textAlign: 'center'}}>
                            Aready, signed up?
                    </Text>
                    <View style={{margin: 7}}/>
                    <Button 
                        onPress={this.props.login} title="Login"
                        style={{width: '60%', textAlign: 'center', margin: 10, backgroundColor: 'red'}}
                        />
                    <View style={{margin: 7}}/>
                </View>
            );
        }
        else {

            if(this.state.profileType == 'CMR') {
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
                            placeholder='NID No' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.nid} 
                            onChangeText={(text) => this.setState({ nid: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='Email' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.email} 
                            onChangeText={(text) => this.setState({ email: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='Phone' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.phone} 
                            onChangeText={(text) => this.setState({ phone: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='First Name' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.firstName} 
                            onChangeText={(text) => this.setState({ firstName: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='Last Name' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.lastName} 
                            onChangeText={(text) => this.setState({ lastName: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='Address' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.address} 
                            onChangeText={(text) => this.setState({ address: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='City' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.city} 
                            onChangeText={(text) => this.setState({ city: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='Country' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.country} 
                            onChangeText={(text) => this.setState({ country: text })} />
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
                        <View style={{margin: 7}}/>

                    </ScrollView>
                );
            }
            else {
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
                            keyboardType='default' 
                            value={this.state.email} 
                            onChangeText={(text) => this.setState({ email: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='Phone' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.phone} 
                            onChangeText={(text) => this.setState({ phone: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='Name' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.name} 
                            onChangeText={(text) => this.setState({ name: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='Address' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.address} 
                            onChangeText={(text) => this.setState({ address: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='City' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.city} 
                            onChangeText={(text) => this.setState({ city: text })} />
                        <TextInput
                            style={{height: 40, backgroundColor: '#f4f4f4', borderRadius: 5, marginBottom: 7}}  
                            placeholder='Country' 
                            autoCapitalize='none' 
                            autoCorrect={false} 
                            keyboardType='default' 
                            value={this.state.country} 
                            onChangeText={(text) => this.setState({ country: text })} />
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

                        <View style={{margin: 7}}/>

                    </ScrollView>
                );

            }

        
        }

    }
}


export default SignupView;
