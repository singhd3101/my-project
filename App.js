import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FixedHeader from './elements/FixedHeader';
import CreateQuest from './components/CreateQuest';
import CreateTeam from './components/CreateTeam';
import { createStackNavigator,createAppContainer } from 'react-navigation'

class Home extends React.Component {
  static navigationOptions = {
    screen: 'Home'
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
      <View>
        <FixedHeader/>
        <Button title="Create Quest" onPress={() => this.props.navigation.navigate('CreateQuest')} />    

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
  





