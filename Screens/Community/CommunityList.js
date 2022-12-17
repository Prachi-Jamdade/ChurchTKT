import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight,
} from 'react-native';
import {styles} from '.';
import Icon,{Icons} from '../fragments/Icons'
import gobalStyle from '../styles/index';

import ArrowImage from '../assests/icons/communityCardIcon.png';


const CommunityList = ({navigation,data,setIndex}) => {

    return (
            <View style= {gobalStyle.main}>
                <Text style= {gobalStyle.header}>Community</Text>
                <View style={styles.box}>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.list}>
                    {
                        data.map((value,index)=>{
                            return <CommunityCard key={index} index={index} setIndex={setIndex} navigation={navigation} {...value}/>;
                        })
                    }
                    </View>
                </ScrollView>
            </View>
            </View>
        )
}


const CommunityCard = ({navigation,image,title,description,about,index,setIndex}) => {

    return(

        <TouchableHighlight onPress={()=>setIndex(index)}>
            <View style={styles.cardBox} 
                >
                <Image
                    source = {image[0]}
                    style = {styles.cardImage}/>
                <View style={styles.cardTextBox}>
                    {/* <Text style= {styles.cardTextBoxheader}>{title}</Text> */}
                    <View style={styles.cardTextBoxDescription}>
                    {/* <Text  style={styles.cardBoxDescriptionText}>{description}</Text> */}
                         <Icon
                            type={Icons.AntDesign}
                            size={24}
                            name="rightcircleo"
                            color= 'white'
                         />
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )

}


export default CommunityList;