import React,{useState} from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
} from 'react-native';
import Icon,{Icons} from '../fragments/Icons';
import homeHand from '../assests/icons/homeHand.png';
import homeImage from '../assests/homeImage.png';


const data=[];
const TopEvents=[
    {
        image:homeImage,
        data:'29th Sept, 2023',
        title:'WORSHIP NIGHT'
    },
    {
        image:homeImage,
        data:'29th Sept, 2023',
        title:'WORSHIP NIGHT'
    },
    {
        image:homeImage,
        data:'29th Sept, 2023',
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
                    style = {styles.scrollView}
                >
                    {
                    TopEvents.map((data, index) => (
                        <Image
                        key={index}
                        source = {data.image}
                        style = {styles.images} />
                    ))
                    }
                </ScrollView>

                <View style = {styles.pagination}>
                    {
                    TopEvents.map((i,k) => (
                    <Text key={k} style={ k === active ? styles.pagingActive :  styles.pagingText} />
                    ))
                    }
                </View>
                </View>

                <View>
                <ScrollView>
                    <View style={styles.list}>
                    {
                        data.map((value,index)=>{
                            return <HomeCard key={index} {...value}/>;
                        })
                    }
                    </View>
                </ScrollView>
                </View>
                </View>
            </View>
        )
}


const HomeCard = ({navigation}) => {

    return(

        <TouchableHighlight>
            <View style={styles.cardBox}>
                <Text>

               zeel
                </Text>
            </View>
        </TouchableHighlight>
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
    container: {
        width :boxWidth,
        height:(height/5),
        zIndex:-1,
        marginVertical:20,
        borderRadius:14,
    },
    scrollView :{
        width :boxWidth,
    },
    images: {
        width :boxWidth,
        height:(height/5),
        borderRadius:14,
    },
    pagination : {
        flexDirection : 'row',
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

    textInfo: {color: 'white', alignSelf: 'center', fontSize: 14},
    imagesAbout:{marginTop:15,height:width/3}
});

export {styles};
export default Home;