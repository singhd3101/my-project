import React from 'react'
import FixedHeader from '../elements/FixedHeader';
import { View, Text, TextInput, ImageBackground} from 'react-native'
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
            points: 10,
            hint: '',
            deductedPoints: 5
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
            this.props.navigation.navigate('Home');
          }
    }

    render() {
        let points = [{
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
            <FixedHeader/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>

            <Card 
            title="Add/Edit Clue" style={{fontSize: 40, fontColor: 'blue', width:'40'}}>
               <Text>Clue</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, 
                    borderBottomColor:'#555' }} value={this.state.clue} 
                    onChangeText={text => this.setState({clue: text, clueError: ''})}
                    placeholder={'eg. Mountain of books'}/>
               <Text style={{color:'#ff0000'}}>{this.state.clueError}</Text>
               <Text>Solution</Text>
               <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, 
                    borderBottomColor:'#555' }} value={this.state.solution} 
                    onChangeText={text => this.setState({solution: text, solutionError: ''})}
                    placeholder={'eg. Snell Library'}/>
               <Text style={{color:'#ff0000'}}>{this.state.solutionError}</Text>
               <Text>Points for solving the clue</Text>
                <Dropdown
                    selectedItemColor={'green'}
                    onChangeText={text => this.setState({points : text, deductedPoints: parseInt(text, 10)/2})}
                    value={this.state.points}
                    data={points}
                    itemCount={5}
                />
                <Text>Hint</Text>
                <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, 
                    borderBottomColor:'#555' }} value={this.state.hint} 
                    onChangeText={text => this.setState({hint: text})}
                    placeholder={'eg. Near Curry Center'}/>
                <Text style={{marginTop:20}}>Points deducted for requesting hint: {this.state.deductedPoints}</Text>
                <FadeInView style={{width: 305, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
                borderRadius: '10', alignItems:'center', marginTop:10}}>
                <Button 
                    title="Submit" 
                    type="clear"
                    onPress={() => this.createClue()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>   
                </FadeInView>
            </Card>
            </ImageBackground>
            </View>
        )
    }
}
export default CreateClues
