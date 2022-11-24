import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native';
import {styles} from './index';
import Icon from '../fragments/Icons'
import moreInfo from '../assests/moreInfo.png'


const CommunityBox = ({navigation,image,title,description,setIndex,about}) => {

    return(
        <View style= {styles.main}>
         <Text style= {styles.header} onPress={()=>{setIndex(-1);}}> 
            <Text> 
                {'< '} 
            </Text>
            <Text>
                {title}
            </Text>
         </Text>
         <Image
            source = {image}
            style = {styles.images} 
          />
        <View style={styles.BigBox}>
            <Text style= {[styles.headerInfo,{alignSelf: 'flex-start'}]}> 
                {title}
            </Text>
            <Text style= {styles.DescriptionText}> 
                {about}
            </Text>
            <Text style= {[styles.DescriptionText,{alignSelf: 'flex-start'}]}> 
                More Info
            </Text>
            <Image
            source = {moreInfo}
            style = {styles.imagesAbout} 
            />
            <TouchableHighlight
                style={[styles.submit,{backgroundColor : '#FFBE18' }]}
                underlayColor='#fff'>
                <Text style={[styles.textInfo]}>JOIN US</Text>
            </TouchableHighlight>
        </View>
        </View>
    )
}


export default CommunityBox;