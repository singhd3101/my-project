import React from 'react'
import FixedHeader from '../elements/FixedHeader';
import { View, Text, TextInput, ImageBackground, Image,ScrollView} from 'react-native'
import { Card, Button } from 'react-native-elements'
import FadeInView from '../elements/FadeInView';

class VerifySubmission extends React.Component {
    
    constructor(props) {
        super(props)
        this.state ={
            imageUrl: "https://s3.amazonaws.com/studyawspollydt.com/images/myimage10.9500613300402108.jpg"
        }
    }

    componentDidMount(){
        
    }

    sendReview(){
        this.props.navigation.navigate('MonitorTeams');
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>
            <ScrollView style={{marginBottom:60}}>
            <Card title="Verify Submission" containerStyle={{height:500}}>
                <Image source={{ uri: this.state.imageUrl }} style={{width: '100%', height: '50%'}} />
                <View style={{marginTop:10}}></View>
                <Text style={{marginBottom:10, fontWeight:'bold'}}>Clue: Mountain of Books</Text>
                <Text style={{marginBottom:10, fontWeight:'bold'}}>Solution: Snell Library</Text>
                <View style={{justifyContent: 'space-between', flex: '1', flexDirection: 'row'}}>
                <FadeInView style={{width: 150, height: 50,paddingTop:'1%', backgroundColor: 'green', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Accept" 
                    type="clear"
                    onPress={() => this.sendReview()}
                    titleStyle={{fontFamily: "Papyrus", color: 'white'}}/>   
                </FadeInView>
                <FadeInView style={{width: 150, height: 50,paddingTop:'1%', backgroundColor: '#b10000', 
                alignItems:'center', borderRadius: '10'}}>
                <Button 
                    title="Reject" 
                    type="clear"
                    onPress={() => this.sendReview()}
                    titleStyle={{fontWeight:"700", fontFamily: "Papyrus", color: 'white'}}/>   
                </FadeInView>
                </View>
                <View style={{marginTop:40}}></View>
                <View style={{marginTop:'2%'}}>
                <Text style={{fontWeight:'bold'}}>Reason for rejection</Text>
                <TextInput style= {{height:26,fontSize: 20, color: '#000', borderBottomWidth:1, 
                    borderBottomColor:'#555', marginTop:10 }} value={this.state.name} 
                    />
                </View>
            </Card>
            </ScrollView>
            </ImageBackground>
            </View>
        )
    }
}
export default VerifySubmission
