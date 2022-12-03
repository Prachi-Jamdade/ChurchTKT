import React,{useState,useEffect} from 'react';
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
import {getAllHomeEvent} from '../api/home'


const data=[
    {
        day:'Good Friday',
        description:'We invite everyone to join us at 6:00pm to celebrate Good Friday.',
        location:'Main Complex',
        date:'11th Sept',
        time:'06:00pm',
    },
    {
        day:'Good Friday',
        description:'We invite everyone to join us at 6:00pm to celebrate Good Friday.',
        location:'Main Complex',
        date:'11th Sept',
        time:'06:00pm',
    },
    {
        day:'Good Friday',
        description:'We invite everyone to join us at 6:00pm to celebrate Good Friday.',
        location:'Main Complex',
        date:'11th Sept',
        time:'06:00pm',
    },
];
const TopEvents=[
    {
        image:homeImage,
        date:'29th Sept, 2023',
        title:'WORSHIP NIGHT'
    },
    {
        image:homeImage,
        date:'29th Sept, 2023',
        title:'WORSHIP NIGHT'
    },
    {
        image:homeImage,
        date:'29th Sept, 2023',
        title:'WORSHIP NIGHT'
    },
]

const Home = ({navigation}) => {

    const [active,setActive]=useState(0)

    
    const change = ({nativeEvent}) => {
        const slide = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
        if (slide !== active ){
           setActive(slide);
        }
    }

    return (
            <View style= {styles.main}>
                <View style = {styles.header}>
                    <View>
                    <Image
                    source = {homeHand}
                    style = {styles.image}/>
                    </View>
                    <View>
                    <Text style= {styles.headerLight}>Hello ,</Text>
                    </View>
                    <View>
                    <Text style= {styles.headerDark}>Sagar !</Text>
                    </View>
                </View>
                <View style= {styles.box}>
              
                <View style = {styles.container}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={change}
                    showsHorizontalScrollIndicator = {false}
                >
                    {
                    TopEvents.map((data, index) => (
                        <View key={index} style={styles.homeTopCard}>
                        <Image
                        source = {data.image}
                        style = {styles.images} />
                        <View style={styles.homeTopCardText}>
                            <Text style={styles.homeTopCardTextDate}>{data.date}</Text>
                            <Text style={styles.homeTopCardTextTitle}>{data.title}</Text>
                        </View>
                        
                        </View>
                    ))
                    }
                </ScrollView>

                </View>

                <View style = {styles.pagination}>
                    {
                    TopEvents.map((i,k) => (
                    <Text key={k} style={ k === active ? styles.pagingActive :  styles.pagingText} />
                    ))
                    }
                </View>

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
                        data.map((value,index)=>{
                            return <HomeCard key={index} {...value}/>;
                        })
                    }
                </View>
                </ScrollView>
                </View>
            </View>
        )
}


const HomeCard = ({navigation,day,description,location,date,time}) => {

    const [isEnabled,setIsEnabled]=useState(false);

    return(
        <View style={styles.cardBox}>
            <View style={{padding:8,paddingVertical:15}}>

            <Text style={styles.cardTitle}>{day}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
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
                <View style={styles.row}>
                    <Icon 
                    type={Icons.MaterialIcons}
                    name="date-range"
                    size={20}
                    color='white'
                    />
                    <Text style={styles.cardDescriptionIcon}>{date}</Text>
                </View>
                <View style={styles.row}>
                    <Icon 
                    type={Icons.Ionicons}
                    name="time-outline"
                    size={20}
                    color="white"
                    />
                    <Text style={styles.cardDescriptionIcon}>{time}</Text>
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
    },
    header : {
        marginTop: 30,
        marginHorizontal: 16,
        fontFamily : 'Montserrat',
        flexDirection:'row',
        alignItems: 'center'
    },
    headerLight : {
        color: 'white',
        fontSize: 22, 
        opacity:0.7,
        paddingLeft:10
    },
    headerDark : {
        color: 'white',
        fontSize: 22, 
        fontWeight: 'bold',
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
        borderWidth:0.8,
        borderColor:'#3b3b3b',
    },
    cardTitle:{
        fontSize:16,
        fontWeight: 'bold',
        color:'white',
        marginBottom:5,
    },
    cardDescription:{
        marginBottom:5,
        color:'white',
    },
    cardDescriptionIcon:{
        marginLeft:5,
        color:'white',
    },
    fullW:{
        width:boxWidth,
    },
    row:{
        flexDirection:'row',
        alignItems: 'center'
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
        marginVertical:20,
        borderRadius:14,
    },
    homeTopCard:{
        width:boxWidth,
        position: 'relative',
        borderRadius:14,
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