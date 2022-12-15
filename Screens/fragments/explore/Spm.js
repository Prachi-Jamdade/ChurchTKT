import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    TouchableHighlight
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import ImageBackUp from '../../assests/icons/back.png';
import ImageFreame2 from '../../assests/frame2.png';
import {Icons} from '../Icons';
import gobalStyle from '../../styles/index';


const Offerings =({navigation})=>{


        return (
            <View style={{height: '100%', width: '100%', backgroundColor: '#000'}}>


            <TouchableOpacity
            style={gobalStyle.nav}
                // provide navigate path
                    onPress={() => navigation.navigate('Explore')}
                >
                <Image source={ImageBackUp} style={gobalStyle.nav_image} />
                <Text style={gobalStyle.nav_header}>SPM</Text>
            </TouchableOpacity>

            <View style={styles.card}>
                <View style={[{flexDirection: 'column'},styles.fullW]}>
                        <ImageElement source={ImageFreame2} />
                        <Button buttonStyle={{
                            backgroundColor: '#FFA318',
                            borderRadius: 12,
                            width:'100%',
                            borderTopRightRadius:0,
                            borderTopLeftRadius:0,
                        }}
                        titleStyle= {{
                            letterSpacing: 2,
                        }}
                        title="JOIN SPM"
                        onPress={() => navigation.navigate('JoinSPM')} />
                </View>
                <Text style= {styles.DescriptionText}>
                Partnering with samuel patta ministries is a powerful way to expand the reach and impact of the King's Temple Church. No matter how you choose to give, your support is invaluable in helping the ministry to achieve its goals and make a positive impact in the world. 
                </Text>
                <Text style= {styles.DescriptionText}>
                So, if you are considering partner with us, know that your support is greatly appreciated and will make a real difference in the lives of others. By giving generously and faithfully, you can help to advance the work of the church and bring more people into a relationship with Christ.
                </Text>

                    <TouchableHighlight
                        onPress={() => navigation.navigate('SpmOffErings')}
                    >
                <View style={[{flexDirection: 'column',backgroundColor: '#4FF491',marginTop:20,borderRadius: 12},styles.fullW]}>
                        <View style={[
                            {flexDirection: 'row',alignItems:'center',paddingVertical:30,
                            justifyContent:'center',
                        }]}>

                                <Icons.FontAwesome5 name="hand-holding-heart" color="white" size={40} />

                        </View>
                        
                            <Button buttonStyle={{
                                backgroundColor: '#034A2B',
                                borderRadius: 12,
                                width:'100%',
                                borderTopRightRadius:0,
                                borderTopLeftRadius:0,
                            }}
                            titleStyle= {{
                                letterSpacing: 2,
                                fontFamily: 'Montserrat-Medium'
                            }}
                            title="Give" />
                </View>
                </TouchableHighlight>
            </View>
            </View>
        );
}

function ImageElement({source, stretch = true}) {
    return <View style={[{
        backgroundColor: '#000',
        marginTop: 16,
        height: 140,
        borderRadius: 14,
    },styles.fullW]}>
        <Image source={source} style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: stretch ? 'cover' : 'contain',
                    borderRadius: 14,
                    borderBottomLeftRadius:0,
                    borderBottomRightRadius:0,
                }} />
        </View>;
}


const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        flex: 10,
        width: width,
        // backgroundColor: '#0F0F0F',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        paddingTop: 10,
        flexDirection:'column',
        alignItems: 'center',
    },
    fullW:{
        width: (width * 0.9),
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
    DescriptionText:{
        color: 'white',
        width: (width * 0.9),
        marginVertical:10,
        fontFamily: 'Montserrat-Medium'
    },

});

export default Offerings;
