import React from 'react'
import {Header} from 'react-native-elements'
import {Image} from 'react-native'

const FixedHeader = () =>(
    <Header
        leftComponent={
            <Image source={require('../assets/cps.png')} resizeMethod="scale"
            style={{width: '50%', height: '50%', backgroundColor:'#0e2a48', marginTop:10}}/>
        }
        centerComponent={{	text: 'Treasure Hunt',
            style: { color: '#fff', fontWeight:'bold', fontSize:30, fontFamily: "Papyrus",paddingTop:20} }}
        rightComponent={{ color: '#fff',paddingTop:20 }}
        containerStyle={{backgroundColor: '#0e2a48', height:120}}
        leftContainerStyle={{flex:1.4}}/>
)
export default FixedHeader