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
            .then(name => console.log('res ', name[0].username));
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
            title="Create Quest" style={{fontSize: 40, fontColor: 'blue', width:'40'}}>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, 
                    borderBottomColor:'#555' }} value={this.state.name} 
                    onChangeText={text => this.setState({name: text, error: ''})}/>
               <Text style={{color:'#ff0000'}}>{this.state.error}</Text>
               <Text style={{paddingTop:15}}>Number of Players in each team</Text>
               <Dropdown
                    selectedItemColor={'green'}
                    onChangeText={text => this.setState({numberOfPlayers : text})}
                    value={this.state.numberOfPlayers}
                    data={numberOfPlayers}
                />
                <Text style={{paddingTop:15}}>Time Limit for the quest (in mins)</Text>
                <Dropdown
                    selectedItemColor={'green'}
                    onChangeText={text => this.setState({timeLimit : text})}
                    value={this.state.timeLimit}
                    data={timeLimit}
                />
                <FadeInView style={{width: 305, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
                borderRadius: '10', alignItems:'center'}}>
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
