/* eslint-disable react-native/no-inline-styles */
import React,{useState,useEffect,useContext,useRef} from 'react';
import {
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight,
    StyleSheet,
    Switch,
    Dimensions,
    SafeAreaView
} from 'react-native';
import Icon, { Icons } from '../fragments/Icons';
import homeHand from '../assests/icons/homeHand.png';
import LottieView from 'lottie-react-native';
import homeImage from '../assests/homeImage.png';
import { AppContext } from '../../context';
import gobalStyle from '../styles/index';
import YoutubePlayer from 'react-native-youtube-iframe';
import Video from 'react-native-video';
import { RFValue } from 'react-native-responsive-fontsize';



const {width} = Dimensions.get('window');
const boxWidth=width*0.92;
const height = width * 100 / 40;


const Home = ({ navigation }) => {

    const [active,setActive]=useState(0);
    const lottieRef = useRef(null);
    const [lodding,setLodding]=useState(true);
    // const lodding=true;
    const {homeEvents,getHomeEvent,videoLink,user}=useContext(AppContext);

    useEffect(() => {
        if(homeEvents.length===0){
            getHomeEvent().finally(()=>{
                setLodding(false);
            })
        }else {
            setLodding(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (lottieRef.current) {
          setTimeout(() => {
            lottieRef.current?.reset();
            lottieRef.current?.play();
          }, 100);
        }
    }, [lottieRef]);

 
    
    const change = ({nativeEvent}) => {
        const slide = nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
        if (slide !== active) {
            setActive(slide);
        }
    }

    return (
             <SafeAreaView style= {gobalStyle.main}>
                <SafeAreaView style = {gobalStyle.header}>
                    <Image
                        source={homeHand}
                        style={styles.image} />
                    <SafeAreaView>
                    <Text style={styles.headerLight}>Hello,</Text>
                    </SafeAreaView>
                    <SafeAreaView>
                        <Text style={styles.headerDark}>{user?.firstName}!</Text>
                    </SafeAreaView>
                </SafeAreaView>

                {
            lodding 
               ?
               <SafeAreaView style= {[styles.box]}>
                
               <View style={{
                    width:width,
                    height:height/1.7,
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    transform: [{ scale: 2 }]
                    }}>
                <LottieView
                    ref={lottieRef}
                    autoplay
                    loop
                    source={require('../assests/loading_tkt_church_app.json')}
                    />
                </View>

               </SafeAreaView>
              :

            <SafeAreaView style={[styles.box]}>

                <SafeAreaView style={styles.container}>
                    <ScrollView
                        pagingEnabled
                        horizontal
                        onScroll={change}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            videoLink.map((data, index) => (
                                <View key={index} style={styles.homeTopCard}>
                                    <YoutubePlayer
                                        height={RFValue(190)}
                                        //   play={true}
                                        videoId={data.videoId}
                                        style={styles.images}
                                    />

                                </View>
                            ))
                        }
                    </ScrollView>

                </SafeAreaView>

                <SafeAreaView style={styles.pagination}>
                    {
                        videoLink.map((i, k) => (
                            <Text key={k} style={k === active ? styles.pagingActive : styles.pagingText} />
                        ))
                    }
                </SafeAreaView>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <SafeAreaView style={styles.list}>
                        <SafeAreaView>
                            <Text style={[styles.headerDark, styles.fullW, { marginBottom: RFValue(15) }]}>
                                Upcoming Events
                            </Text>
                        </SafeAreaView>
                        {
                            homeEvents.map((value, index) => {
                                return <HomeCard key={value.eventId} {...value} />;
                            })
                        }
                    </SafeAreaView>
                </ScrollView>

            </SafeAreaView>
            }

        </SafeAreaView>
    )
}


const HomeCard = ({ navigation, title, description, location, startDate, startTime }) => {

    let _description = description.slice(description.indexOf("<p>") + 3, description.lastIndexOf("</p>"))
    let date = new Date(startDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    let _startDate = `${date.getMonth()}th ${monthNames[date.getMonth()]}`

    const [isEnabled, setIsEnabled] = useState(false);

    function formatTime(timeString) {
        const [hourString, minute] = timeString.split(":");
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
    }

    return (
        <SafeAreaView style={styles.cardBox}>
            <SafeAreaView style={{ padding: RFValue(12), paddingVertical: RFValue(12) }}>

                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardDescription}>{_description}</Text>
                <SafeAreaView style={[styles.rowToggle, { marginHorizontal: 5 }]}>
                    <Switch
                        trackColor={{ false: "#2e2d2b", true: "#FFBE18" }}
                        thumbColor={isEnabled ? "white" : "#FFBE18"}
                        ios_backgroundColor="#FFBE18"
                        value={isEnabled}
                        onValueChange={() => { setIsEnabled(!isEnabled) }}
                        style={{ height: RFValue(20), color: 'white' }}
                    />
                    <Text style={styles.cardText}>Set Reminder</Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={[styles.row, styles.cardIcons]}>
                <SafeAreaView style={styles.row}>
                    <Icon
                        type={Icons.Ionicons}
                        name="location-outline"
                        size={20}
                        color='white'
                    />
                    <Text style={styles.cardDescriptionIcon}>{location}</Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={[styles.row, styles.cardIcons, {
                borderBottomLeftRadius: RFValue(14),
                borderBottomRightRadius: RFValue(14)
            }]}>
                <SafeAreaView style={styles.row}>
                    <Icon
                        type={Icons.MaterialIcons}
                        name="date-range"
                        size={20}
                        color='white'
                    />
                    <Text style={styles.cardDescriptionIcon}>{_startDate}</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.row}>
                    <Icon
                        type={Icons.Ionicons}
                        name="time-outline"
                        size={20}
                        color="white"
                    />
                    <Text style={styles.cardDescriptionIcon}>{formatTime(startTime)}</Text>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )

}



const styles = StyleSheet.create({
    main: { flex: 1, backgroundColor: '#0F1013' },
    box: {
        width,
        backgroundColor: '#1E1E1E',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: RFValue(20),
        flex: 1,
        marginTop: RFValue(15),
        paddingTop: RFValue(10),
    },
    cardText: {
        color: 'white',
        marginLeft: 5,
        fontFamily: 'Montserrat-Medium'
    },
    headerLight: {
        color: 'white',
        fontSize: RFValue(20),
        opacity: 0.7,
        paddingLeft: RFValue(10),
        fontFamily: 'Montserrat-Medium'
    },
    headerDark: {
        color: 'white',
        fontSize: RFValue(20),
        fontFamily: 'Montserrat-SemiBold',
        paddingLeft: RFValue(5),
        textTransform: 'capitalize',
    },
    headerInfo: {
        color: 'white',
        marginTop: RFValue(10),
        marginHorizontal: RFValue(16),
        fontFamily: 'Montserrat',
        fontSize: RFValue(18),
        fontWeight: 'bold'
    },
    cardBox:
    {
        width: boxWidth,
        borderRadius: RFValue(14),
        color: 'white',
        marginBottom: RFValue(20),
        borderWidth: RFValue(1),
        borderColor: '#3b3b3b',
    },
    cardTitle: {
        fontSize: RFValue(14),
        color: 'white',
        marginBottom: RFValue(5),
        fontFamily: 'Montserrat-Medium'
    },
    cardDescription: {
        marginBottom: RFValue(5),
        color: 'white',
        fontFamily: 'Montserrat-Medium'
    },
    cardDescriptionIcon: {
        marginLeft: RFValue(5),
        color: 'white',
        fontFamily: 'Montserrat-Medium'
    },
    fullW: {
        width: boxWidth,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: RFValue(2),
        marginEnd: RFValue(15)
    },
    rowToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: boxWidth,
        marginVertical: RFValue(5),
    },
    cardIcons: {
        justifyContent: 'space-between',
        backgroundColor: '#0F0D0B',
        paddingVertical: RFValue(8),
        paddingHorizontal: RFValue(10),
        width: boxWidth,
    },
    container: {
        width: boxWidth,
        zIndex: -1,
        marginBottom: RFValue(5),
        borderRadius: RFValue(14),
    },
    homeTopCard: {
        width: boxWidth,
        borderRadius: RFValue(20),
        marginVertical: RFValue(10),
        paddingTop: RFValue(25),
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
        backgroundColor: 'black',
    },
    homeTopCardText: {
        position: 'absolute',
        bottom: RFValue(10),
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: boxWidth,

    },
    homeTopCardTextDate: {
        fontSize: RFValue(12),
        fontWeight: 'bold',
        color: 'white',
    },
    homeTopCardTextTitle: {
        fontSize: RFValue(16),
        fontWeight: 'bold',
        color: 'white',
    },
    images: {
        width: RFValue(boxWidth - 40),
        borderRadius: RFValue(12),
        zIndex: -10,
    },
    pagination: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: RFValue(15),
    },
    pagingText: {
        fontSize: RFValue((width / 30)),
        backgroundColor: '#888',
        margin: RFValue(3),
        width: RFValue(9),
        height: RFValue(8),
        borderRadius: RFValue(50),
    },
    pagingActive: {
        fontSize: (width / 30),
        width: RFValue(20),
        height: RFValue(9),
        backgroundColor: '#FFBE18',
        margin: RFValue(3),
        borderRadius: RFValue(50),
        transitionDuration: 10
    },
    list: {
        // backgroundColor:'#0F0F0F',
        borderRadius: RFValue(24),
        marginTop: RFValue(5),
        marginBottom: RFValue(40),
        paddingBottom: RFValue(15),
        width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInfo: { color: 'white', alignSelf: 'center', fontSize: RFValue(14) },
    imagesAbout: { marginTop: RFValue(15), height: RFValue(width / 3) }
});

export { styles };
export default Home;