import React from 'react'
import FixedHeader from '../elements/FixedHeader';
import { ScrollView, View, Text, TextInput, ImageBackground, TouchableOpacity, Alert} from 'react-native'
import { Card, Button } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
import FadeInView from '../elements/FadeInView';

class CreateClues extends React.Component {
    
    constructor(props) {
        super(props)
        this.state ={
            questId:'',
            hintId:'',
            clueId:'',
            clue: '',
            clueError: '',
            solution: '',
            solutionError: '',
            points: 10,
            hint: '',
            deductedPoints: 5,
            index: -1,
            clues: [],
            add: false
        }
    }

    componentDidMount() {
      const {navigation} = this.props;
      const add = navigation.getParam("add");
      const questId = navigation.getParam("questId",1)
      this.setState({
        questId: questId,
        add: add
    })
    this.props.navigation.addListener("didFocus", () => {
      const clueId = this.props.navigation.getParam("clueId",0);
      const add = navigation.getParam("add");
      this.setState({
        clueId: clueId,
        add: add,
      })
      if(!add){
  fetch('https://treasurehunt-bitsplease.herokuapp.com/api/clues/' + clueId)
  .then((response) => response.json())
            .then((responseJson) => {
              this.setState({
                clue: responseJson.puzzle,
                solution: responseJson.solution,
                points: responseJson.points,
                hint: responseJson.hint.text,
                deductedPoints: responseJson.hint.points
              })
            })
          }
  });
     
  }

    updateForm(newState) {
        this.setState({
            newState
          }); 
    }

    createClue(){
        let clue = this.state.clue.trim();
        let solution = this.state.solution.trim();
        var deductedPoints = this.state.points / 2;
        if(clue == ''){
            this.setState({
              clueError: 'Please enter a clue'
            });
          } else if(solution == ''){
            this.setState({
                solutionError: 'Please enter a solution'
              });
          } else {
            this.setState({
              clueError: '',
              clue: this.state.clue,
              solutionError: '',
              solution: this.state.solution,
              points: this.state.points,
              hint: this.state.hint,
              deductedPoints
            });

            if(this.state.add){
            fetch('https://treasurehunt-bitsplease.herokuapp.com/api/hints', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  text: this.state.hint,
                  points: this.state.deductedPoints               
                }),
              }).then((response) => response.json())
                  .then((responseJson) => {
                    this.setState({
                      hintId: responseJson.id
                    });
                  }) .then(() => {
                    fetch('https://treasurehunt-bitsplease.herokuapp.com/api/clues/questId/' + this.state.questId + '/hintId/' + this.state.hintId, {
                    method: 'POST',
                    headers: {
                    Accept: 'application/json',
                            'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  puzzle: this.state.clue,
	                solution: this.state.solution,
	                points: this.state.points
               
                }),
              }).then((response) => response.json())
              .then((responseJson) => {
                this.props.navigation.navigate('ListClues',{questId: this.state.questId});
              })
                  })
                  .catch((error) => {
                    console.error(error);
                  });
                } 
                else{
                  fetch('https://treasurehunt-bitsplease.herokuapp.com/api/clues/' + this.state.clueId)
                  .then((response) => response.json())
                            .then((responseJson) => {
                              fetch("https://treasurehunt-bitsplease.herokuapp.com/api/hints/" + responseJson.hint.id,
                              {
                                  method: 'PUT',
                                  body: JSON.stringify({
                                    text:this.state.hint,
                                    points:this.state.deductedPoints,
                                }),
                                headers:{
                                    'content-type': 'application/json'
                                }
                              }).then((response) => response.json())
                              .then(() => {
                                fetch("https://treasurehunt-bitsplease.herokuapp.com/api/clues/" + this.state.clueId,
                              {
                                  method: 'PUT',
                                  body: JSON.stringify({
                                    puzzle: this.state.clue,
	                                  solution: this.state.solution,
	                                  points: this.state.points
                                }),
                                headers:{
                                    'content-type': 'application/json'
                                }
                              }).then((response) => response.json())
                              .then(() => {
                                this.props.navigation.navigate('ListClues',{questId: this.state.questId});
                              })
                              });

                            })


                }
          }
    }
    

    clear(){
      this.setState({
        clue: '',
        solution: '',
        points: 10,
        hint: '',
        clueError: '',
        solutionError: '',
        deductedPoints: 5
      });
    }

    deleteClue(){
      //Add validation when api call is added, should check if user is trying to delete after clicking add clue, 
      //should not allow user to delete anything if clicked add new clue
      Alert.alert(
        'Confirmation',
        'Are you sure you want to delete this clue?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Delete', onPress: () => {
            fetch("https://treasurehunt-bitsplease.herokuapp.com/api/clues/delete/" + clueId,
         {
             method: 'PUT'
         }).then(() => {
            this.props.navigation.navigate('ListClues',{questId: this.state.questId});
        });
       }},
        ],
        {cancelable: false},
      );
    }

    render() {
        let points = [
          {
            key: 10,
            value: 10,
          }, {
            key: 20,
            value: 20,
          }, {
            key: 30,
            value: 30,
          }, {
            key: 40,
            value: 40,
          }, {
            key: 50,
            value: 50,
          }];
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
            <ScrollView>
            <Card 
            title="Add/Edit Clue" titleStyle={{fontSize: 20, color: '#562547', fontFamily:"Papyrus"}} 
            containerStyle={{marginTop:40, marginBottom:60}}>
               <Text style={{fontSize: 18, color: '#562547', fontFamily:"Papyrus"}}>Clue</Text>
               <TextInput style= {{height:26,fontSize: 15, color: '#000', borderBottomWidth:1, 
                    borderBottomColor:'#555' }} value={this.state.clue} 
                    onChangeText={text => this.setState({clue: text, clueError: ''})}
                    placeholder={'eg. Mountain of books'}/>
               <Text style={{color:'#ff0000'}}>{this.state.clueError}</Text>
               <Text style={{fontSize: 18, color: '#562547', fontFamily:"Papyrus"}}>Solution</Text>
               <TextInput style= {{height:26,fontSize: 15, color: '#000', borderBottomWidth:1, 
                    borderBottomColor:'#555' }} value={this.state.solution} 
                    onChangeText={text => this.setState({solution: text, solutionError: ''})}
                    placeholder={'eg. Snell Library'}/>
               <Text style={{color:'#ff0000'}}>{this.state.solutionError}</Text>
               <View style={{marginTop:20}}></View>
               <Text style={{fontSize: 18, color: '#562547', fontFamily:"Papyrus"}}>Points for solving the clue</Text>
                <Dropdown
                    selectedItemColor={'green'}
                    onChangeText={text => this.setState({points : text, deductedPoints: parseInt(text)/2})}
                    value={this.state.points}
                    data={points}
                    itemCount={5}
                />
                <View style={{marginTop:20}}></View>
                <Text style={{fontSize: 18, color: '#562547', fontFamily:"Papyrus"}}>Hint</Text>
                <TextInput style= {{height:26,fontSize: 15, color: '#000', borderBottomWidth:1, 
                    borderBottomColor:'#555' }} value={this.state.hint} 
                    onChangeText={text => this.setState({hint: text})}
                    placeholder={'eg. Near Curry Center'}/>
                <Text style={{marginTop:20,fontSize: 18, color: '#562547', fontFamily:"Papyrus"}}>
                Points deducted for requesting hint: {this.state.deductedPoints}</Text>
                <View style={{marginTop:25}}></View>
                <View style={{justifyContent: 'space-between', flex: '1', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => this.clear()}>
                <FadeInView style={{width: 150, height: 50,paddingTop:'1%', backgroundColor: '#b10000', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Clear" 
                    type="clear"
                    onPress={() => this.clear()}
                    titleStyle={{fontFamily: "Papyrus", color: 'white'}}/>   
                </FadeInView>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createClue()}>
                <FadeInView style={{width: 150, height: 50,paddingTop:'1%', backgroundColor: 'green', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Submit" 
                    type="clear"
                    onPress={() => this.createClue()}
                    titleStyle={{fontFamily: "Papyrus", color: 'white'}}/>   
                </FadeInView>
                </TouchableOpacity>
                </View>
                <View style={{marginTop:60}}></View>
            </Card>
            </ScrollView>
            </ImageBackground>
            </View>
        )
    }
}
export default CreateClues
