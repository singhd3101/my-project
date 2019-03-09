import React from 'react'
import FixedHeader from '../elements/FixedHeader';
import { View, Text, TextInput, ImageBackground} from 'react-native'
import { Card, Button } from 'react-native-elements'
import FadeInView from '../elements/FadeInView';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../assets/style';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ViewClue extends React.Component {
    
    constructor(props) {
        super(props)
        this.state ={
            teamName:['Morbid Hunters', 'Bits Please', 'Hakuna Matata', 'Avengers', 'Justice League', 'Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin']
        }
    }

    updateForm(newState) {
        this.setState(newState);
    }

    sendReview(){
        this.props.navigation.navigate('MonitorTeams');
    }

    skip(){
        alert('Warning: No points for this clue will be given to the team');
        this.props.navigation.navigate('ViewClue');
    }

    render() {
	    let items = this.state.teamName;
        let team = 'Team '.concat(items[Math.floor(Math.random()*items.length)]);
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>            
            <Card containerStyle={{height:500}}>
            <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <Text style={{justifyContent:'flex-start', fontWeight:'bold'}}>{team}</Text>
                    </View>
                    <View style={{flex:1}}>
                    <Text style={{justifyContent:'flex-end', fontWeight:'bold', textAlign:'right'}}>Team Score: 200</Text>
                    </View>
                </View>
                <View style={{marginTop:20}}></View>
                <Card containerStyle={{width:320, marginTop:-5, marginLeft:-5, marginRight:-5}}>
                    <Text>Clue: somthing somthing somthing somthing somthing somthing somthing somthing somthing somthing somthing somthing </Text>
                </Card>
                <View style={{marginTop:20}}></View>
                <View style={{justifyContent: 'space-between', flex: '1', flexDirection: 'row'}}>
                <FadeInView style={{width: 150, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Upload" 
                    type="clear"
                    onPress={() => this.sendReview()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                <FadeInView style={{width: 150, height: 50,paddingTop:'1%', backgroundColor: '#1dd43c', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Send" 
                    type="clear"
                    onPress={() => this.sendReview()}
                    titleStyle={{fontWeight:"700", fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </View>
                <View style={{marginTop:60}}></View>
                <View style={{justifyContent: 'space-between', flex: '1', flexDirection: 'row'}}>
                <FadeInView style={{width: 150, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Requst Hint" 
                    type="clear"
                    onPress={() => this.sendReview()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                <FadeInView style={{width: 150, height: 50,paddingTop:'6%', alignItems:'center', borderRadius: '10'}}>
                <Text style={{fontFamily: "Papyrus", color: '#562547'}}>-20 points</Text> 
                </FadeInView>
                </View>
                <View style={{marginTop:60}}></View>
                <FadeInView style={{width: 315, height: 50,paddingTop:'1%', backgroundColor: 'orange', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Skip this Clue" 
                    type="clear"
                    onPress={() => this.skip()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                <View style={{marginTop:100}}></View>
                <Icon name="chat" size={45} color="#ffcf40" onPress={() => this._panel.show()} />
            </Card>
            <SlidingUpPanel ref={c => this._panel = c}>
                <View style={styles.chatContainer}>
                   <Text>Here is the team chat panel.</Text>
                    <Button title='Hide' onPress={() => this._panel.hide()} />
                </View>
            </SlidingUpPanel>
            </ImageBackground>
            </View>
        )
    }
}
export default ViewClue