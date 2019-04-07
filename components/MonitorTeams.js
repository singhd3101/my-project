import React from 'react';
import {ScrollView,View,TextInput,StyleSheet,ImageBackground,Image,FlatList} from 'react-native';
import { Container, Header, Content,Left, Card, CardItem, Body, Text, Icon } from 'native-base';
import FixedHeader from '../elements/FixedHeader';

class MonitorTeams extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
          questCode: '',
          submissions:[],
          data:[]
        }
    }

    componentDidMount() {
      const {navigation} = this.props;
      const questCode = navigation.getParam("questCode");
      if(questCode) {
        fetch('https://treasurehunt-bitsplease.herokuapp.com/api/quests/code/' + questCode)
        .then((response) => response.json())
        .then((res) => {
          let teams = []
          res.teams.map((team) => {
            teams.push({
              teamName: team.name,
              status: 'n',
              submissionId: -1
            })
          })
          console.log("all teams", teams);
          fetch('https://treasurehunt-bitsplease.herokuapp.com/api/submission/monitor/questId/' + res.id)
          .then((response) => response.json())
          .then((res) =>{
            console.log("res", res);
            res.map((submission) => {
              console.log("submission", submission);
              if(submission){
                for(let i=0; i<teams.length; i++){
                  if(teams[i].teamName === submission.team.name){
                    teams[i] = {
                      teamName: teams[i].teamName,
                      status: 'y',
                      submissionId: submission.id,
                    }
                  }
                }
              }
            })
            console.log("updated teams", teams)
            this.setState({
              data: teams
            })
          })
        })
      }
  }

    renderTeams(item) {
        if(item.status === 'y')
        return <Card transparent key={item.id}> 
            <CardItem header style={{height:170,width:170, backgroundColor:'#28b515'}} button 
            onPress={() => this.props.navigation.navigate('VerifySubmission')} key={item.id} bordered>
              <View key={item.id} style={{flexDirection:"col", alignSelf: "center"}}>
              <Text key={Math.random()} style={{color:'white',marginLeft:25}}> {item.teamName}</Text>
              <Text key={Math.random()} style={{color:'white',marginLeft:5}}> Solved Clues: 3</Text>     
              </View>
            </CardItem>
        </Card>
      return <Card transparent key={item.id}> 
        <CardItem header style={{height:170, width:170,backgroundColor:'powderblue'}} button 
        onPress={() => alert("No submissions yet")} key={item.id} bordered>
        <Text  style={{marginLeft:35,color:'#562547'}} key={item.id}> {item.teamName}</Text>
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