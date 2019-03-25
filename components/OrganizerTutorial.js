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
        //backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
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

export default class OrganizerTutorial extends React.Component {

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true} loop={false} nextButton={next} prevButton={previous}>
                <View style={styles.slide1}>
                    <FixedHeader marginTop={60} navigating={this.props.navigation}/>
                    <ImageBackground source={require('../assets/theme1.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 40 }}>
                            How to create a quest</Text>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{
                            color: '#fff', fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 35, fontSize: 20,
                            marginRight: 35
                        }}>
                            Step 1: Enter quest details such as name of the quest, number of players in each team, number of
                            teams and time limit for thhe quest.</Text>
                        <View style={{ marginTop: 50 }} />
                        <FadeInView style={{
                            width: 250, height: 50, paddingTop: '1%', backgroundColor: 'powderblue',
                            borderRadius: '10', alignSelf: "center"
                        }}>
                            <Button title="Skip Tutorial" type="clear"
                                onPress={() => this.props.navigation.navigate('CreateQuest')}
                                titleStyle={{ fontFamily: "Papyrus", color: '#562547' }} />
                        </FadeInView>
                    </ImageBackground>
                </View>
                <View style={styles.slide2}>
                    <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
                    <ImageBackground source={require('../assets/theme1.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 40 }}>
                            How to create a quest</Text>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{
                            color: '#fff', fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 35, fontSize: 20,
                            marginRight: 35
                        }}>
                            Step 2: Next you will create a list of puzzles. Each puzzle will consist of a clue and the solution (hint optional).
                            You can also change the points for solving the clue or use the default.</Text>
                        <View style={{ marginTop: 50 }} />
                        <FadeInView style={{
                            width: 250, height: 50, paddingTop: '1%', backgroundColor: 'powderblue',
                            borderRadius: '10', alignSelf: "center"
                        }}>
                            <Button title="Skip Tutorial" type="clear"
                                onPress={() => this.props.navigation.navigate('CreateQuest')}
                                titleStyle={{ fontFamily: "Papyrus", color: '#562547' }} />
                        </FadeInView>
                    </ImageBackground>
                </View>
                <View style={styles.slide3}>
                <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
                    <ImageBackground source={require('../assets/theme1.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 40 }}>
                            How to create a quest</Text>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{
                            color: '#fff', fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 35, fontSize: 20,
                            marginRight: 35
                        }}>
                            Step 3: After creating the clues and soltions, you will get a unique code for your 
                            quest. You can share that code with the players to join your quest. And you are 
                            done !!</Text>
                        <View style={{ marginTop: 50 }} />
                    <FadeInView style={{
                        width: 250, height: 50, paddingTop: '1%', backgroundColor: 'powderblue',
                        borderRadius: '10', alignSelf: "center"
                    }}>
                        <Button title="Let's Start" type="clear"
                            onPress={() => this.props.navigation.navigate('CreateQuest')}
                            titleStyle={{ fontFamily: "Papyrus", color: '#562547' }} />
                    </FadeInView>
                    </ImageBackground>
                </View>
            </Swiper>
        );
    }
}