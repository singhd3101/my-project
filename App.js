import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

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
      <View style={styles.container}>
        <Text>Hello Moto! {this.state.name}</Text>
        <Button id="btn" title="Check" onPress={() => this.findUserName()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
