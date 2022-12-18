import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight,
    SafeAreaView
} from 'react-native';
import {styles} from '.';
import Icon,{Icons} from '../fragments/Icons'
import gobalStyle from '../styles/index';

import ArrowImage from '../assests/icons/communityCardIcon.png';


const CommunityList = ({navigation,data,setIndex}) => {

    return (
            <SafeAreaView style= {gobalStyle.main}>
                <Text style= {gobalStyle.header}>Community</Text>
                <SafeAreaView style={styles.box}>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                >
                    <SafeAreaView style={styles.list}>
                    {
                        data.map((value,index)=>{
                            return <CommunityCard key={index} index={index} setIndex={setIndex} navigation={navigation} {...value}/>;
                        })
                    }
                    </SafeAreaView>
                </ScrollView>
            </SafeAreaView>
            </SafeAreaView>
        )
}


const CommunityCard = ({navigation,image,title,description,about,index,setIndex}) => {

    return(

        <TouchableHighlight onPress={()=>setIndex(index)}>
            <SafeAreaView style={styles.cardBox} 
                >
                <Image
                    source = {image[0]}
                    style = {styles.cardImage}/>
                <SafeAreaView style={styles.cardTextBox}>
                    {/* <Text style= {styles.cardTextBoxheader}>{title}</Text> */}
                    <SafeAreaView style={styles.cardTextBoxDescription}>
                    {/* <Text  style={styles.cardBoxDescriptionText}>{description}</Text> */}
                         <Icon
                            type={Icons.AntDesign}
                            size={24}
                            name="rightcircleo"
                            color= 'white'
                         />
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        </TouchableHighlight>
    )

}


export default CommunityList;