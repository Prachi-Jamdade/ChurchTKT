import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    BackHandler
} from 'react-native';
import { styles } from './index';
import Icon, { Icons } from '../fragments/Icons';
import moreInfo from '../assests/moreInfo.png';
import gobalStyle from '../styles/index';
import { RFValue } from 'react-native-responsive-fontsize';
import { useEffect } from 'react';
import { useBackHandler } from '@react-native-community/hooks'

const CommunityBox = ({ navigation, image, title, description, setIndex, about, SendWhatsApp }) => {

    const [active, setActive] = useState(0)

    const change = ({ nativeEvent }) => {
        const slide = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
        if (slide !== active) {
            setActive(slide);
        }
    }

    // const backBtnHandler = () => {
    //     navigation.navigate('Community'); 
    // }

    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener("hardwareBackPress", backBtnHandler);

    //     return () => {
    //       backHandler.removeEventListener("hardwareBackPress", backBtnHandler);
    //     };
    //   }, [backBtnHandler]);

    return (
        <SafeAreaView style={gobalStyle.main}>
            <TouchableOpacity
                onPress={() => { setIndex(-1); }}
            >

                <Text style={
                    [gobalStyle.header, {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }]
                }

                >
                    <SafeAreaView>
                        <Icon
                            type={Icons.MaterialIcons}
                            size={24}
                            name="arrow-back-ios"
                            color='white'
                            style={{ marginStart: RFValue(3), marginBottom: RFValue(4) }}
                        />
                    </SafeAreaView>
                    <SafeAreaView>
                        <Text style={gobalStyle.nav_header}>
                            {title}
                        </Text>
                    </SafeAreaView>
                </Text>
            </TouchableOpacity>

            <SafeAreaView style={styles.container}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={change}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollView}
                >
                    {
                        image.map((image, index) => (
                            <Image
                                key={index}
                                source={image}
                                style={styles.images} />
                        ))
                    }
                </ScrollView>

                <View style={styles.pagination}>
                    {
                        image.map((i, k) => (
                            <Text key={k} style={k === active ? styles.pagingActive : styles.pagingText}></Text>
                        ))
                    }
                </View>
            </SafeAreaView>

            <SafeAreaView style={styles.BigBox}>

                <Text style={[styles.headerInfo, { alignSelf: 'flex-start' }]}>
                    {title}
                </Text>
                <ScrollView>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={styles.DescriptionText}>
                            {about}
                        </Text>
                        {/* <Text style= {[styles.DescriptionText,{alignSelf: 'flex-start'}]}> 
                    More Info
                </Text> */}
                        {/* <Image
                    source = {moreInfo}
                    style = {styles.imagesAbout} 
                    /> */}
                        <TouchableHighlight
                            style={[styles.submit, { backgroundColor: '#FFBE18', marginTop: RFValue(20), marginStart: RFValue(10), marginEnd: RFValue(10) }]}
                            underlayColor='#fff'
                            onPress={SendWhatsApp}>
                            <Text style={[gobalStyle.submitText]}>JOIN US</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaView>
    )
}


export default CommunityBox;