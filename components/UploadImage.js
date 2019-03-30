import React,{Component} from 'react';
import { Button } from 'react-native-elements';
import {
    View,
    ActivityIndicator,
    Platform,
    Alert,
    Linking,
    StyleSheet,
    YellowBox,
} from 'react-native';
import FadeInView from '../elements/FadeInView';
import { Permissions } from 'expo';

YellowBox.ignoreWarnings(['Require cycle']);

export default class UploadImage extends Component{
    constructor(props){
        super(props)
        this.askPermission = this.askPermission.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.state={
          endpoint:this.props.endpoint?this.props.endpoint:null,
          payloadKey:this.props.payloadKey? this.props.payloadKey:null,
          token:this.props.token?this.props.token:null,
          callbackUrl:this.props.callbackUrl?this.props.callbackUrl:null,
          loading:false
        }
        defaultProps = {
            onSuccess: undefined,
            onFailure: undefined,
            onStartUpload: undefined,
            alertTitle: 'Please Allow Access',
            alertMessage: [
              'This applicaton needs access to your photo library to upload images.',
              '\n\n',
              'Please go to Settings of your device and grant permissions to Photos.',
            ].join(''),
            alertNo: 'Not Now',
            alertYes: 'Settings',
        };
    }
  async askPermission() {
        // only if user allows permission to camera roll
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const { onStartUpload } = this.props;
        // On Android users are prompted every time,
        // so no need to show additional Alert
        if (status !== 'granted') {
          if (Platform.OS === 'ios') this.showAlert();
          return;
        }
    }

  showAlert() {
        Alert.alert(
            'Please Allow Access',
            [
                'This applicaton needs access to your photo library to upload images.',
                '\n\n',
                'Please go to Settings of your device and grant permissions to Photos.',
            ].join(''),
            [
                { text: 'Not Now', style: 'cancel' },
                { text: 'Settings', onPress: () => Linking.openURL('app-settings:') },
            ],
        );
    }

  uploadResult = async () =>  {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        console.log(status,'status');
        if (status !== 'granted') {
            if (Platform.OS === 'ios') this.showAlert();
            return;
        }
        Expo.ImagePicker.launchImageLibraryAsync({
            mediaTypes:'Images'
        }).then((result)=>{
            const file = result.uri;
            if(!result.cancelled){
                this.setState({
                    loading:true
                })
                uploadResponse =  this.uploadImageAsync(result.uri).then((reponse)=>{
                    this.setState({
                        loading:false,
                        uploaded_photo:file
                    })
                    alert('Image sent to organizer successfully !!');
                }).catch(function(error){
                    console.log('error: ', error);
                    alert(error);
                });
            }
        })
    }

  async uploadImageAsync(uri) {

        let presignedUrl = '';
        const xhr = new XMLHttpRequest()
        var AWS = require('aws-sdk');
        var s3 = new AWS.S3({
            accessKeyId:'AKIAJPUD4AU7L5VRTILQ', 
            secretAccessKey:'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', 
            region:'us-east-1'
        });
 
        const keyname = 'images/myimage1' + Math.random() + '.jpg';
        var params = {
            Bucket: 'studyawspollydt.com', 
            Key: keyname, 
            ContentType: 'image/jpeg'
        };
        s3.getSignedUrl('putObject', params, function (err, url) {
            presignedUrl = url;
            console.log('presigned url in: ', presignedUrl)
            xhr.open('PUT', presignedUrl)
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Image successfully uploaded to S3')
                    } else {
                        console.log('Error while sending the image to S3')
                    }
                }
            }
            xhr.setRequestHeader('Content-Type', 'image/jpeg')
            xhr.send({ uri, type: 'image/jpeg', name: 'myimage1.jpg'})
        });
  }

  render(){
    if(this.state.loading){
            return(
                <View style={[style.container]}>
                    <ActivityIndicator size="large" color="#FF8241" />
                </View>
            )
        }
        return(
            <FadeInView style={{width: '40%', height: 50,paddingTop:'1%', backgroundColor: 'powderblue',
                alignItems:'center', borderRadius: '10'}}>
                <Button title="Upload" type="clear" onPress={() => this.uploadResult()}
                    titleStyle={{fontFamily: "Papyrus", color: '#562547'}}/>  
                </FadeInView>
        )
    }
}
const style = StyleSheet.create({
    imgwrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
        marginBottom: 80,
    },
    circleWrapper:{
        backgroundColor:'#ECECEC',
        height:22,
        width:22,
        borderWidth:3,
        borderColor: '#ffffff',
        borderRadius:11,
        marginLeft:70,
        marginTop: -80,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})