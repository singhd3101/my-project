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

export default class MonitorTutorial extends React.Component {

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true} loop={false} nextButton={next} prevButton={previous}>
                <View style={styles.slide1}>
                    <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
                    <ImageBackground source={require('../assets/theme1.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 40 }}>
                            How to monitor a quest</Text>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{
                            color: '#fff', fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 35, fontSize: 20,
                            marginRight: 35
                        }}>
                            Step 1: When you are ready, start the last created quest.</Text>
                        <View style={{ marginTop: 200 }} />
                        <FadeInView style={{
                            width: 250, height: 50, paddingTop: '1%', backgroundColor: 'powderblue',
                            borderRadius: '10', alignSelf: "center"
                        }}>
                            <Button title="Skip Tutorial" type="clear"
                                onPress={() => this.props.navigation.navigate('StartQuest')}
                                titleStyle={{ fontFamily: "Papyrus", color: '#562547' }} />
                        </FadeInView>
                    </ImageBackground>
                </View>
                <View style={styles.slide2}>
                    <FixedHeader marginTop={60}  navigating={this.props.navigation}/>
                    <ImageBackground source={require('../assets/theme1.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 40 }}>
                            How to monitor a quest</Text>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{
                            color: '#fff', fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 35, fontSize: 20,
                            marginRight: 35
                        }}>
                            Step 2: Once the quest has started, you would be able to see all the oncoming verfication requests from teams highlighted in green.</Text>
                        <View style={{ marginTop: 100 }} />
                        <FadeInView style={{
                            width: 250, height: 50, paddingTop: '1%', backgroundColor: 'powderblue',
                            borderRadius: '10', alignSelf: "center"
                        }}>
                            <Button title="Skip Tutorial" type="clear"
                                onPress={() => this.props.navigation.navigate('StartQuest')}
                                titleStyle={{ fontFamily: "Papyrus", color: '#562547' }} />
                        </FadeInView>
                    </ImageBackground>
                </View>
                <View style={styles.slide3}>
                <FixedHeader marginTop={60}  navigating={this.props.navigation} />
                    <ImageBackground source={require('../assets/theme1.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ marginTop: 30 }} />
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 40 }}>
                        How to monitor a quest</Text>
                        <View style={{ marginTop: 50 }} />
                        <Text style={{
                            color: '#fff', fontWeight: 'bold', fontFamily: "Papyrus", marginLeft: 35, fontSize: 20,
                            marginRight: 35
                        }}>
                            Step 3: You could select a highlighted team and accept or reject with a reason after vreifying the submission. You are all set !!.</Text>
                        <View style={{ marginTop: 170 }} />
                    <FadeInView style={{
                        width: 250, height: 50, paddingTop: '1%', backgroundColor: 'powderblue',
                        borderRadius: '10', alignSelf: "center"
                    }}>
                        <Button title="Let's Start" type="clear"
                            onPress={() => this.props.navigation.navigate('StartQuest')}
                            titleStyle={{ fontFamily: "Papyrus", color: '#562547' }} />
                    </FadeInView>
                    </ImageBackground>
                </View>
            </Swiper>
        );
    }
}