import React from 'react'
import { ScrollView, View, Text,TextInput, Button, StyleSheet, ImageBackground} from 'react-native'
import { Card } from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader'
import styles from '../assets/style';

class CreateTeam extends React.Component {
    static navigationOptions = {screen: 'Team'}
    constructor(props) {
        super(props)
        this.state ={
            teamName: '',
            teamNames: ['test','test','test','test','test','test','test','test','test','test','test','test','test','test','test','test']
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
        <View style={styles.container} key={index}>
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
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
            <FixedHeader height={90} />
            <ScrollView style={{padding: 15}}>
            <Card>
               <Text>Team Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }}
                          value={this.state.teamName} onChangeText={text => this.updateForm(text)}/>
               <Button title="Create Team" onPress={() => this.addTeam(this.state.teamName)} />
               <Button title="Create Clues" onPress={() => this.props.navigation.navigate('ListClues')} />
               <View>
                    {this.renderTeams()}
               </View>
            </Card>
            </ScrollView>
            </ImageBackground>
            </View>

        )
    }
}
export default CreateTeam