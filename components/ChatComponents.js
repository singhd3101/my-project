import React from 'react'
import { View, Text, TextInput, ScrollView} from 'react-native'
import { Card, Button } from 'react-native-elements';
import styles from '../assets/style';

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
             <View style={{padding: 10}}>
                <Card style={styles.chatBox}>
                    {this.props.chatMessages.map((chatData) => (
                        <ChatMessage key={chatData.message} playerName={chatData.playerName} message={chatData.message} />
                    ))}
                </Card>
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
