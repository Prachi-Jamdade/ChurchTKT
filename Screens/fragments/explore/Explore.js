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
import AntDesign from 'react-native-vector-icons/AntDesign'




const Explore = () => {

    const cardContent = [{
        text: "Do your bit by donating a part of your earnings.",
        icon: require("../../assests/cashPayment.png"),
        color: '#2BCD93'
    }
        ,
    {
        text: "Request church services by filling small forms.",
        icon: require("../../assests/mobileLogin.png"),
        color: '#6333EA'
    },
    {
        text: "Watch our sermons and get enlightned.",
        icon: require("../../assests/presidentsDay.png"),
        color: '#A11212'
    }
    ]



    return (
        <View style={{
            backgroundColor: '#0F0F0F',
            width: "100%",
            height: "100%"
        }}>
            <Text style={{
                color: 'white',
                fontSize: 18,
                padding: 18
            }}>
                Explore
            </Text>

            <ScrollView style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                padding: 15
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                    borderColor: 'white',
                    color: "white",
                    borderWidth: 1.5,
                    borderRadius: 20,
                    marginBottom: 12,
                    minHeight: 110
                }}>
                    <ImageBackground source={require('../../assests/SamuelPatta.png')} style={{marginLeft: 20, height: 150, width: 280, marginTop: 10}}>

                        <View style={{
                            display: "flex",
                            alignItems: 'flex-start'
                        }}>
                            <Text style={{marginTop: 50, marginRight: 80, fontSize: 18}}>Samuel Patta Ministries</Text>
                        </View>
                    </ImageBackground>

                </View>
                {
                    cardContent.map((content, index) => {
                        return (
                            <View style={{
                                padding: 20,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                width: "100%",
                                borderColor: "white",
                                color: "white",
                                backgroundColor: content.color,
                                borderWidth: 1.5,
                                borderRadius: 20,
                                marginTop: 12,
                                marginBottom: 12,
                                minHeight: 130
                            }} key={index}>



                                <View style={{
                                    width: "70%",
                                    height: "100%",
                                    display: "flex",
                                    gap: 10
                                }}>
                                    <Text style={{ color: 'white', fontSize: 16 }}>
                                        {content.text}
                                    </Text>

                                    <AntDesign name='rightcircle' size={30} style={{ paddingTop: 5, marginTop: 15 }} />

                                </View>
                                <View style={{
                                    // width: "50%"
                                }}>

                                    <Image
                                        source={content.icon}
                                        style={{ width: 80, height: 80, padding: 5, marginTop: 30, marginRight: 15, alignItems: 'center', justifyContent: 'center' }}
                                    />

                                </View>

                            </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    )

}

export default Explore;