import React from 'react'
import FixedHeader from '../elements/FixedHeader';
import { View, Text, TextInput, ImageBackground} from 'react-native'
import { Card, Button } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
import FadeInView from '../elements/FadeInView';

class CreateQuest extends React.Component {
    
    constructor(props) {
        super(props)
        this.state ={
            name: '',
            numberOfPlayers: 2,
            timeLimit: 30,
            error: ''
        }
    }

    updateForm(newState) {
      console.log('newState ', newState);
      if(this.state.name == ''){
        this.setState({
          error: 'Please enter a quest name'
        });
      } else {
        this.setState({
          newState
        });
      }  
    }

    createQuest(){
        let name = this.state.name.trim()
        if(name == ''){
          this.setState({
            error: 'Please enter a quest name'
          });
        } else {
          this.setState({
            error: ''
          });
          fetch("https://mighty-dusk-79530.herokuapp.com/api/users")
            .then(res => res.json())
            .then(name => console.log('I am ', name[0].username, '!'));
          fetch('https://mighty-dusk-79530.herokuapp.com/api/questDetails', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    numberOfPlayers: this.state.numberOfPlayers,
                    timeLimit: this.state.timeLimit
                }),
              }).then((response) => response.json())
                  .then((responseJson) => {
                    console.log('Name: ', responseJson.name);
                    console.log('Number of players: ', responseJson.numberOfPlayers);
                    console.log('Time Limit: ', responseJson.timeLimit);
                  })
                  .catch((error) => {
                    console.error(error);
                  });
          this.props.navigation.navigate('CreateTeam');
        }
    }

    render() {
        var timeLimit = [{
            value: 30,
          }, {
            value: 60,
          }, {
            value: 90,
          }, {
            value: 120,
          }];
        let numberOfPlayers = [{
            value: 2,
          }, {
            value: 4,
          }, {
            value: 6,
          }, {
            value: 8,
          }];
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>

            <Card 
            title="Create Quest" titleStyle={{fontSize: 20,fontFamily:"Papyrus",color:'#562547',paddingBottom:20}} containerStyle={{marginTop:50,paddingTop:20}}>
               <Text style={{fontFamily:"Papyrus", fontSize:18, color:'#562547'}}>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 15, color: '#000', borderBottomWidth:1, 
                    borderBottomColor:'#555' }} value={this.state.name} placeholder={'eg. Quest 1'}
                    onChangeText={text => this.setState({name: text, error: ''})}/>
               <Text style={{color:'#ff0000'}}>{this.state.error}</Text>
               <Text style={{paddingTop:15,fontFamily:"Papyrus", fontSize:18, color:'#562547'}}>Number of Players in each team</Text>
               <Dropdown
                    selectedItemColor={'green'}
                    onChangeText={text => this.setState({numberOfPlayers : text})}
                    value={this.state.numberOfPlayers}
                    data={numberOfPlayers}
                />
                <Text style={{paddingTop:15,fontFamily:"Papyrus", fontSize:18, color:'#562547'}}>Time Limit for the quest (in mins)</Text>
                <Dropdown
                    selectedItemColor={'green'}
                    onChangeText={text => this.setState({timeLimit : text})}
                    value={this.state.timeLimit}
                    data={timeLimit}
                />
                <FadeInView style={{width: 305, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
                borderRadius: '10', alignItems:'center', marginTop:20}}>
                <Button 
                    title="Create Teams" 
                    type="clear"
                    onPress={() => this.createQuest()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
            </Card>
            </ImageBackground>
            </View>
        )
    }
}
export default CreateQuest
