import React from 'react'
import FixedHeader from '../elements/FixedHeader';
import { ScrollView, View, Text, TextInput, ImageBackground, TouchableOpacity,Alert} from 'react-native'
import { Card, Button } from 'react-native-elements'
import FadeInView from '../elements/FadeInView';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../assets/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UploadImage from './UploadImage';
import Chat from './ChatComponents';

class ViewClue extends React.Component {
    
    constructor(props) {
        super(props)
        this.state ={
            teamName:'',
            chatMessages: [{playerName: "Sam", message:"Hi all, I am at library and I don't think the answer is here"},
                            {playerName: "Adam", message:"lets meet in ccis"},
                        ],
            clue: 'Clue: somthing somthing somthing somthing somthing somthing somthing somthing somthing somthing somthing somthing ',
            hintRequested: false,
            score: 200,
        }
    }

    componentDidMount() {
        const {navigation} = this.props;
        const teamName = navigation.getParam("teamName");
        if(teamName) {
            this.setState({
                teamName
            });
        }
    }

    updateForm(newState) {
        this.setState(newState);
    }

    sendReview(){
        this.props.navigation.navigate('MonitorTeams');
    }

    skip(){
        Alert.alert(
            'Confirmation',
            'Are you sure you want to skip the clue?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'Yes', onPress: () =>  
              {this.props.navigation.navigate('ViewClue', {index: 1}),
              this.setState({
                  hintRequested: false,
                  clue: 'New clue for the team, New clue for the team, New clue for the team, New clue for the team, New clue for the team, New clue for the team, New clue for the team'
              })}
        },
            ],
            {cancelable: false},
          )
    }

    addMessage(msg) {
        console.log('msg: ', msg);
        this.chatMessages.push(msg);
    }

    renderSkipButton(){
        if(this.state.hintRequested){
            return(
            <TouchableOpacity onPress={() => this.skip()} style={{marginTop:'10%'}}>
                <FadeInView style={{width: '100%', height: 50,paddingTop:'1%', backgroundColor: 'orange',
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Skip this Clue" 
                    type="clear"
                    onPress={() => this.skip()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </TouchableOpacity>)
        }
        else {
            return(
            <TouchableOpacity onPress={() => this.skip()}>
                <FadeInView style={{width: '100%', height: 50,paddingTop:'1%', backgroundColor: 'orange',
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Skip this Clue" 
                    type="clear"
                    onPress={() => this.skip()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </TouchableOpacity>)
        }
    }

    render() {
        let skipButton;

    if(this.state.hintRequested){
        skipButton = (
            <TouchableOpacity onPress={() => this.skip()} style={{marginTop:'10%'}}>
                <FadeInView style={{width: '100%', height: 50,paddingTop:'1%', backgroundColor: 'orange',
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Skip this Clue" 
                    type="clear"
                    onPress={() => this.skip()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </TouchableOpacity>)
    } else {
        skipButton = (<TouchableOpacity onPress={() => this.skip()}>
        <FadeInView style={{width: '100%', height: 50,paddingTop:'1%', backgroundColor: 'orange',
        alignItems:'center', borderRadius: '10'}}>
        <Button 
            title="Skip this Clue" 
            type="clear"
            onPress={() => this.skip()}
            titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
        </FadeInView>
        </TouchableOpacity>);
    }
	    let items = this.state.teamName;
        //let team = 'Team: '.concat(items[Math.floor(Math.random()*items.length)]);
        let team = 'Team: '+ this.state.teamName;
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>            
            <Card containerStyle={{height:500}}>
            <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <Text style={{justifyContent:'flex-start', fontSize: 20,fontFamily:"Papyrus",color:'#562547'}}>
                    {team}</Text>
                    </View>
                    <View style={{flex:1}}>
                    <Text style={{justifyContent:'flex-end', textAlign:'right', fontSize: 20,fontFamily:"Papyrus",
                    color:'#562547'}}>Team Score: {this.state.score}</Text>
                    </View>
                </View>
                <View style={{marginTop:20}}></View>
                <Card containerStyle={{width:'100%', marginTop:-5, marginLeft:-5, marginRight:-5}}>
                    <Text>{this.state.clue}</Text>
                </Card>
                <View style={{marginTop:20}}></View>
                <View style={{justifyContent: 'space-between', flex: '1', flexDirection: 'row'}}>
                <UploadImage
                        payloadKey='file'
                        endpoint='https://mighty-dusk-79530.herokuapp.com/api/upload' />
                <FadeInView style={{width: 180, height: 50,paddingTop:'1%', backgroundColor: '#1dd43c', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Request Verification" 
                    type="clear"
                    onPress={() => alert('Image verification requested from organizer.')}
                    titleStyle={{fontWeight:"700", fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </View>
                <View style={{marginTop:60}}></View>
                {this.state.hintRequested ? 
                    <Text style={{fontFamily: "Papyrus", color: '#562547', paddingTop:5, marginBottom:-27}}>
                    Hint: bla bla bla !</Text> :
                <View>
                <FadeInView style={{width: '100%', height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
                alignItems:'center', borderRadius: '10'}}>
                <Button title="Request Hint" type="clear"
                    onPress={() =>
                        Alert.alert(
                            'Confirmation',
                            'Are you sure you want to request the hint? Note: 20 points would be deducted',
                            [
                              {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                              },
                              {text: 'Yes', onPress: () =>  this.setState({
                                hintRequested : true,
                                score: this.state.score - 20
                            })},
                            ],
                            {cancelable: false},
                          )
                       }
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </View>}
                <View style={{marginTop:10}}></View>
                {skipButton}
                <View style={{marginTop:80}}></View>
                <Icon name="chat" size={45} color="#ffcf40" onPress={() => this._panel.show()} />
            </Card>
            <SlidingUpPanel ref={c => this._panel = c}>
                {() => (
                    <View style={styles.chatContainer}>
                    <ScrollView>
                        <View style={styles.chatPanel}>
                            <Text style={styles.chatPanelText}>Team Discussion Board.</Text>
                            <Icon name="clear" size={45} color="red" onPress={() => this._panel.hide()} />
                        </View>
                        <Chat chatMessages = {this.state.chatMessages} addMessage={this.addMessage}></Chat>
                    </ScrollView>
                    </View>
                )}
            </SlidingUpPanel>
            </ImageBackground>
            </View>
        )
    }
}
export default ViewClue
