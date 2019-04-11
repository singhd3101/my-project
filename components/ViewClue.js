import React from 'react'
import FixedHeader from '../elements/FixedHeader';
import { ScrollView, View, Text, TextInput, ImageBackground, TouchableOpacity,Alert} from 'react-native'
import { Card, Button } from 'react-native-elements'
import FadeInView from '../elements/FadeInView';
import SlidingUpPanel from 'rn-sliding-up-panel';
import styles from '../assets/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UploadImage from './UploadImage';
import Chat from './ChatComponents';

class ViewClue extends React.Component {
    
    constructor(props) {
        super(props)
        this.state ={
            teamName:'',
            chatMessages: [{playerName: "Sam", message:"Hi all, I am at library and I don't think the answer is here"},
                            {playerName: "Adam", message:"lets meet in ccis"},
                        ],
            clue: '',
            hintRequested: false,
            score: 0,
            teamId : -1,
            hint: '',
            deductedPoints : 0,
            endTimeQuest: null,
            clueId : 0,
            endGame: false,
            questCode: '',
            submissionId: -1,
            updateState: 0,
            imageStatus: 'abcd'
        }
        this.getSubmissionStatus = this.getSubmissionStatus.bind(this);
        this.fetchViewClueData = this.fetchViewClueData.bind(this);
        this.fetchSubmission = this.fetchSubmission.bind(this);
    }

    componentDidMount() {
        this.fetchViewClueData();
    }

    fetchViewClueData(){
        const {navigation} = this.props;
        const teamName = navigation.getParam("teamName");
        const questCode = navigation.getParam("questCode");
        if(teamName) {
            this.setState({
                teamName
            });
        }
        if(questCode){
            this.setState({
                questCode
            });
            fetch('https://treasurehunt-bitsplease.herokuapp.com/api/quests/code/'+questCode)
                .then((response) => response.json())
                .then((res) => {
                    let team = res.teams.find((team) => {
                        return team.name === 'Team '.concat(teamName)
                    })
                    console.log("team ", team)
                    let score =     0;
                    if(team.endTimeQuest) {
                        alert("Congratulations !! You have completed the quest.")
                    } else {
                        if(team.score){
                            score = team.score;
                        }
                        this.setState({
                            clue: team.clue_on.puzzle,
                            score: score,
                            teamId: team.id,
                            hint: team.clue_on.hint.text,
                            deductedPoints: team.clue_on.hint.points,
                            endTimeQuest: team.endTimeQuest,
                            clueId: team.clue_on.id,
                            endGame: team.endTimeQuest ? true : false
                        })
                    }
                })
        }
    }

    fetchSubmission(submissionId) {
        this.setState({
            submissionId
        })
        this.timer = setInterval(() => this.getSubmissionStatus(), 1000);
    }

    getSubmissionStatus() {
        let imageStatus = ''
        fetch('https://treasurehunt-bitsplease.herokuapp.com/api/submissions/' + this.state.submissionId)
        .then((response) => response.json())
        .then((res) => {
            imageStatus = res.imageStatus; 
            console.log('res.imgstatus ', res.imageStatus)
            if(res.team.endTimeQuest){
                alert("Congratulations !! You have completed the quest.")
            } else {
                if(res.imageStatus === 'ACCEPTED') {
                    alert("Congratulations !! Your submission has been accepted.")
                    this.fetchViewClueData();
                    clearInterval(this.timer)
                    this.timer = null;
                }
                if(res.imageStatus === 'REJECTED') {
                    alert("Submission declined !! Try again. ")
                    this.fetchViewClueData();
                    clearInterval(this.timer)
                    this.timer = null;
                }
            }
        })
        console.log('imageStatus ', imageStatus)
        this.setState({
            updateState: Math.random(),
            imageStatus,
        })
    }

    updateForm(newState) {
        this.setState(newState);
    }

    sendReview(){
        this.props.navigation.navigate('MonitorTeams');
    }

    nextClue(){
        fetch('https://treasurehunt-bitsplease.herokuapp.com/api/teams/' + this.state.teamId + '/skipClue', {
            method: 'PUT',
            headers:{
               'content-type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((team) => {
            let score = 0
            if(team.score) {
                score = team.score;
            }
            this.setState({
                clue: team.clue_on.puzzle,
                score: score,
                teamId: team.id,
                hint: team.clue_on.hint.text,
                deductedPoints: team.clue_on.hint.points,
                endTimeQuest: team.endTimeQuest,
                clueId: team.clue_on.id
            })
        })
    }

    skip(){
        Alert.alert(
            'Confirmation',
            'Are you sure you want to skip the clue?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'Yes', onPress: () =>  
              {this.nextClue()}
        },
            ],
            {cancelable: false},
          )
    }

    addMessage(msg) {
        console.log('msg: ', msg);
        this.chatMessages.push(msg);
    }

    renderSkipButton(){
        if(this.state.hintRequested){
            return(
            <TouchableOpacity onPress={() => this.skip()} style={{marginTop:'10%'}}>
                <FadeInView style={{width: '100%', height: 50,paddingTop:'1%', backgroundColor: 'orange',
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Skip this Clue" 
                    type="clear"
                    onPress={() => this.skip()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </TouchableOpacity>)
        }
        else {
            return(
            <TouchableOpacity onPress={() => this.skip()}>
                <FadeInView style={{width: '100%', height: 50,paddingTop:'1%', backgroundColor: 'orange',
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Skip this Clue" 
                    type="clear"
                    onPress={() => this.skip()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </TouchableOpacity>)
        }
    }

    requestHint(){
        let updatedScore = this.state.score - this.state.deductedPoints
        fetch('https://treasurehunt-bitsplease.herokuapp.com/api/team/'+this.state.teamId, {
            method: 'PUT',
            body: JSON.stringify({
                score: updatedScore,
                name: 'Team ' + this.state.teamName,
                endTimeQuest: this.state.endTimeQuest,
            }),
            headers:{
               'content-type': 'application/json'
            }
            }).then((response) => response.json())
            .then((res) => {
                this.setState({
                hintRequested : this.state.hint,
                score: res.score
            })
        })
    }

    getClueId(){
        return this.state.clueId;
    }

    getTeamId(){
        return this.state.teamId;
    }

    render() {
        let skipButton;

    if(this.state.hintRequested){
        skipButton = (
            <TouchableOpacity onPress={() => this.skip()} style={{marginTop:'10%'}}>
                <FadeInView style={{width: '100%', height: 50,paddingTop:'1%', backgroundColor: 'orange',
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Skip this Clue" 
                    type="clear"
                    onPress={() => this.skip()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </TouchableOpacity>)
    } else {
        skipButton = (<TouchableOpacity onPress={() => this.skip()}>
        <FadeInView style={{width: '100%', height: 50,paddingTop:'1%', backgroundColor: 'orange',
        alignItems:'center', borderRadius: '10'}}>
        <Button 
            title="Skip this Clue" 
            type="clear"
            onPress={() => this.skip()}
            titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
        </FadeInView>
        </TouchableOpacity>);
    }
	    let items = this.state.teamName;
        let team = 'Team: '+ this.state.teamName;
        
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>            
            <Card containerStyle={{height:500}}>
            <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                    <Text style={{justifyContent:'flex-start', fontSize: 20,fontFamily:"Papyrus",
                    color:'#562547'}}>
                    {team}</Text>
                    </View>
                    <View style={{flex:1}}>
                    <Text style={{justifyContent:'flex-end', textAlign:'right', fontSize: 20,
                    fontFamily:"Papyrus",
                    color:'#562547'}}>Team Score: {this.state.score}</Text>
                    </View>
                </View>
                <View style={{marginTop:20}}></View>
                <Card containerStyle={{width:'100%', marginTop:-5, marginLeft:-5, marginRight:-5}}>
                    <Text>{this.state.clue}</Text>
                </Card>
                <View style={{marginTop:20}}></View>
                <View style={{justifyContent: 'space-between', flex: '1', flexDirection: 'row'}}>
                <UploadImage
                        payloadKey='file'
                        endpoint='https://mighty-dusk-79530.herokuapp.com/api/upload'
                        clueId = {this.state.clueId}
                        teamId = {this.state.teamId}
                        teamName = {this.state.teamName}
                        questCode = {this.state.questCode}
                        fetchSubmission = {this.fetchSubmission} />
                <FadeInView style={{width: 180, height: 50,paddingTop:'1%', backgroundColor: '#1dd43c', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Request Verification" 
                    type="clear"
                    onPress={() => alert('Image verification requested from organizer.')}
                    titleStyle={{fontWeight:"700", fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </View>
                <View style={{marginTop:60}}></View>
                {this.state.hintRequested ? 
                    <Text style={{fontFamily: "Papyrus", color: '#562547', paddingTop:5, marginBottom:-27}}>
                    Hint: {this.state.hint}</Text> :
                <View>
                <FadeInView style={{width: '100%', height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
                alignItems:'center', borderRadius: '10'}}>
                <Button title="Request Hint" type="clear"
                    onPress={() =>
                        Alert.alert(
                            'Confirmation',
                            'Are you sure you want to request the hint? Note: ' + this.state.deductedPoints + ' points would be deducted',
                            [
                              {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                              },
                              {text: 'Yes', onPress: () =>  this.requestHint()},
                            ],
                            {cancelable: false},
                          )
                       }
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
                </View>}
                <View style={{marginTop:10}}></View>
                {skipButton}
                <View style={{marginTop:80}}></View>
                <Icon name="chat" size={45} color="#ffcf40" onPress={() => this._panel.show()} />
            </Card>
            <Text>{this.state.imageStatus}</Text>
            <SlidingUpPanel ref={c => this._panel = c}>
                {() => (
                    <View style={styles.chatContainer}>
                    <ScrollView>
                        <View style={styles.chatPanel}>
                            <Text style={styles.chatPanelText}>Team Discussion Board.</Text>
                            <Icon name="clear" size={45} color="red" onPress={() => this._panel.hide()} />
                        </View>
                        <Chat chatMessages = {this.state.chatMessages} addMessage={this.addMessage}></Chat>
                    </ScrollView>
                    </View>
                )}
            </SlidingUpPanel>
            </ImageBackground>
            </View>
        )
    }
}
export default ViewClue
