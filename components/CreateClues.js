import React from 'react'
import FixedHeader from '../elements/FixedHeader';
import { ScrollView, View, Text, TextInput, ImageBackground, TouchableOpacity} from 'react-native'
import { Card, Button } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
import FadeInView from '../elements/FadeInView';

class CreateClues extends React.Component {
    
    constructor(props) {
        super(props)
        this.state ={
            clue: '',
            clueError: '',
            solution: '',
            solutionError: '',
            points: "Please Select",
            hint: '',
            deductedPoints: 5,
            index: -1,
        }
    }

    componentDidMount() {
      const {navigation} = this.props;
      const index = navigation.getParam("index");
      console.log("index ", index);
      if(index == 0){
        this.setState({
          clue: 'Mountain of books',
          solution: 'Snell Library',
          points: 20,
          hint: 'Near Curry Center',
          deductedPoints: 10
        });
      }
      if(index == 1){
        this.setState({
          clue: 'Place to go to get in shape',
          solution: 'Marino Center',
          points: 20,
          hint: '',
          deductedPoints: 10
        });
      }
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
            this.props.navigation.navigate('ListClues');
          }
    }

    deleteClue(){
      alert('This will delete the clue from list of clues.')
      this.props.navigation.navigate('ListClues');
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
            <FixedHeader marginTop={60}/>
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
               <Text style={{fontSize: 18, color: '#562547', fontFamily:"Papyrus"}}>Points for solving the clue</Text>
                <Dropdown
                    selectedItemColor={'green'}
                    onChangeText={text => this.setState({points : text, deductedPoints: parseInt(text, 10)/2})}
                    value={this.state.points}
                    data={points}
                    itemCount={5}
                />
                <Text style={{fontSize: 18, color: '#562547', fontFamily:"Papyrus"}}>Hint</Text>
                <TextInput style= {{height:26,fontSize: 15, color: '#000', borderBottomWidth:1, 
                    borderBottomColor:'#555' }} value={this.state.hint} 
                    onChangeText={text => this.setState({hint: text})}
                    placeholder={'eg. Near Curry Center'}/>
                <Text style={{marginTop:20,fontSize: 18, color: '#562547', fontFamily:"Papyrus"}}>Points deducted for requesting hint: {this.state.deductedPoints}</Text>
                <View style={{marginTop:40}}></View>
                <View style={{justifyContent: 'space-between', flex: '1', flexDirection: 'row'}}>
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
                <TouchableOpacity onPress={() => this.deleteClue()}>
                <FadeInView style={{width: 150, height: 50,paddingTop:'1%', backgroundColor: '#b10000', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Delete" 
                    type="clear"
                    onPress={() => this.deleteClue()}
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
