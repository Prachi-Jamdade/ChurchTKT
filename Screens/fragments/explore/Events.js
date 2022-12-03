import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import ImageBackUp from '../../assests/icons/back.png';
import ImageTkt from '../../assests/tkt.png';
import ImageFreame2 from '../../assests/frame2.png';
import UserPic from '../../assests/frame2.png';
import EventIcons1 from '../../assests/icons/eventsIcon1.png';
import EventIcons2 from '../../assests/icons/eventsIcon2.png';
import EventIcons3 from '../../assests/icons/eventsIcon3.png';
import EventIcons4 from '../../assests/icons/eventsIcon4.png';

const Icons=[
    {
        src:EventIcons1,
    },
    {
        src:EventIcons2,
    },
    {
        src:EventIcons3,
    },
    {
        src:EventIcons4,
    },
]
class Events extends React.Component{

    

    render(){
        return(
            
            <View style={{height: '100%', width: '100%', backgroundColor: '#000'}}>
            <TouchableOpacity 
            style={styles.nav}
                // provide navigate path
                    onPress={() => this.props.navigation.navigate('Explore')}
                >
          
                <Image source={ImageBackUp} style={{height: 24, width: 24, resizeMode: 'contain', marginStart: 12}} />
                <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18, marginStart: 12}}>Our Events</Text>
                
            </TouchableOpacity>
            <View style={{width: '100%', height: 28, backgroundColor: '#000'}} />
            <View style={styles.card}>
                <Text style={styles.separatingText}>Our Channels</Text>
                <ImageElement source={ImageTkt} stretch ={false} />
                <ImageElement source={ImageFreame2} />
                <Text style={styles.separatingText}>Follow our Podcast on</Text>
            
                <View style={{flex: 1, flexDirection: 'row', paddingTop: 12, paddingHorizontal: 12}}>
                    {Icons
                        .map((value) => <Image source={value.src} 
                        style={{height: 50, width: 50, borderRadius: 999, marginRight: 12}} />                    
                    )}
                </View>
            </View>
            </View>

        )
    }
}

function ImageElement({source, stretch = true}) {
    return <View style={{
        width: '100%',
        backgroundColor: '#000',
        marginTop: 16,
        height: 140,
        borderRadius: 14
    }}>
        <Image source={source} style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: stretch ? 'cover' : 'contain',
                    borderRadius: 14
                }} />
    </View>
}

const styles = StyleSheet.create({
    nav: {
        width: '100%', 
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        position: 'relative',
        flex: 10,
        // backgroundColor: '#0F0F0F',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        paddingHorizontal: 16,
        paddingTop: 12,
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
    separatingText: {fontWeight: 'bold', color: 'white', fontSize: 14, marginStart: 12, marginTop: 16}    
})

export default Events;