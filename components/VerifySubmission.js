import React from 'react'
import FixedHeader from '../elements/FixedHeader';
import { View, Text, TextInput, ImageBackground, Image} from 'react-native'
import { Card, Button } from 'react-native-elements'
import FadeInView from '../elements/FadeInView';

class VerifySubmission extends React.Component {
    
    constructor(props) {
        super(props)
        this.state ={
            
        }
    }

    sendReview(){
        this.props.navigation.navigate('OrganizerView');
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FixedHeader/>
            <ImageBackground source={require('../assets/theme1.jpg')} style={{width: '100%', height: '100%'}}>

            <Card title="Verify Submission" containerStyle={{height:500}}>
                <Image source={require('../assets/submission.jpg')} style={{width: '100%', height: '50%'}} />
                <View style={{marginTop:40}}></View>
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
            </ImageBackground>
            </View>
        )
    }
}
export default VerifySubmission
