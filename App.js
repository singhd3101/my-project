import React from 'react';
import {Button} from 'react-native-elements'
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import FixedHeader from './elements/FixedHeader';
import FadeInView from './elements/FadeInView';
import CreateQuest from './components/CreateQuest';
import PlayerView from './components/PlayerView';
import CreateTeam from './components/CreateTeam';
import OrganizerView from './components/OrganizerView';
import VerifySubmission from './components/VerifySubmission';
import ListClues from './components/ListClues';
import QuestCode from './components/QuestCode';
import CreateClues from './components/CreateClues';
import ViewClue from './components/ViewClue';
import { createStackNavigator,createAppContainer } from 'react-navigation'
import MonitorTeams from './components/MonitorTeams';

class Home extends React.Component {
  static navigationOptions = {
    header: (
    <FixedHeader/>
    )
    }
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }
  findUserName = () => {
    fetch("https://mighty-dusk-79530.herokuapp.com/api/users")
    .then(res => res.json())
    .then(name => this.setState({
      name: name[0].username
    }))

  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground source={require('./assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
        <View>
        <Text style={{fontFamily: "Papyrus", color:'white', fontSize:30, fontWeight:'bold', marginTop:200, textAlign:"center"}}> EAT. SLEEP. HUNT. </Text>
        <Text style={{fontFamily: "Papyrus", color:'white', fontSize:30, fontWeight:'bold',textAlign:"center"}}> REPEAT. </Text>
        <Text style={{fontFamily: "Papyrus", color:'white', fontSize:40,textAlign:"center"}}> Join as a </Text>
        <FadeInView style={{width: 250, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
        borderRadius: '10',marginLeft:60}}>
        <Button 
         title="Organizer" 
         type="clear"
         onPress={() => this.props.navigation.navigate('OrganizerView')}
         titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
        </FadeInView>
        <View style={{marginTop:'2%'}}>
        <FadeInView style={{width: 250, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
        borderRadius: '10',marginLeft:60}}>
        <Button 
        title="Player" 
        onPress={() => this.props.navigation.navigate('PlayerView')}
        type="clear"
         titleStyle={{fontFamily: "Papyrus", color: '#562547'}} />   
        </FadeInView>
        </View>
        </View>
        
        </ImageBackground>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
  screen: Home
  },
  CreateQuest: {
  screen: CreateQuest
  },
  CreateTeam: {
  screen: CreateTeam
  },
  OrganizerView: {
    screen: OrganizerView
  },
  VerifySubmission: {
    screen: VerifySubmission
  },
  CreateClues: {
    screen: CreateClues
  },
  ListClues: {
    screen: ListClues
  },
  PlayerView: {
    screen: PlayerView
  },
  MonitorTeams: {
    screen: MonitorTeams
  },
  QuestCode: {
    screen: QuestCode
  },
  ViewClue: {
    screen: ViewClue
  }
  
});

const App = createAppContainer(AppNavigator);
export default App;
  





