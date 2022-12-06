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




const Explore = ({navigation}) => {

    const cardContent = [{
        text: "Do your bit by donating a part of your earnings.",
        icon: require("../../assests/cashPayment.png"),
        color: '#2BCD93',
        navigate:'OffErings'
    }
        ,
    {
        text: "Request church services by filling small forms.",
        icon: require("../../assests/mobileLogin.png"),
        color: '#6333EA',
        navigate:'RequestForm'
    },
    {
        text: "Watch our sermons and get enlightned.",
        icon: require("../../assests/presidentsDay.png"),
        color: '#A11212',
        navigate:'Spm'
    }
    ]



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
                width: "100%",
                height: "100%",
                display: "flex",
                gap: 5,
                marginBottom: 60,
                padding: 15,
            }}>

            <Text style={{
                color: 'white',
                padding: 18, 
                fontSize: 22, 
                fontWeight: 'bold',
                paddingLeft:5,
                marginBottom:25,
                
            }}>
                Explore
            </Text>
            <TouchableHighlight onPress={()=>navigation.navigate("Events")}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                    borderColor: '#3b3b3b',
                    color: "white",
                    borderWidth: 1.2,
                    borderRadius: 20,
                    marginBottom: 12,
                    minHeight: 110,
                }}>
                    <ImageBackground source={require('../../assests/SamuelPatta.png')} style={{marginLeft: 20, height: 150, width: 280, marginTop: 10}}>

                        <View style={{
                            display: "flex",
                            alignItems: 'flex-start'
                        }}>
                            <Text style={{marginTop: 50, marginRight: 80, fontSize: 18, color: 'white'}}>Samuel Patta   Ministries</Text>
                        </View>
                    </ImageBackground>

                </View>
            </TouchableHighlight>
                {
                    cardContent.map((content, index) => {
                        return (
                            <TouchableHighlight onPress={()=>navigation.navigate(content.navigate)}>
                                
                            <View style={{
                                padding: 20,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                width: "100%",
                                borderColor: "white",
                                color: "white",
                                backgroundColor: content.color,
                                borderWidth: 0,
                                borderRadius: 20,
                                marginTop: 6,
                                marginBottom: 26,
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

                                    <AntDesign name='rightcircle' size={30} style={{ paddingTop: 5, marginTop: 20 }} color="white" />

                                </View>
                                <View style={{
                                    // width: "50%"
                                }}>

                                    <Image
                                        source={content.icon}
                                        style={{ width: 70, height: 70, padding: 5, marginTop: 30, marginRight: 15, alignItems: 'center', justifyContent: 'center' }}
                                    />

                                </View>

                            </View>

                            </TouchableHighlight>
                        )
                    })
                }

            </ScrollView>
        // </View>
    )

}

export default Explore;