import React from 'react'
import {ScrollView,View,Text,TextInput, Button} from 'react-native'
import { FormLabel, FormInput, FormValidationMessage,Card } from 'react-native-elements'
import CreateTeam from './CreateTeam';

class CreateQuest extends React.Component {
    static navigationOptions = {screen: 'Quest'}
    constructor(props) {
        super(props)
        this.state ={
            name: ''
        }
    }


    updateForm(newState) {
        this.setState(newState);
    }

    render() {
        return(
            <ScrollView style={{padding: 15}}>
            <Card>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Button title="Create Team" onPress={() => this.props.navigation.navigate('CreateTeam')} />
            </Card>
            </ScrollView>
        )
    }
}
export default CreateQuest
