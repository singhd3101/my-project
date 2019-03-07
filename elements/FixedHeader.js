import React from 'react'
import {Header} from 'react-native-elements'

const FixedHeader = () =>(
    <Header
        leftComponent={{icon: 'menu',color: '#fff',paddingTop:20 }}
        centerComponent={{	text: 'Treasure Hunt',
            style: { color: '#fff', fontWeight:'bold', fontSize:30, fontFamily: "Papyrus",paddingTop:20} }}
        rightComponent={{ icon: 'home', color: '#fff',paddingTop:20 }}
        containerStyle={{backgroundColor: '#c9683e', height:120}}/>
)
export default FixedHeader