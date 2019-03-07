import React from 'react'
import {Header} from 'react-native-elements'
import {Image} from 'react-native'

const FixedHeader = () =>(
    <Header
        leftComponent={
            <Image source={require('../assets/logo.gif')} style={{width: '60%', height: '60%', backgroundColor:'#c9683e', marginTop:10}}/>
        }
        centerComponent={{	text: 'Treasure Hunt',
            style: { color: '#fff', fontWeight:'bold', fontSize:30, fontFamily: "Papyrus",paddingTop:20} }}
        rightComponent={{ color: '#fff',paddingTop:20 }}
        containerStyle={{backgroundColor: '#c9683e', height:120}}/>
)
export default FixedHeader