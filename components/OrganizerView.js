import React from 'react'
import {ScrollView,View,Text,TextInput,StyleSheet,ImageBackground,Image} from 'react-native'
import FadeInView from '../elements/FadeInView';
import {Button} from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader'


class OrganizerView extends React.Component {
    
    constructor(props) {
        super(props)
        this.state ={
            name: ''
        }
    }

    render() {
        return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FixedHeader marginTop={60}/>
        <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
        <View>
        <Text style={{fontFamily:"Papyrus",color: '#fff',fontSize:30, marginBottom:40, marginTop: 200, textAlign:"center"}}>Welcome Organizer!</Text>
        <FadeInView style={{width: 250, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', borderRadius: '10', alignSelf: "center"}}>
        <Button 
         title="Create Quest" 
         type="clear"
         onPress={() => this.props.navigation.navigate('CreateQuest')}
         titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
        </FadeInView>
        <FadeInView style={{width: 250, height: 50,paddingTop:'1%', marginTop: '2%', backgroundColor: 'powderblue', borderRadius: '10', alignSelf: "center"}}>
        <Button 
        title="Start Quest" 
        onPress={() => this.props.navigation.navigate('QuestHistory')}
        type="clear"
         titleStyle={{fontFamily: "Papyrus", color: '#562547'}} />   
        </FadeInView>
        </View>       
        </ImageBackground>
      </View>
        )
    }
}
export default OrganizerView
