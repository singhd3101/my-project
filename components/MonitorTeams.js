import React from 'react';
import {ScrollView,View,TextInput,StyleSheet,ImageBackground,Image,FlatList} from 'react-native';
import { Container, Header, Content,Left, Card, CardItem, Body, Text, Icon } from 'native-base';
import FixedHeader from '../elements/FixedHeader';


class MonitorTeams extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            data: [{
              id:'1',
              teamName: 'A',
              verified: 'y',
            }, {
              id:'2',
              teamName: 'B',
              verified: 'y',
            }, {
              id:'3',
              teamName: 'C',
              verified: 'y',
            }, {
              id:'4',
              teamName: 'D',
              verified: 'y',
            }, {
              id:'5',
              teamName: 'E',
              verified: 'n',
            },
            {
              id:'6',
              teamName: 'Q',
              verified: 'n',
            },{
              id:'7',
              teamName: 'F',
              verified: 'n',
            },
            {
              id:'8',
              teamName: 'G',
              verified: 'n',
            },
            {
              id:'9',
              teamName: 'H',
              verified: 'n',
            }]
        }
    }

    renderTeams(item) {
        if(item.verified === 'y')
        return <Card transparent key={item.id}> 
            <CardItem header style={{height:170,width:170, backgroundColor:'#28b515'}} button 
            onPress={() => this.props.navigation.navigate('VerifySubmission')} key={item.id} bordered>
              <View key={item.id} style={{flexDirection:"col", alignSelf: "center"}}>
              <Text key={Math.random()} style={{color:'white',marginLeft:25, fontSize:24}}> Team {item.teamName}</Text>
              <Text key={Math.random()} style={{color:'white',marginLeft:5}}> Solved Clues: 3</Text>     
              </View>
            </CardItem>
        </Card>
      return <Card transparent key={item.id}> 
        <CardItem header style={{height:170, width:170,backgroundColor:'powderblue'}} button 
        onPress={() => alert("No submissions yet")} key={item.id} bordered>
        <Text  style={{marginLeft:35,color:'#562547'}} key={item.id}>Team {item.teamName}</Text>
      </CardItem>
</Card>
  }
    
    render() {
        return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
        <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
        <ScrollView style={{padding: 15, marginBottom:120, alignSelf: "center"}}>
        <View style={{flexDirection:"row", alignSelf: "center"}}>
            <Text style={{fontFamily:"Papyrus", fontSize:30, color:'white',textAlign:"left"}}>Teams</Text>
            <Icon name='information-circle' style={{color:'#fff', marginLeft:5, marginTop:5}} onPress={() => alert('Green highlighted team is awaiting verification.')}/>
        </View>
            <FlatList 
                data={this.state.data}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => this.renderTeams(item)}
                numColumns={2}
            />
        </ScrollView>       
        </ImageBackground>
      </View>
        )
    }
}
export default MonitorTeams