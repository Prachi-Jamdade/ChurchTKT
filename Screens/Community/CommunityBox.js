import React,{useState} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import {styles} from './index';
import Icon,{Icons} from '../fragments/Icons';
import moreInfo from '../assests/moreInfo.png';


const CommunityBox = ({navigation,image,title,description,setIndex,about}) => {

    const [active,setActive]=useState(0)
  
    const change = ({nativeEvent}) => {
        const slide = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
        if (slide !== active ){
           setActive( slide);
        }
    }

    return(
        <View style= {styles.main}>
         <Text style= {
            [styles.header,{
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'center'
            }]
        }   
            onPress={()=>{setIndex(-1);}}
            
            > 
            <View>
            <Icon
            type={Icons.MaterialIcons}
            size={25}
            name="arrow-back-ios"
            color= 'white'
            />
            </View>
            <View>
            <Text style={{fontSize: 22, fontWeight: 'bold',color: 'white'}}>
                {title}
            </Text>
            </View>
         </Text>
    
    <View style = {styles.container}>
        <ScrollView
            pagingEnabled
            horizontal
            onScroll={change}
            showsHorizontalScrollIndicator = {false}
            style = {styles.scrollView}
        >
            {
            image.map((image, index) => (
                <Image
                key={index}
                source = {image}
                style = {styles.images} />
            ))
            }
        </ScrollView>

        <View style = {styles.pagination}>
            {
            image.map((i,k) => (
            <Text key={k} style={ k === active ? styles.pagingActive :  styles.pagingText}></Text>
            ))
            }
        </View>
        </View>

     
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