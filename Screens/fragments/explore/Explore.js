/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    ImageBackground,
    Image,
    SafeAreaView,TouchableOpacity

} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import gobalStyle from '../../styles/index';




const Explore = ({ navigation }) => {

    const cardContent = [{
        text: 'Tithes and offerings',
        icon: require('../../assests/cashPayment.png'),
        color: '#2BCD93',
        navigate: 'OffErings',
        top: -20
    }
        ,
    {
        text: 'Request church services by filling a forms.',
        icon: require('../../assests/mobileLogin.png'),
        color: '#6333EA',
        navigate: 'RequestForm',
        top: -32
    },
    {
        text: 'Watch our sermons',
        icon: require('../../assests/presidentsDay.png'),
        color: '#A11212',
        navigate: 'Events',
        top: -5
    },
    ];



    return (
        // <View style={{
        //     backgroundColor: '#0F0F0F',
        //     width: "100%",
        //     height: "100%"
        // }}>
        // <Text style={{
        //     color: 'white',
        //     fontSize: 18,
        //     padding: 18
        // }}>
        //     Explore
        // </Text>

        <SafeAreaView style={{
            backgroundColor: '#0F0F0F',
            width: '100%',
            height: '100%',
            gap: 5,
            flex: 1
        }}>
            <Text style={[gobalStyle.header, { marginBottom: RFValue(15) }]}>
                Explore
            </Text>

            <ScrollView
                contentContainerStyle={{flexGrow: 1}}
                vertical={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{
                    backgroundColor: '#1E1E1E',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    gap: 5,
                    marginBottom: RFValue(60),
                    borderRadius: RFValue(20),
                    padding: RFValue(20),
                    flex: 1
                }}
            >

                <TouchableHighlight onPress={() => navigation.navigate('Spm')}>
                    <SafeAreaView style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: '#3b3b3b',
                        color: 'white',
                        borderWidth: 1.2,
                        borderRadius: 20,
                        marginBottom: RFValue(12),
                        marginTop: RFValue(1),
                        minHeight: RFValue(140),
                        paddingLeft: RFValue(20),
                        overflow: 'hidden',
                    }}>

                        <Text style={{ marginStart: RFValue(10), fontSize: RFValue(12), color: 'white', fontFamily: 'Montserrat-Medium' }}>
                            Samuel Patta Ministries
                        </Text>
                        <Image source={require('../../assests/SamuelPatta.png')}
                            style={{
                                height: RFValue(110),
                                borderBottomRightRadius: 8,
                                marginTop: RFValue(30)
                            }}>
                        </Image>

                    </SafeAreaView>
                </TouchableHighlight>

                <SafeAreaView style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={require('../../assests/golden_separator.png')}
                        style={{ height: RFValue(3), marginBottom: RFValue(10), }} />
                </SafeAreaView>

                {
                    cardContent.map((content, index) => {
                        return (
                            <TouchableOpacity activeOpacity={0.98} onPress={() => navigation.navigate(content.navigate)}>

                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    borderColor: 'white',
                                    color: 'white',
                                    backgroundColor: content.color,
                                    borderWidth: 0,
                                    borderRadius: 20,
                                    marginTop: RFValue(5),
                                    marginBottom: RFValue(8),
                                    minHeight: RFValue(100),
                                    position: 'relative',
                                    overflow: 'hidden'
                                }} key={index}>



                                    <View style={{
                                        width: '70%',
                                        height: '100%',
                                        display: 'flex',
                                        gap: 5,
                                        padding: RFValue(15)
                                    }}>
                                        <Text style={{ color: 'white', fontSize: RFValue(14), fontFamily: 'Montserrat-Medium' }}>
                                            {content.text}
                                        </Text>

                                        <Ionicons name="arrow-forward-circle" size={35} style={{ paddingTop: RFValue(5), marginTop: RFValue(15) }} color="white" />

                                    </View>
                                    <View style={{
                                        // width: "50%"
                                    }}>

                                        <Image
                                            source={content.icon}
                                            style={{
                                                padding: RFValue(5),
                                                marginTop: RFValue(30),
                                                marginRight: RFValue(15),
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'absolute',
                                                bottom: content.top,
                                                right: 10
                                            }}
                                        />

                                    </View>

                                </View>

                            </TouchableOpacity>
                        );
                    })
                }

            </ScrollView>
        </SafeAreaView>

        // </View>
    );

};

export default Explore;
