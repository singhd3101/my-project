import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    teamCount: {
        width: '10%',
        fontSize: 20,
        height: 40,
        textAlign: 'center',
        paddingTop: 5
    },
    text: {
        width: '40%',
        fontSize: 20,
        height: 40,
        textAlign: 'left',
        paddingTop: 5
    },
    button: {
      width: '40%',
      height: 40
    },
    chatContainer: {
      flex: 1,
      backgroundColor: 'white',
      width: '90%'
    },
    chatBox: {
      padding: 10,
      borderWidth: 0.5,
      borderColor: '#d6d7da'
    },
    boldText: {
      fontWeight: 'bold'
    },
    chatPanel:{
      flexDirection:'row',
      marginTop: 10,
      marginRight: 20,
      marginLeft: 10
    },
    chatPanelText:{
        width: '90%',
        textAlign:'center',
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: 20
    }
  });
  