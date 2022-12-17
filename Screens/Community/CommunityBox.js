import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { styles } from './index';
import Icon, { Icons } from '../fragments/Icons';
import moreInfo from '../assests/moreInfo.png';
import gobalStyle from '../styles/index';

const CommunityBox = ({ navigation, image, title, description, setIndex, about }) => {

    const [active, setActive] = useState(0)

    const change = ({ nativeEvent }) => {
        const slide = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
        if (slide !== active) {
            setActive(slide);
        }
    }

    return (
        <View style={gobalStyle.main}>
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
                    <View>
                        <Icon
                            type={Icons.MaterialIcons}
                            size={24}
                            name="arrow-back-ios"
                            color='white'
                        />
                    </View>
                    <View>
                        <Text style={gobalStyle.nav_header}>
                            {title}
                        </Text>
                    </View>
                </Text>
            </TouchableOpacity>

            <View style={styles.container}>
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
            </View>

            <View style={styles.BigBox}>

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
                            style={[styles.submit, { backgroundColor: '#FFBE18', marginTop: 20, marginStart: 10, marginEnd: 10 }]}
                            underlayColor='#fff'>
                            <Text style={[gobalStyle.submitText]}>JOIN US</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}


export default CommunityBox;