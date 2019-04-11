import React from 'react'
import { KeyboardAvoidingView, View, Text, TextInput, ImageBackground} from 'react-native'
import FadeInView from '../elements/FadeInView';
import {Button,Card} from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class StartQuest extends React.Component { 
    constructor(props) {
        super(props)
        this.state ={
            name: '',
            error: '',
            questCode: -1
        }
    }

    updateForm(newState) {
        this.setState(newState);  
    }

    submitCode(){
        let name = this.state.name.trim();
        if(name == ''){
            this.setState({
                error: 'Please enter a valid team name.'
              });
        } else {
            fetch('https://treasurehunt-bitsplease.herokuapp.com/api/quests/code/'+name)
                .then((response) => response.json())
                .then((res) => {
                    fetch('https://treasurehunt-bitsplease.herokuapp.com/api/quests/' + res.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            started: true
                        }),
                    })
                })
                .then((res) => {
                    this.props.navigation.navigate('MonitorTeams', { questCode: this.state.name});
            })
            .catch((error) => alert("Please enter valid quest code."))
        }
    }

    render() {
        return(
            <KeyboardAwareScrollView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} enabled>
            <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{marginTop:150}}>
            <Text style={{fontFamily:"Papyrus", fontSize:30, color:'white', textAlign:'center'}}>
            Start Quest!</Text>
            <Text style={{fontFamily:"Papyrus", fontSize:15, color:'white', textAlign:'center'}}>
            Enter the quest code</Text>
            <Card containerStyle={{width:300, alignSelf:"center"}}>
                <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1,
                borderBottomColor:'#555' }} value={this.state.name}
                onChangeText={text => this.updateForm({name: text, error: ''})}/>
                <Text style={{color:'#ff0000'}}>{this.state.error}</Text>
                <FadeInView style={{width: 250, height: 50,marginTop:20, backgroundColor: 'powderblue',
                borderRadius: '10', marginLeft:5}}>
                    <Button
                    title="Submit"
                    type="clear"
                    onPress={() => this.submitCode()}
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
export default StartQuest