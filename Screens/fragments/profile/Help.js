import React, { useState, useEffect } from 'react'

import {
    SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableHighlight,TouchableOpacity, LayoutAnimation, Button
} from 'react-native'

import Icon,{Icons} from '../Icons' 


const CONTENT = [
    {
        isExpanded: false,
        category_name: 'Who are we?',
        sub_category: [
            { id: 1, val: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.' },
        ]
    },
    {
        isExpanded: false,
        category_name: 'Where we are located?',
        sub_category: [
            { id: 2, val: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.' }
        ]
    },
    {
        isExpanded: false,
        category_name: 'Why should you join us?',
        sub_category: [
            { id: 3, val: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.' },
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

                                {key}. {item.val}

                            </Text>

                            <View style={styles.separator} />

                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

const Help = ({navigation}) => {

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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0F0F0F' }}>
            <View style={styles.container}>
            <TouchableHighlight onPress={()=>{
                    navigation.navigate("Profile");
                }}>
                <View style={styles.header}>
                    <View>

                    <Icon
                    type={Icons.MaterialIcons}
                    size={25}
                    name="arrow-back-ios"
                    color= 'white'
                    />
                    </View>
                    <Text style={{   
                        color: 'white',
                        fontFamily : 'Montserrat', 
                        fontSize: 22, 
                        fontWeight: 'bold' 
                        }}>Help</Text>

                </View>
                    </TouchableHighlight>
                {
                    listDataSource.map((item, key) => (
                        <ExpandableComponent
                            key={item.category_name}
                            item={item}
                            onClick={() => {
                                updateLayout(key)
                            }}
                        />
                    ))
                }

                <View style={{
                    padding: 12,
                    margin: 2.5
                }}>

                    <Text style={{fontWeight: '600', fontSize: 20}}>Need some help?</Text>

                    <Text style={{fontWeight: '400', fontSize: 16, marginVertical: 20}}>If you are stuck somewhere, we have got you covered</Text>

                    <View style={{marginVertical: 10}}></View>
                    <TouchableOpacity style={styles.chatSupportBtn}
                        onPress={() => navigation.navigate('Profile')}
                        underlayColor='#fff'
                    >
                        <Text style={styles.loginText}>Chat Support</Text>

                    </TouchableOpacity>

                </View>
            </View>
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
        marginBottom:30,
    },
    titleText: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: '#0F0F0F',
        padding: 20
    },
    itemText: {
        fontSize: 16,
        fontWeight: '500'
    },
    content: {
        paddingHorizontal: 10,
        backgroundColor: '#0F0F0F',
    },
    text: {
        fontSize: 16,
        padding: 10
    },
    separator: {
        height: 0.5,
        backgroundColor: '#C8C8C8',
        width: '100%'
    },
    chatSupportBtn: {
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor:'#F79D16',
        borderRadius:4,
        borderWidth: 0.5,
        borderColor: '#fff',
        
    },
    loginText: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '500'
    }
})

export default Help;