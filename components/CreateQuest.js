import React from 'react'
import FixedHeader from '../elements/FixedHeader.js';
import {ScrollView,View,Text,TextInput,StyleSheet,ImageBackground} from 'react-native'
import { FormLabel, FormInput, FormValidationMessage,Card } from 'react-native-elements'
import CreateTeam from './CreateTeam';

class CreateQuest extends React.Component {
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
            <ScrollView>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
            <Card 
            title="Create Quest" style={{fontSize: 40, fontColor: 'blue', width:'40'}}>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
               <Text>Quest Name</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, borderBottomColor:'#555' }} value={this.state.name} onChangeText={text => this.updateForm({name: text})}/>
            </Card>
            </ImageBackground>
            </ScrollView>
        )
    }
}
export default CreateQuest
