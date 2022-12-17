import React, { useState, useEffect } from 'react'
import gobalStyle from '../../styles/index';
import { Linking } from 'react-native';


import {
    SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableHighlight, TouchableOpacity, LayoutAnimation, Button
} from 'react-native'

import Icon, { Icons } from '../Icons'


const CONTENT = [
    {
        isExpanded: false,
        category_name: 'Who are we?',
        sub_category: [
            { id: 1, val: "The King’s Temple Church started with a gathering of 10 in 1986 under the leadership of Bishop Samuel Patta and his team. Today, the church is home to more than 10,000 people worshipping across 7 services over the weekend. \n\nThe King’s Temple church is a word and prayer-based church. \n\nThe Vision of the church is to build lives through the Word of Faith. To accomplish this, the Church runs its own Foundation of Faith course for every member. It has its own Bible College. Church also hosts Life Transformation Camps which teach about salvation and Holy Spirit." },
        ]
    },
    {
        isExpanded: false,
        category_name: 'Where we are located?',
        sub_category: [
            { id: 2, val: "We host our services every friday and sunday at Clock Tower Second Bazaar Maruthi Veedhi, Shivaji Nagar, Hyderabad, Telangana 500003. Can't wait to worship with you." }
        ]
    }
]

const ExpandableComponent = ({ item, onClick }) => {
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setLayoutHeight(null);
        } else {
            setLayoutHeight(0);
        }
    }, [item.isExpanded])

    return (
        <View>
            <TouchableOpacity
                style={styles.item}
                onPress={onClick}
            >

                <Text style={styles.itemText}>
                    {item.category_name}
                </Text>

            </TouchableOpacity>

            <View
                style={{
                    height: layoutHeight,
                    overflow: 'hidden'
                }}
            >
                {
                    item.sub_category.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            style={styles.content}
                        >

                            <Text style={styles.text}>

                               {item.val}

                            </Text>

                            <View style={styles.separator} />

                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

const OpenWhatsApp = () => {
    let url = "whatsapp://send?text=" +
          "" +
          "&phone=91" +
          "7993478539";
        Linking.openURL(url)
          .then(data => {
            console.log("WhatsApp Opened successfully " + data);  //<---Success
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");  //<---Error
          });
}

const Help = ({ navigation }) => {

    const [multiSelect, setMultiSelect] = useState(false);
    const [listDataSource, setListDataSource] = useState(CONTENT);

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiSelect) {
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            array.map((value, placeIndex) =>
                placeIndex === index
                    ? (array[placeIndex]['isExpanded']) = !array[placeIndex]['isExpanded']
                    : (array[placeIndex]['isExpanded']) = false
            )
        }
        setListDataSource(array)
    }

    return (
        <SafeAreaView style={gobalStyle.main}>
            <SafeAreaView style={styles.container}>
                <TouchableHighlight onPress={() => {
                    navigation.navigate("Profile");
                }}>
                    <SafeAreaView style={gobalStyle.nav}>
                        <SafeAreaView>

                            <Icon
                                style={{ paddingStart: 12 }}
                                type={Icons.MaterialIcons}
                                size={25}
                                name="arrow-back-ios"
                                color='white'
                            />
                        </SafeAreaView>
                        <Text style={gobalStyle.nav_header}>Help</Text>

                    </SafeAreaView>
                </TouchableHighlight>
                <SafeAreaView style={{ backgroundColor: '#1E1E1E', borderRadius: 20, flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%', marginTop: 10 }}>
                    {
                        listDataSource.map((item, key) => (
                            <ExpandableComponent
                                style={{ marginTop: 10 }}
                                key={item.category_name}
                                item={item}
                                onClick={() => {
                                    updateLayout(key)
                                }}
                            />
                        ))
                    }

                    <SafeAreaView style={{
                        padding: 12,
                        margin: 2.5
                    }}>

                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 20, color: 'white' }}>Need some help?</Text>

                        <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 16, color: 'white', marginVertical: 20 }}>If you are stuck somewhere, we have got you covered</Text>

                        <SafeAreaView style={{ marginVertical: 10 }}></SafeAreaView>
                        <TouchableOpacity style={styles.chatSupportBtn}
                            onPress={OpenWhatsApp}
                            underlayColor='#fff'
                        >
                            <Text style={styles.loginText}>Chat Support</Text>

                        </TouchableOpacity>

                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 16,
        marginBottom: 30,
        fontFamily: 'Montserrat-Medium'
    },
    titleText: {
        flex: 1,
        fontSize: 22,
        fontFamily: 'Montserrat-Medium',
        color: 'white'
    },
    item: {
        borderRadius: 20,
        backgroundColor: '#1E1E1E',
        padding: 20
    },
    itemText: {
        fontSize: 16,
        color: 'white',
        opacity: 0.7,
        fontFamily: 'Montserrat-Medium'
    },
    content: {
        paddingHorizontal: 10,
        // backgroundColor: '#0F0F0F',
    },
    text: {
        fontSize: 16,
        padding: 10,
        color: 'white',
        opacity: 0.7,
        fontFamily: 'Montserrat-Regular'
    },
    separator: {
        height: 0,
        backgroundColor: '#1E1E1E',
        width: '100%'
    },
    chatSupportBtn: {
        width: 200,
        marginStart: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#F79D16',
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: '#fff',

    },
    loginText: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        color: 'white'
    }
})

export default Help;