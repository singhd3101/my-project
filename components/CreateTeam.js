import React from 'react'
import { ScrollView, View, Text,TextInput, Button,ImageBackground,FlatList} from 'react-native'
import { Card,ListItem } from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader';
import style from '../assets/style';

class CreateTeam extends React.Component {
    static navigationOptions = {screen: 'Team'}
    constructor(props) {
        super(props)
        this.state ={
            teamName: '',
            teamNames: ['tedst','twest','t2gest','t1est','tes2t','tes4t', 't5est','74test','t6est','t4est','tevst','teest','atest','terst','tesyt','tedest','tcxest','treest'],
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

    render() {
        var header = ['Team Name', 'Action']
        var data = [['Team Name'], ['Action']]
        return( 
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
            <Card title="Create Teams" titleStyle={{fontSize: 20, color: '#562547',fontFamily: "Papyrus"}}>
            <Text>Team Name</Text>
            <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }}
                          value={this.state.teamName} onChangeText={text => this.updateForm(text)}/>
            <Text style={{color:'#ff0000'}}>{this.state.error}</Text>
            <Button title="Create Team" onPress={() => this.addTeam(this.state.teamName)} />
            <FlatList
             data={this.state.teamNames}
             refreshing={true}
             keyExtractor={(item, index) => index.toString()}
             renderItem={({item, index}) => 
            (<ListItem
                key={Math.random()}
                title={(parseInt(index, 10)+1)+" "+ item}
                rightIcon={<Button key={Math.random()} title="Delete" onPress={() => this.deleteTeam(item)}
                color='red' buttonStyle={style.button}/>}
            />)}/>
            </Card>     
            </ImageBackground>
            </View>
        )
    }
}
export default CreateTeam
