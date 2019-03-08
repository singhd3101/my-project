import React from 'react'
import {ScrollView,View,Text,TextInput,StyleSheet,ImageBackground,Image} from 'react-native'
import FadeInView from '../elements/FadeInView';
import {Button,Card} from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader'


class PlayerView extends React.Component {
    
    constructor(props) {
        super(props)
        this.state ={
            name: ''
        }
    }

    render() {
        return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Card>

        </Card> 
        </View>
        )
    }
}
export default PlayerView