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
                        title="JOIN SPM" />
                </View>
                <Text style= {styles.DescriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
                </Text>
                <Text style= {styles.DescriptionText}>
                Praesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.
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
