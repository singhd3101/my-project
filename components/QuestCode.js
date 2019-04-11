import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import FadeInView from '../elements/FadeInView';
import { Button, Card } from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class QuestCode extends React.Component { 
    constructor(props) {
        super(props)
        this.state ={
            questId: '',
            questCode: '',
        }
    }

    componentDidMount(){
        this.props.navigation.addListener("didFocus", () => {
            const questId = this.props.navigation.getParam("questId", 1);
        this.setState({
            questId: questId
        })
        fetch('https://treasurehunt-bitsplease.herokuapp.com/api/quests/' + questId)
        .then((response) => response.json())
                  .then((response) => {
                    this.setState({questCode: response.code})
                  })
        });
        const questId = this.props.navigation.getParam("questId", 1);
        this.setState({
            questId: questId
        })
        fetch('https://treasurehunt-bitsplease.herokuapp.com/api/quests/' + questId)
        .then((response) => response.json())
                  .then((response) => {
                    this.setState({questCode: response.code})
                  })
    }

    render() {
        return(
            <KeyboardAwareScrollView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{marginTop:100}}>
            <Card containerStyle={{width:300, alignSelf: "center"}}>
                <Text style={{fontFamily:"Papyrus", fontSize:30, color:'#562547', textAlign:'center'}}>
                Congratulations !!</Text>
                <Text style={{fontFamily:"Papyrus", fontSize:20, color:'#562547', textAlign:'center'}}>
                Your quest has been created with the following code</Text>
                <Text style={{fontFamily:"Papyrus", fontSize:40, color:'#562547', textAlign:'center', 
                textDecorationLine:'underline'}}>{this.state.questCode}</Text>
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
            </KeyboardAwareScrollView>
        )
    }
}
export default QuestCode