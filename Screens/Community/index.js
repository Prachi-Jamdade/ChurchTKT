import React, {useContext,useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';

import img1 from '../assests/community1.png';
import img2 from '../assests/community2.png';
import img3 from '../assests/community3.png';
import img4 from '../assests/community4.png';
import img5 from '../assests/community5.png';
import img6 from '../assests/community6.png';
import CommunityBox from './CommunityBox'
import CommunityList from './CommunityList'
import ArrowImage from '../assests/icons/communityCardIcon.png'


let logged = true;
let data=[
    {
        'title':'E Family',
        'image':img1,
        'description':'Be a part of our Online Family',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
    {
        'title':'Life Groups',
        'image':img2,
        'description':'Be a part of our Online Family',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
    {
        'title':'Dominion Bible College',
        'image':img3,
        'description':'Dominion Bible College',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
    {
        'title':'Teen x Youth',
        'image':img4,
        'description':'Dominion Bible College',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
    {
        'title':'Girl Tribe',
        'image':img5,
        'description':'Dominion Bible College',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
    {
        'title':'Impact Leadership Academy',
        'image':img6,
        'description':'Dominion Bible College',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
];

const Community = ({navigation}) => {

    const [index,setIndex]=useState(0);

    return (
        <>
        {
            !logged 
            ? 
            navigation.navigate('Onboarding') 
            : (
                <>
                    {
                        index==-1
                        ?   
                        <CommunityList setIndex={setIndex} navigation={navigation} data={data}/>
                        :
                        <CommunityBox navigation={navigation} {...data[index]} setIndex={setIndex}></CommunityBox>
                    }
                </>
            )
        }
        </>
    )
}





const {width} = Dimensions.get('window');
const height = width * 100 / 40;

const styles = StyleSheet.create({
    main : {flex: 1, backgroundColor:'#0F1013'},
    BigBox : {flex: 1, backgroundColor:'#0F1013',marginTop:(height/5),borderRadius: 24,paddingVertical:10,flexDirection:'column',alignItems: 'center'},
    header : {color: 'white',marginTop: 30, marginHorizontal: 16, fontFamily : 'Montserrat', fontSize: 22, fontWeight: 'bold'},
    headerInfo : {color: 'white',marginTop: 10, marginHorizontal: 16, fontFamily : 'Montserrat', fontSize: 20, fontWeight: 'bold'},
    images: {width,height:(height/3),resizeMode: 'cover',position: 'absolute',zIndex:-1},
    list: { backgroundColor:'#0F0F0F',borderRadius: 24,marginTop: 35,marginBottom: 35,paddingTop: 25,paddingBottom:20,width,display:'flex',flexDirection:'column',justifyContent: 'center',alignItems:'center'},
    cardBox: {position:'relative',height:width/1.7,width:((width/9)*8),borderRadius: 24,padding:20,displayflexDirection:'column',justifyContent: 'flex-end',marginBottom:25},
    cardImage:{position:'absolute',height:width/1.7,borderRadius: 24,zIndex:-1},
    cardTextBoxheader:{fontSize: 16,fontWeight: 'bold',color:'#FFFFFF'},
    cardBoxDescriptionText:{fontSize: 14,color:'#FFFFFF'},
    cardTextBoxDescription:{display:'flex',flexDirection:'row',justifyContent: 'space-between',paddingRight: 15},
    DescriptionText:{fontSize: 15,color:'#FFFFFF',paddingHorizontal:13,marginTop:20},
    submit : {
        position: 'absolute',
        bottom:0,
        left: 0,
        right:0,
        marginHorizontal: 16,
        marginTop: 10,
        marginBottom: 16,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'grey',
        borderRadius: 10,
        borderWidth: 1,
    },
    textInfo: {color: 'white', alignSelf: 'center', fontSize: 14},
    imagesAbout:{marginTop:15}
});

export {styles};
export default Community;