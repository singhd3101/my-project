import React from 'react';
import { ScrollView, View, ImageBackground, FlatList, YellowBox} from 'react-native';
import { Card, CardItem, Text, Icon } from 'native-base';
import FixedHeader from '../elements/FixedHeader';

YellowBox.ignoreWarnings(['Encountered two children with the same key']);

class MonitorTeams extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
          questCode: '',
          submissions:[],
          data:[],
          questId: ''
        }
        this.getNewSubmissionData = this.getNewSubmissionData.bind(this);
    }

    componentDidMount() {  
      this.timer = setInterval(() => this.getNewSubmissionData(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timer)
      this.timer = null;
    }

    getNewSubmissionData(){
      const {navigation} = this.props;
      const questCode = navigation.getParam("questCode");
      let teams = []
      if(questCode) {
        fetch('https://treasurehunt-bitsplease.herokuapp.com/api/quests/code/' + questCode)
        .then((response) => response.json())
        .then((res) => {
          this.setState({
            questId: res.id
          })
        }).then(() =>{
          let url = 'https://treasurehunt-bitsplease.herokuapp.com/api/teams/quests/code/' + questCode;
        fetch(url)
        .then((response) => response.json())
        .then((res) => {
          res.map((team) => {
            teams.push({
              id: team.id,
              teamName: team.name,
              status: 'n',
              submissionId: -1
            })
          })
        }
        ).then(() => {
          fetch('https://treasurehunt-bitsplease.herokuapp.com/api/submission/monitor/questId/' + this.state.questId)
          .then((response) => response.json())
          .then((res) =>{
            res.map((submission) => {
              if(submission){
                for(let i=0; i<teams.length; i++){
                  if(teams[i].teamName === submission.team.name){
                    updatedTeam = {
                      id: teams[i].id,
                      teamName: teams[i].teamName,
                      status: 'y',
                      submissionId: submission.id,
                    }
                    teams[i] = updatedTeam
                  }
                }
              }
            })
            let updatedTeams = []
            for(let i=0; i<teams.length; i++){
              if(teams[i].status === 'y'){
                updatedTeams.push(teams[i])
              }
            }
            for(let i=0; i<teams.length; i++){
              if(teams[i].status === 'n'){
                updatedTeams.push(teams[i])
              }
            }
            this.setState({
              data: updatedTeams
            })
          })

        })
        })
      }
    }

    renderTeams(item) {
        if(item.status === 'y')
        return <Card transparent key={Math.random()}> 
            <CardItem header style={{height:170,width:170, backgroundColor:'#28b515'}} button 
            onPress={() => this.props.navigation.navigate('VerifySubmission',{submissionId:item.submissionId})} key={Math.random()} bordered>
              <View key={item.id} style={{flexDirection:"col", alignSelf: "center"}}>
              <Text key={Math.random()} style={{color:'white',marginLeft:25}}> {item.teamName}</Text>
              <Text key={Math.random()} style={{color:'white',marginLeft:5}}> Solved Clues: 3</Text>     
              </View>
            </CardItem>
        </Card>
      return <Card transparent key={Math.random()}> 
        <CardItem header style={{height:170, width:170,backgroundColor:'powderblue'}} button 
        onPress={() => alert("No submissions yet")} key={Math.random()+1} bordered>
        <Text  style={{marginLeft:35,color:'#562547'}} key={Math.random()+2}> {item.teamName}</Text>
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
                keyExtractor={(item, index) => {item.id}}
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