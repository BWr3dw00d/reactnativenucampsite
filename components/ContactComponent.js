import React, { Component } from 'react';
import { Text, ScrollView, } from 'react-native';
import { Card } from 'react-native-elements';



class Contact extends Component {
  
    static navigationOptions = {
        title: 'Contact'
    }

    render(){
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                <Card 
                wrapperStyle={{margin: 20}}
                title="Contact Information">
                    <Text style={{marginBottom:10}}>1 Nucamp Way{"\n"}Seattle, WA 98001{"\n"}U.S.A. </Text>
                    <Text>Phone: 1-206-555-1234</Text>
                    <Text>Email: campsites@nucamp.co</Text>
                </Card>
               </Animatable.View>
            </ScrollView>
        );
    }
    
}

export default Contact;