import React from 'react'
import {ScrollView,View,Text,TextInput, Button} from 'react-native'
import { FormLabel, FormInput, FormValidationMessage,Card } from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader'

class CreateTeam extends React.Component {
    static navigationOptions = {screen: 'Team'}
    constructor(props) {
        super(props)
        this.state ={
            teamName: '',
            teamNames: ['test']
        }
    }

    addTeam(teamName) {
        var list = this.state.teamNames.concat(teamName);
        this.setState({
            teamNames: list,
            teamName: ''
        });
    }

    updateForm(teamName) {
        if (teamName == ''){
            alert("Please enter the text to proceed");
        } else {
            this.setState({teamName});
        }
    }

    deleteTeam(teamName) {
        var tn = this.state.teamNames;
        var teamNames = tn.filter(item => {return item != teamName})
        this.setState({
            teamNames
        });
    }

    renderTeams() {
        return this.state.teamNames.map((item, index) =>
        <View style={{flexDirection: 'row', flex: 1}}>
            <Text key={index}>{index + 1} {item}</Text>
            <Button key={index + 50} title="Delete" onPress={() => this.deleteTeam(item)}
                    color='red' buttonStyle={{marginRight: 5 }}/>
        </View>);
    }

    render() {
        return(
            <ScrollView style={{padding: 15}}>
            <FixedHeader />
            <Card>
               <Text>Team Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }}
                          value={this.state.teamName} onChangeText={text => this.updateForm(text)}/>
               <Button title="Create Team" onPress={() => this.addTeam(this.state.teamName)} />
               <View>
                    {this.renderTeams()}
               </View>

            </Card>
            </ScrollView>
        )
    }
}
export default CreateTeam
