import React from 'react';
import {Button} from 'react-native-elements'
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import FixedHeader from './elements/FixedHeader';
import FadeInView from './elements/FadeInView';
import CreateQuest from './components/CreateQuest';
import CreateTeam from './components/CreateTeam';
import { createStackNavigator,createAppContainer } from 'react-navigation'

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
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView style={{width: 250, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', borderRadius: '10'}}>
        <Button 
         title="Create Quest" 
         type="clear"
         onPress={() => this.props.navigation.navigate('CreateQuest')}
         titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
        </FadeInView>
        <FadeInView style={{width: 250, height: 50,paddingTop:'1%', marginTop: '2%', backgroundColor: 'powderblue', borderRadius: '10'}}>
        <Button 
        title="Create Team" 
        onPress={() => this.props.navigation.navigate('CreateTeam')}
        type="clear"
         titleStyle={{fontFamily: "Papyrus", color: '#562547'}} />   
        </FadeInView>
        <FadeInView style={{width: 250, height: 50,paddingTop:'1%',marginTop: '2%', backgroundColor: 'powderblue', borderRadius: '10'}}>
        <Button 
        title="Create Quest" 
        onPress={() => this.props.navigation.navigate('CreateQuest')} 
        type="clear"
        titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
        </FadeInView>
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
  }
});

const App = createAppContainer(AppNavigator);
export default App;
  





