import React from 'react'
import { View, Text, TextInput, ScrollView} from 'react-native'
import { Card, Button } from 'react-native-elements';
import styles from '../assets/style';
import FadeInView from '../elements/FadeInView';

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }

    addMessage() {
        if (this.state.message != '')
            this.props.addMessage({playerName:"Me", message: this.state.message});
        this.setState({
            message: ''
        })
    }

    render() {
        return(
             <View style={{padding: 10, backgroundColor:'#f5f5f5'}}>
                <Card style={styles.chatBox}>
                    {this.props.chatMessages.map((chatData) => (
                        <ChatMessage key={chatData.message} playerName={chatData.playerName} message={chatData.message} />
                    ))}
                </Card>
                <TextInput style= {{height:26,fontSize: 15, color: '#000', borderBottomWidth:1,
                        borderBottomColor:'#555' , margin:20, }} value={this.state.message}
                        placeholder={'Enter Message'} onChangeText={(text) => {
                this.setState({
                    message: text
                })}}/>
                <FadeInView style={{width: 300, height: 50,paddingTop:'1%', backgroundColor: 'powderblue',
                    alignItems:'center', borderRadius: '10', marginLeft:40}}>
                <Button title="Send" type="clear" onPress={() => this.addMessage()}
                    titleStyle={{fontWeight:"700", fontFamily: "Papyrus", color: '#562547'}}/>
                </FadeInView>
            </View>
        )
    }
}

class ChatMessage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Text>
                <Text style={styles.boldText}>{this.props.playerName}: </Text>
                <Text> {this.props.message}{'\n'} </Text>
            </Text>
        );
    }
}

export default Chat;
