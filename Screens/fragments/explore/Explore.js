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

} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import gobalStyle from '../../styles/index';




const Explore = ({navigation}) => {

    const cardContent = [{
        text: 'Do your bit by donating a part of your earnings.',
        icon: require('../../assests/cashPayment.png'),
        color: '#2BCD93',
        navigate:'OffErings',
        top:-20
    }
        ,
    {
        text: 'Request church services by filling small forms.',
        icon: require('../../assests/mobileLogin.png'),
        color: '#6333EA',
        navigate:'RequestForm',
        top:-32
    },
    {
        text: 'Watch our sermons and get enlightned.',
        icon: require('../../assests/presidentsDay.png'),
        color: '#A11212',
        navigate:'Spm',
        top:-5
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

            <ScrollView
            vertical ={true}
            showsVerticalScrollIndicator={false}
             showsHorizontalScrollIndicator={false}
            style={{
                backgroundColor: '#0F0F0F',
                width: '100%',
                height: '100%',
                display: 'flex',
                gap: 5,
                marginBottom: 60,
                paddingHorizontal: 15,
            }}>

            <Text style={gobalStyle.header}>
                Explore
            </Text>
            <TouchableHighlight onPress={()=>navigation.navigate('Events')}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: '#3b3b3b',
                    color: 'white',
                    borderWidth: 1.2,
                    borderRadius: 20,
                    marginBottom: 35,
                    marginTop: 10,
                    minHeight: 140,
                    paddingLeft:20,
                    overflow: 'hidden',
                }}>

                    <Text style={{fontSize: 18, color: 'white',}}>
                        Samuel Patta Ministries
                    </Text>
                    <Image source={require('../../assests/SamuelPatta.png')} 
                    style={{
                        height: 110,
                        borderBottomRightRadius: 8,
                        marginTop:30
                    }}>
                    </Image>

                </View>
            </TouchableHighlight>
                {
                    cardContent.map((content, index) => {
                        return (
                            <TouchableHighlight onPress={()=>navigation.navigate(content.navigate)}>

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
                                marginTop: 6,
                                marginBottom: 20,
                                minHeight: 130,
                                position: 'relative',
                                overflow: 'hidden'
                            }} key={index}>



                                <View style={{
                                    width: '70%',
                                    height: '100%',
                                    display: 'flex',
                                    gap: 10,
                                    padding:20
                                }}>
                                    <Text style={{ color: 'white', fontSize: 16 }}>
                                        {content.text}
                                    </Text>

                                    <AntDesign name="rightcircle" size={25} style={{ paddingTop: 5, marginTop: 20 }} color="white" />

                                </View>
                                <View style={{
                                    // width: "50%"
                                }}>

                                    <Image
                                        source={content.icon}
                                        style={{ 
                                            padding: 5,
                                            marginTop: 30,
                                            marginRight: 15,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'absolute',
                                            bottom:content.top,
                                            right:10
                                        }}
                                    />

                                </View>

                            </View>

                            </TouchableHighlight>
                        );
                    })
                }

            </ScrollView>
        // </View>
    );

};

export default Explore;
