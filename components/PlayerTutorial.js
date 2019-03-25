import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import FadeInView from '../elements/FadeInView';
import { Button } from 'react-native-elements'
import FixedHeader from '../elements/FixedHeader';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: "Papyrus"
    }
});

const next = (<Icon name="chevron-right" size={23} color={'white'} />);
const previous = (<Icon name="chevron-left" size={23} color={'white'} />);

export default class PlayerTutorial extends React.Component {

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true} loop={false} nextButton={next} prevButton={previous}>
                <View style={styles.slide1}>
                    <FixedHeader marginTop={60} navigating={this.props.navigation} />
                    <ImageBackground source={require('../assets/theme1.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 40 }}>
                            How to participate in a quest</Text>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{
                            color: '#fff', fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 35, fontSize: 20,
                            marginRight: 35
                        }}>
                            Step 1: Enter the unique quest code provided by the organizer to participate in the quest.</Text>
                        <View style={{ marginTop: 50 }} />
                        <FadeInView style={{
                            width: 250, height: 50, paddingTop: '1%', backgroundColor: 'powderblue',
                            borderRadius: '10', alignSelf: "center"
                        }}>
                            <Button title="Skip Tutorial" type="clear"
                                onPress={() => this.props.navigation.navigate('PlayerView')}
                                titleStyle={{ fontFamily: "Papyrus", color: '#562547' }} />
                        </FadeInView>
                    </ImageBackground>
                </View>
                <View style={styles.slide2}>
                    <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
                    <ImageBackground source={require('../assets/theme1.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 40 }}>
                            How to participate in a quest</Text>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{
                            color: '#fff', fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 35, fontSize: 20,
                            marginRight: 35
                        }}>
                            Step 2: Next you will pick a team to join from the list of teams available with open spots.</Text>
                        <View style={{ marginTop: 50 }} />
                        <FadeInView style={{
                            width: 250, height: 50, paddingTop: '1%', backgroundColor: 'powderblue',
                            borderRadius: '10', alignSelf: "center"
                        }}>
                            <Button title="Skip Tutorial" type="clear"
                                onPress={() => this.props.navigation.navigate('PlayerView')}
                                titleStyle={{ fontFamily: "Papyrus", color: '#562547' }} />
                        </FadeInView>
                    </ImageBackground>
                </View>
                <View style={styles.slide3}>
                <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
                    <ImageBackground source={require('../assets/theme1.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ marginTop: 30 }} />
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 40 }}>
                        How to participate in a quest</Text>
                        <View style={{ marginTop: 10 }} />
                        <Text style={{
                            color: '#fff', fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 35, fontSize: 20,
                            marginRight: 35
                        }}>
                            Step 3: When the organizer starts the quest, you will get the first clue. Solve the 
                            clue by identifying the location/icon. Next take a picture of any team member with 
                            icon/location and upload it and request verification from the organizer. You could 
                            also skip the clue or request a hint.</Text>
                        <View style={{ marginTop: 20 }} />
                    <FadeInView style={{
                        width: 250, height: 50, paddingTop: '1%', backgroundColor: 'powderblue',
                        borderRadius: '10', alignSelf: "center"
                    }}>
                        <Button title="Let's Play" type="clear"
                            onPress={() => this.props.navigation.navigate('PlayerView')}
                            titleStyle={{ fontFamily: "Papyrus", color: '#562547' }} />
                    </FadeInView>
                    </ImageBackground>
                </View>
            </Swiper>
        );
    }
}