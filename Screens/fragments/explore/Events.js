import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { Linking } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import ImageBackUp from '../../assests/icons/back.png';
import Sermons1 from '../../assests/sermons1.png';
import Sermons2 from '../../assests/sermons2.png';
import Sermons3 from '../../assests/sermons3.png';
import Sermons4 from '../../assests/sermons4.png';
import ImageFreame2 from '../../assests/frame2.png';
import UserPic from '../../assests/frame2.png';
import EventIcons1 from '../../assests/icons/eventsIcon1.png';
import EventIcons2 from '../../assests/icons/eventsIcon2.png';
import EventIcons3 from '../../assests/icons/eventsIcon3.png';
import EventIcons4 from '../../assests/icons/eventsIcon4.png';
import gobalStyle from '../../styles/index';

const Icons = [
    {
        src:EventIcons1,
        navigate:'https://www.podbean.com/podcast-detail/86mis-88de3/Samuel-Patta-Ministries-Podcast'
    },
    {
        src:EventIcons2,
        navigate: 'https://podcasts.apple.com/in/podcast/the-kings-temple/id1455337048'
    },
    {
        src:EventIcons3,
        navigate:'https://open.spotify.com/episode/02DJY9YFCDFouWajiwxeMw?si=nsqXQ_wJQ4SpCSt5FrW88g'
    },
    {
        src:EventIcons4,
        navigate: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hZjNhYmQ4L3BvZGNhc3QvcnNz?ep=14'
    },
];
class Events extends React.Component{



    render(){
        return (

            <View style={{height: '100%', width: '100%', backgroundColor: '#000'}}>
            <TouchableOpacity
            style={gobalStyle.nav}
                // provide navigate path
                    onPress={() => this.props.navigation.navigate('Explore')}
                >

                <Image source={ImageBackUp} style={gobalStyle.nav_image} />
                <Text style={gobalStyle.nav_header} >Sermons</Text>

            </TouchableOpacity>

            <View style={styles.card}>
                <Text style={styles.separatingText}>Watch us live on</Text>
                <ImageElement source={Sermons1} stretch ={false} title='Every Thursday 9 PM' content='Tune into our only English brodcast on GOD TV every thursday at 9 PM' />
                <ImageElement source={Sermons2} title='Daily 4 PM' content='Tune into our only Telugu brodcast on Aradana TV everyday at 4 PM except monday and friday at 6 PM' />
                <ImageElement source={Sermons3} title='Mon - Friday 6 PM' content='Tune into our Telugu brodcast on Subhavaartha TV everyday at 6 PM' />
                <ImageElement source={Sermons4} title='Thursday 9 PM' content='Tune into our only Telugu brodcast on Subhsanesh TV Thursday at 9 PM' />
                <Text style={styles.separatingText}>Follow our Podcast on</Text>

                <View style={{flex: 1, flexDirection: 'row', paddingTop: 12, paddingHorizontal: 12}}>
                    {Icons
                        .map((value) => <Image source={value.src}
                        style={{height: 50, width: 50, borderRadius: 999, marginRight: 12}} 
                        onPress={() => Linking.openURL(value.navigate)}
                        />
                    )}
                </View>
            </View>
            </View>

        );
    }
}

function ImageElement({source, stretch = true, title, content}) {
    return <View style={{
        width: '100%',
        marginTop: 8,
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 14,
        flexDirection: 'row'
    }}>
        <Image source={source} style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                    borderRadius: 5,
                    padding: 2
                }} />

        <View style={{flexDirection: 'column', padding: 4, flexGrow: 1, flex: 1,}}>
            <Text style={{fontFamily: 'Montserrat-Bold', color: 'white', marginStart: 4, marginBottom: 10}}>{title}</Text>
            <Text style={{fontFamily: 'Montserrat-Medium', color: 'white', marginStart: 4}}>{content}</Text>
        </View>
        
    </View>;
}

const styles = StyleSheet.create({

    card: {
        position: 'relative',
        flex: 10,
        backgroundColor: '#1E1E1E',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        paddingHorizontal: 16,
    },
    input: {
        height: 50,
        marginTop: 12,
        padding: 10,
        width: '100%',
        color: 'white',
        fontSize: 16,
        borderColor: '#989898',
        borderWidth: 1,
        borderRadius: 10,
    },
    separatingText: {
        fontFamily: 'Montserrat-SemiBold',
        color: 'white', 
        fontSize: 18, 
        marginStart: 12, 
        marginTop: 20,
        marginBottom: 10
    },
});

export default Events;
