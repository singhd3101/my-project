import React from 'react'
import { ScrollView, View, Text,TextInput, Button, StyleSheet} from 'react-native'
import { Card } from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    teamCount: {
        width: '10%',
        fontSize: 20,
        height: 40,
        textAlign: 'center',
        paddingTop: 5
    },
    text: {
        width: '40%',
        fontSize: 20,
        height: 40,
        textAlign: 'left',
        paddingTop: 5
    },
    button: {
      width: '40%',
      height: 40
    }
  });

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
        <View style={styles.container}>
            <Text style={styles.teamCount}>{index + 1}.</Text>
            <Text style={styles.text}>{item}</Text>
            <Button key={index + 50} title="Delete" onPress={() => this.deleteTeam(item)}
                    color='red' buttonStyle={styles.button}/>
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
