import React from 'react'
import {ScrollView,View,Text,TextInput,StyleSheet,ImageBackground,Image} from 'react-native'
import FadeInView from '../elements/FadeInView';
import {Button,Card} from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader'


class PlayerView extends React.Component { 
    constructor(props) {
        super(props)
        this.state ={
            name: '',
            error: ''
        }
    }

    updateForm(newState) {
        this.setState(newState);  
    }

    submitCode(){
        let name = this.state.name.trim();
        if(name == ''){
            this.setState({
                error: 'Please enter a valid quest code.'
              });
        } else {
            this.props.navigation.navigate('ViewClue');
        }
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{marginTop:200}}>
            <Text style={{fontFamily:"Papyrus", fontSize:30, color:'white', textAlign:'center'}}>Welcome Player!</Text>
            <Card containerStyle={{width:300, alignSelf:"center"}}>
                <Text style={{fontFamily:"Papyrus", fontSize:30, color:'#562547', textAlign:'center'}}>
                    Enter Code</Text>
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

        )
    }
}
export default PlayerView