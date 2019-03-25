import React from 'react'
import {Header} from 'react-native-elements'
import {Image, TouchableWithoutFeedback } from 'react-native'


class FixedHeader extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <Header
                leftComponent={
                    <TouchableWithoutFeedback  onPress={() => this.props.navigating.navigate('Home')} >
                    <Image source={require('../assets/comp.png')} resizeMethod="scale"
                    style={{width: '50%', height: '50%', backgroundColor:'#0e2a48', marginTop:10}}/>
                    </TouchableWithoutFeedback >
                }
                centerComponent={{	text: 'Treasure Hunt',
                    style: { color: '#fff', fontWeight:'bold', fontSize:30, fontFamily: "Papyrus",
                    paddingTop:20} }}
                rightComponent={{ color: '#fff',paddingTop:20 }}
                containerStyle={{backgroundColor: '#0e2a48', height:120, 
                marginTop: this.props.marginTop ? this.props.marginTop : 0}}
                leftContainerStyle={{flex:1.4}}/>
        );
    }
}
export default FixedHeader