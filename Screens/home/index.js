import React,{useState,useEffect,useContext} from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight,
    StyleSheet,
    Switch,
    Dimensions,
} from 'react-native';
import Icon,{Icons} from '../fragments/Icons';
import homeHand from '../assests/icons/homeHand.png';
import homeImage from '../assests/homeImage.png';
import { AppContext } from '../../context';
import gobalStyle from '../styles/index';
import YoutubePlayer from 'react-native-youtube-iframe';
// const TopEvents=[
//     {
//         image:homeImage,
//         date:'29th Sept, 2023',
//         title:'WORSHIP NIGHT'
//     },
//     {
//         image:homeImage,
//         date:'29th Sept, 2023',
//         title:'WORSHIP NIGHT'
//     },
//     {
//         image:homeImage,
//         date:'29th Sept, 2023',
//         title:'WORSHIP NIGHT'
//     },
// ]

const Home = ({navigation}) => {

    const [active,setActive]=useState(0);
    const {homeEvents,getHomeEvent,videoLink}=useContext(AppContext);

    useEffect(() => {
        if(homeEvents.length===0){
            getHomeEvent();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    const change = ({nativeEvent}) => {
        const slide = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
        if (slide !== active ){
           setActive(slide);
        }
    }

    return (
            <View style= {gobalStyle.main}>
                <View style = {gobalStyle.header}>
                    <View>
                    <Image
                    source = {homeHand}
                    style = {styles.image}/>
                    </View>
                    <View>
                    <Text style= {styles.headerLight}>Hello,</Text>
                    </View>
                    <View>
                    <Text style= {styles.headerDark}>Sagar!</Text>
                    </View>
                </View>
                <View style= {[styles.box]}>
              
                <View style = {styles.container}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={change}
                    showsHorizontalScrollIndicator = {false}
                >
                    {
                    videoLink.map((data, index) => (
                        <View key={index} style={styles.homeTopCard}>
                            <YoutubePlayer
                                height={300}
                                play={true}
                                videoId={data.videoId}
                                style = {styles.images}
                            />
                    
                        </View>
                    ))
                    }
                </ScrollView>

                </View>

                {/* <View style = {styles.pagination}>
                    {
                    videoLink.map((i,k) => (
                    <Text key={k} style={ k === active ? styles.pagingActive :  styles.pagingText} />
                    ))
                    }
                </View> */}

                <ScrollView 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                >
                <View style={styles.list}>
                    <View>
                        <Text style={[styles.headerDark,styles.fullW,{marginBottom:20}]}>
                        Upcoming Events
                        </Text>
                    </View>
                    {
                        homeEvents.map((value,index)=>{
                            return <HomeCard key={value.eventId} {...value}/>;
                        })
                    }
                </View>
                </ScrollView>
                </View>
            </View>
        )
}


const HomeCard = ({navigation,title,description,location,startDate,startTime}) => {

    let _description=description.slice(description.indexOf("<p>")+3,description.lastIndexOf("</p>"))
    let date=new Date(startDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    let _startDate=`${date.getMonth()}th ${monthNames[date.getMonth()]}`

    const [isEnabled,setIsEnabled]=useState(false);

    return(
        <View style={styles.cardBox}>
            <View style={{padding:12,paddingVertical:15}}>

            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{_description}</Text>
            <View style={[styles.rowToggle,{marginHorizontal:5}]}>
            <Switch
            trackColor={{ false: "#2e2d2b", true: "#FFBE18" }}
            thumbColor={isEnabled ? "white" : "#FFBE18"}
            ios_backgroundColor="#FFBE18"
            value={isEnabled}
            onValueChange={()=>{setIsEnabled(!isEnabled)}}
            style={{ height:20,color:'white' }}
            />
            <Text style={styles.cardText}>Set Reminder</Text>
            </View>
            </View>
            <View style={[styles.row,styles.cardIcons]}>
                <View style={styles.row}>
                    <Icon 
                    type={Icons.Ionicons}
                    name="location-outline"
                    size={20}
                    color='white'
                    />
                    <Text style={styles.cardDescriptionIcon}>{location}</Text>
                </View>
            </View>
            <View style={[styles.row,styles.cardIcons]}>
                <View style={styles.row}>
                    <Icon 
                    type={Icons.MaterialIcons}
                    name="date-range"
                    size={20}
                    color='white'
                    />
                    <Text style={styles.cardDescriptionIcon}>{_startDate}</Text>
                </View>
                <View style={styles.row}>
                    <Icon 
                    type={Icons.Ionicons}
                    name="time-outline"
                    size={20}
                    color="white"
                    />
                    <Text style={styles.cardDescriptionIcon}>{startTime}</Text>
                </View>
            </View>
        </View>
    )

}



const {width} = Dimensions.get('window');
const boxWidth=width*0.9;
const height = width * 100 / 40;

const styles = StyleSheet.create({
    main : {flex: 1, backgroundColor:'#0F1013'},
    box : {
        width,
        flexDirection:'column',
        alignItems: 'center',
        flex: 1,
    },
    cardText:{
        color:'white',
        marginLeft:5,
        fontFamily: 'Montserrat-Medium'
    },
    headerLight : {
        color: 'white',
        fontSize: 22, 
        opacity:0.7,
        paddingLeft:10,
        fontFamily: 'Montserrat-Medium'
    },
    headerDark : {
        color: 'white',
        fontSize: 22, 
        fontFamily: 'Montserrat-SemiBold',
        paddingLeft:5
    },
    headerInfo : {
        color: 'white',
        marginTop: 10,
        marginHorizontal: 16, 
        fontFamily : 'Montserrat',
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardBox:
    {
        width:boxWidth,
        borderRadius:14,
        color:'white',
        marginBottom:20,
        borderWidth:1,
        borderColor:'#3b3b3b',
    },
    cardTitle:{
        fontSize:16,
        color:'white',
        marginBottom:5,
        fontFamily: 'Montserrat-Medium'
    },
    cardDescription:{
        marginBottom:5,
        color:'white',
        fontFamily: 'Montserrat-Medium'
    },
    cardDescriptionIcon:{
        marginLeft:5,
        color:'white',
        fontFamily: 'Montserrat-Medium'
    },
    fullW:{
        width:boxWidth,
    },
    row:{
        flexDirection:'row',
        alignItems: 'center',
        padding: 2,
        marginEnd: 15
    },
    rowToggle:{
        flexDirection:'row',
        alignItems: 'center',
        width:boxWidth,
        marginVertical:5,
    },
    cardIcons:{
        justifyContent:'space-between',
        backgroundColor:'#0F0D0B',
        borderBottomLeftRadius:14,
        borderBottomRightRadius:14,
        paddingVertical:8,
        paddingHorizontal:10,
    },
    container: {
        width :boxWidth,
        height:(height/5),
        zIndex:-1,
        marginBottom:20,
        borderRadius:14,
    },
    homeTopCard:{
        width:boxWidth,
        position: 'relative',
        borderRadius: 20,
        marginVertical:10
    },
    homeTopCardText:{
        position:'absolute',
        bottom:10,
        alignItems: 'center',
        flexDirection:'column',
        justifyContent: 'center',
        width :boxWidth,
    },
    homeTopCardTextDate:{
        fontSize:12,
        fontWeight:'bold',
        color:'white',
    },
    homeTopCardTextTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    },
    images: {
        width :boxWidth,
        height:(height/5),
        borderRadius:14,
        position:'absolute',
        zIndex:-10,
    },
    pagination : {
        flexDirection : 'row',
        alignSelf: 'center',
        marginBottom:10,
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
        marginTop: 5,
        marginBottom: 60,
        paddingBottom:20,
        width,
        flex:1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
    },

    textInfo: {color: 'white', alignSelf: 'center', fontSize: 14},
    imagesAbout:{marginTop:15,height:width/3}
});

export {styles};
export default Home;