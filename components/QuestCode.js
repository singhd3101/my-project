import React from 'react'
import { View, Text, TextInput, ImageBackground } from 'react-native'
import FadeInView from '../elements/FadeInView';
import { Button, Card } from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader'

class QuestCode extends React.Component { 
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{marginTop:100}}>
            <Card containerStyle={{width:300, alignSelf: "center"}}>
                <Text style={{fontFamily:"Papyrus", fontSize:30, color:'#562547', textAlign:'center'}}>
                Congratulations !!</Text>
                <Text style={{fontFamily:"Papyrus", fontSize:20, color:'#562547', textAlign:'center'}}>
                Your quest has been created with the following code</Text>
                <Text style={{fontFamily:"Papyrus", fontSize:40, color:'#562547', textAlign:'center', 
                textDecorationLine:'underline'}}>A3E24M</Text>
                <View style={{marginTop:10}}></View>
                <FadeInView style={{width: 250, height: 50,marginTop:'2%', backgroundColor: 'powderblue', 
                borderRadius: '10', marginLeft:5}}>
                    <Button 
                    title="Main Menu" 
                    type="clear"
                    onPress={() => this.props.navigation.navigate('OrganizerView')}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
            </Card> 
            </View>       
            </ImageBackground>
            </View>

        )
    }
}
export default QuestCode