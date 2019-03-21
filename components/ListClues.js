import React from 'react';
import FixedHeader from '../elements/FixedHeader';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { Button as Btn } from 'react-native';
import { Card, Button } from 'react-native-elements';
import styles from '../assets/style';
import FadeInView from '../elements/FadeInView';

class ListClues extends React.Component {
    
    static navigationOptions = {screen: 'Team'}
    constructor(props) {
        super(props)
        this.state ={
            clues: ['Mountain of Books', 'Where do you go to stay fit', 'Burgers, Pizza, Fried Chicken and chips'],
        }
    }

    renderClues() {
        return this.state.clues.map((item, index) =>
        <TouchableOpacity style={{marginBottom:40}} onPress={() => this.props.navigation.navigate('CreateClues', 
        {index: index})} key={index}>
        <Card key={index} containerStyle={{backgroundColor:'#f5f5f5'}} title={'Clue '.concat(index + 1).concat('.')} titleStyle={{fontFamily:"Papyrus",color:'#562547'}}>
            <View style={styles.container}>
            <Btn key={index + 50} title={item} onPress={() => this.props.navigation.navigate('CreateClues', 
                    {index: index})}
                    buttonStyle={styles.button}/>
        </View>
        </Card>
        </TouchableOpacity>
       );
    }

    createQuest(){
        let len = this.state.clues.length;
        if(len == 0){
            alert('Create atleast one puzzle with a clue and a solution.');
        } else {
            this.props.navigation.navigate('QuestCode');
        }
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader marginTop={60}/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
            <ScrollView style={{padding: 15, marginBottom:70, paddingBottom:50, alignSelf:"center"}}>
            <Card title='Clues' containerStyle={{width:320}} titleStyle={{fontSize:20, fontFamily:"Papyrus",
            color:'#562547'}}>
            <View style={{justifyContent: 'space-between', flex: '1', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateClues')}>
                <FadeInView style={{width: 140, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                        title="Create Clue" 
                        type="clear"
                        width
                        onPress={() => this.props.navigation.navigate('CreateClues')}
                        titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/> 
                </FadeInView>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.createQuest()}>
                <FadeInView style={{width: 140, height: 50,paddingTop:'1%', backgroundColor: 'powderblue', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                        title="Create Quest" 
                        type="clear"
                        width
                        onPress={() => this.createQuest()}
                        titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/> 
                </FadeInView>
                </TouchableOpacity>
                </View>
               <View style={{marginTop:10}}></View>
               <View>
                    {this.renderClues()}
               </View>
            </Card>
            </ScrollView>
            </ImageBackground>
            </View>

        )
    }
}
export default ListClues
