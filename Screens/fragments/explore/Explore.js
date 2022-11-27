import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Image,

} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'




const Explore = () => {

    const cardContent = [{
        text: "Do your bit by donating a part of your earnings.",
        icon: require("../assests/icons/cashPayment.png")
    }
        ,
    {
        text: "Request church services by filling small forms.",
        icon: require("../assests/icons/mobileLogin.png")
    },
    {
        text: "Watch our sermons and get enlightned.",
        icon: require("../assests/icons/presidentsDay.png")
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

                {
                    cardContent.map((content, index) => {
                        return (
                            <View style={{
                                padding: 5,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                width: "100%",
                                borderColor: "white",
                                color: "white",
                                borderWidth: 5,
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
                                    <Text>
                                        {content.text}
                                    </Text>

                                    <AntDesign name='rightcircle' size={20} />

                                </View>
                                <View style={{
                                    // width: "50%"
                                }}>

                                    <Image
                                        source={content.icon}
                                        style={{ width: 40, height: 40, padding: 5 }}
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