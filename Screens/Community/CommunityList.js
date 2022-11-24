import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native';
import {styles} from '.';

import ArrowImage from '../assests/icons/communityCardIcon.png';


const CommunityList = ({navigation,data,setIndex}) => {

    return (
            <View style= {styles.main}>
                <Text style= {styles.header}>Community</Text>
                <View
                    style={[
                        styles.container,
                        { ['alignItems']: 'center' },
                    ]}
                >
                <ScrollView>
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
        <TouchableHighlight onpress={() => setIndex(index)}>

        <View style={styles.cardBox} 
            >
            <Image
                source = {image}
                style = {styles.cardImage}/>
            <View style={styles.cardTextBox}>
                <Text style= {styles.cardTextBoxheader}>{title}</Text>
                <View style={styles.cardTextBoxDescription}>
                <Text  style={styles.cardBoxDescriptionText}>{description}</Text>
                <Image
                onPress={()=>setIndex(index)}
                source = {ArrowImage}
                style = {styles.cardArrowImage}/>
                </View>
            </View>
        </View>
      </TouchableHighlight>
    )

}


export default CommunityList;