import React from 'react'
import { ScrollView, View, Text,TextInput, Button} from 'react-native'
import { Card } from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader';
import style from '../assets/style';

class CreateTeam extends React.Component {
    static navigationOptions = {screen: 'Team'}
    constructor(props) {
        super(props)
        this.state ={
            teamName: '',
            teamNames: ['test'],
            error: ''
        }
    }

    addTeam(teamName) {
        if (teamName == ''){
            this.setState({
                error: 'Please enter the text to proceed'
            });
        } else {
            var list = this.state.teamNames.concat(teamName);
            this.setState({
                teamNames: list,
                teamName: '',
                error: ''
            });
        }
    }

    updateForm(teamName) {
        if (teamName == ''){
            this.setState({
                error: 'Please enter the text to proceed'
            });
        } else {
            this.setState({
                teamName: teamName,
                error: ''
            });
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
        <View style={style.container}>
            <Text style={style.teamCount}>{index + 1}.</Text>
            <Text style={style.text}>{item}</Text>
            <Button key={index + 50} title="Delete" onPress={() => this.deleteTeam(item)}
                    color='red' buttonStyle={style.button}/>
        </View>);
    }

    render() {
        var header = ['Team Name', 'Action']
        var data = [['Team Name'], ['Action']]
        return(
            <ScrollView>
                <View>
            <FixedHeader />
            </View>
            <Card>
               <Text>Team Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }}
                          value={this.state.teamName} onChangeText={text => this.updateForm(text)}/>
                <Text style={{color:'#ff0000'}}>{this.state.error}</Text>
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
