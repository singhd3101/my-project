import React from 'react';
import { ScrollView, View, Text,TextInput, StyleSheet, ImageBackground} from 'react-native';
import { Card, Button } from 'react-native-elements';
import FixedHeader from '../elements/FixedHeader';
import styles from '../assets/style';
import FadeInView from '../elements/FadeInView';
import Icon from 'react-native-vector-icons/AntDesign';

class CreateTeam extends React.Component {
    static navigationOptions = {screen: 'Team'}
    constructor(props) {
        super(props)
        this.state ={
            teamName: '',
            teamNames: ['test','test','test','test','test','test','test','test','test','test','test','test','test','test','test','test'],
            teamNameError: ''
        }
    }

    addTeam(teamName) {
        let tn = teamName.trim();
        if(tn == ''){
            this.setState({
                teamNameError: 'Please enter the text to proceed'
            });
        } else if(this.state.teamNames.includes(teamName)) {
            let error = teamName.concat(' already present.');
            this.setState({
                teamNameError: error
            });
        } else {
            var list = this.state.teamNames.concat(teamName);
            this.setState({
                teamNames: list,
                teamName: '',
                teamNameError: ''
            });
        }
    }

    updateForm(teamName) {
        let tn = teamName.trim();
        if (tn == ''){
            this.setState({
                teamNameError: 'Please enter the text to proceed'
            });
        } else {
            this.setState({
                teamName: teamName,
                teamNameError: ''
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

    createClues(){
        if(this.state.teamNames.length < 2){
            alert("Create atleast 2 teams.");
        } else {
            this.props.navigation.navigate('ListClues');
        }
    }

    renderTeams() {
        return this.state.teamNames.map((item, index) =>
        <View style={styles.container} key={index}>
            <Text style={styles.teamCount}>{index + 1}.</Text>
            <Text style={styles.text}>{item}</Text>
            <Icon name="delete" size={25} color="red" onPress={() => this.deleteTeam(item)} />
        </View>);
    }

    render() {
        var header = ['Team Name', 'Action']
        var data = [['Team Name'], ['Action']]
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
            <ScrollView>
            <Card>
               <Text style={{fontWeight:'bold', fontFamily:"Papyrus", fontSize:20,color:'#562547'}}>Team Name</Text>
               <TextInput style= {{height:26,fontSize: 15, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }}
                          value={this.state.teamName} placeholder={'eg.Team A'} onChangeText={text => this.updateForm(text)}/>
                <Text style={{color:'#ff0000'}}>{this.state.teamNameError}</Text>
                <View style={{justifyContent: 'space-between', flex: '1', flexDirection: 'row'}}>
                <FadeInView style={{width: 140, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Create Team" 
                    type="clear"
                    onPress={() => this.addTeam(this.state.teamName)}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                <FadeInView style={{width: 140, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Next" 
                    type="clear"
                    onPress={() => this.createClues()}
                    titleStyle={{fontWeight:"700", fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </View>
                <View style={{marginTop:10}}></View>
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