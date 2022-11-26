import React, {useContext,useState} from 'react';
import {
    StyleSheet,
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
        'image':[img1,img2,img3],
        'description':'Be a part of our Online Family',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
    {
        'title':'Life Groups',
        'image':[img2,img2,img3],
        'description':'Be a part of our Online Family',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
    {
        'title':'Dominion Bible College',
        'image':[img3,img2,img3],
        'description':'Dominion Bible College',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
    {
        'title':'Teen x Youth',
        'image':[img4,img2,img3],
        'description':'Dominion Bible College',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
    {
        'title':'Girl Tribe',
        'image':[img5,img2,img3],
        'description':'Dominion Bible College',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
    {
        'title':'Impact Leadership Academy',
        'image':[img6,img2,img3],
        'description':'Dominion Bible College',
        'about':`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
        \nPraesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.`
    },
];

const Community = ({navigation}) => {

    const [index,setIndex]=useState(-1);

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
    BigBox : {
        flex: 1,
        backgroundColor:'#0F1013',
        marginTop:(height/5),
        borderRadius: 24,
        paddingVertical:10,
        flexDirection:'column',
        alignItems: 'center'
    },
    header : {
        color: 'white',
        marginTop: 30, 
        marginHorizontal: 16, 
        fontFamily : 'Montserrat', 
        fontSize: 22, 
        fontWeight: 'bold'
    },
    headerInfo : {
        color: 'white',
        marginTop: 10,
        marginHorizontal: 16, 
        fontFamily : 'Montserrat',
        fontSize: 20,
        fontWeight: 'bold'
    },
    container: {
        width,
        height:(height/3.5),
        resizeMode: 'cover',
        position: 'absolute',
        zIndex:-1,
    },
    scrollView :{
        width, 
        height:(height/3.5),
    },
    images: {
        width,
        height:(height/3.5),
        resizeMode: 'cover',
    },
    pagination : {
        flexDirection : 'row',
        position: 'absolute',
        bottom:30,
        alignSelf: 'center',
    },
    pagingText : {
        fontSize: (width / 30) ,
        backgroundColor: '#888',
        margin: 3,
        width:9,
        height:9,
        borderRadius:50,
    },
    pagingActive : {
        fontSize: (width / 30),
        width:20,
        height:9,
        backgroundColor: '#FFBE18', 
        margin: 3,
        borderRadius:50,
        transitionDuration:10
    },
    list: { 
        backgroundColor:'#0F0F0F',
        borderRadius: 24,
        marginTop: 35,
        marginBottom: 100,
        paddingTop: 25,
        paddingBottom:20,
        width,
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
    },
    cardBox: {
        position:'relative',
        height:width/1.7,
        width:((width/9)*8),
        borderRadius: 24,
        padding:20,
        displayflexDirection:'column',
        justifyContent: 'flex-end',
        marginBottom:25,
        marginLeft:15
    },
    cardImage:{
        position:'absolute',
        height:width/1.7,
        borderRadius: 24,
        zIndex:-1
    },
    cardTextBoxheader:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#FFFFFF'
    },
    cardBoxDescriptionText:{
        fontSize: 14,
        color:'#FFFFFF'
    },
    cardTextBoxDescription:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingRight: 15
    },
    DescriptionText:{
        fontSize: 15,
        color:'#FFFFFF',
        paddingHorizontal:13,
        marginTop:20
    },
    submit : {
        marginHorizontal: 16,
        marginTop: 10,
        marginBottom: 16,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'grey',
        borderRadius: 10,
        borderWidth: 1,
        width:width-20
    },
    textInfo: {color: 'white', alignSelf: 'center', fontSize: 14},
    imagesAbout:{marginTop:15,height:width/3}
});

export {styles};
export default Community;