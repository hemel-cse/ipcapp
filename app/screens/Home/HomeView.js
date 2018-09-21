import React, { Component } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
 class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {

        if(this.props.userProfileType == "MCT" || this.props.userProfileType == "ORG"){

            return (
                <View style={styles.container}>
        
                    <Text style={styles.headerText, {fontSize: 18, paddingTop: 10, textAlign: 'center', color: "grey"}}>
                        Marchents Benifits
                    </Text>
                    <ScrollView style={{padding: 20}}>
                        <KeyboardAvoidingView behavior='position'>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Will push consumer.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Category wise consumer information.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    -  Free online advertizements.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Free campains on promotional activities.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Free system updating/integration for IPC.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Communication to other outlets and consumers.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - It will be a vast marketplace.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Share information and offer to category customer.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Clients/Consumer feedback.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Free IPC card and Data consultancy.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Benifits of IPC community fee.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Communication through SMS.
                                </Text>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            );
        }

        else {
            return (
                <View style={styles.container}>
        
                    <Text style={styles.headerText, {fontSize: 18, paddingTop: 10, textAlign: 'center', color: "grey"}}>
                        Consumer Benifits
                    </Text>
                    <ScrollView style={{padding: 20}}>
                        <KeyboardAvoidingView behavior='position'>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Updated Market information across the industry.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Merchant/Brand wise consumer offers.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Details transaction summary.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - No money receipt needed.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Discount/previliages in any IPC outlet.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Neerby IPC outlets discounts feed in app.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Neerby consumer offers notification within your area.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - No fees or extra charge for consumers.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Automated consumers varification.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Full marketplace experience in the app.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Internal communication among the Consumers and Outlets/Marchents.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Social communication features available.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Social awareness information provided from the app.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Annually reward on transaction.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Reward points based on purchase and recognization.
                                </Text>
                                <Text style={{marginBottom: 2, fontSize: 16}}>
                                    - Free credit cards/Debit cards. (upcoming)
                                </Text>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            );
        }
    }
}
 export default HomeView;