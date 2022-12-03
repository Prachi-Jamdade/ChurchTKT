import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Screen } from 'react-native-screens';
import ImageBackUp from '../../assests/icons/back.png';
import ImageFreame2 from '../../assests/frame2.png';
import {Icons} from '../Icons'


class Offerings extends React.Component{

    state = {

    }
    render(){
        return(
            <View style={{height: '100%', width: '100%', backgroundColor: '#000'}}>

           
            <TouchableOpacity 
            style={styles.nav}
                // provide navigate path
                    onPress={() => this.props.navigation.navigate('Explore')}
                >

                <Image source={ImageBackUp} style={{height: 24, width: 24, resizeMode: 'contain', marginStart: 12}} />
                <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18, marginStart: 12}}>SPM</Text>
                </TouchableOpacity>
    
            <View style={styles.card}>
                <View style={[{flexDirection: 'column'},styles.fullW]}>
                        <ImageElement source={ImageFreame2} />
                        <Button buttonStyle={{
                            backgroundColor: '#FFA318',
                            borderRadius: 12,
                            width:'100%',
                            borderTopRightRadius:0,
                            borderTopLeftRadius:0
                        }} 
                        titleStyle= {{
                            letterSpacing: 2
                        }}
                        title='Join SPM'>

                        </Button>
                </View>
                <Text style= {styles.DescriptionText}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu mattis convallis magna odio condimentum facilisi nisl. Enim nulla scelerisque ut rhoncus purus. Eu, libero et felis est risus vel aenean.
                </Text>
                <Text style= {styles.DescriptionText}> 
                Praesent maecenas metus, elit, netus at lobortis enim, a. Venenatis, magnis et, ut aliquet. Tempor at enim sit sed viverra id purus morbi enim. Pretium ut massa, quam cursus. Malesuada arcu sollicitudin enim congue eu sollicitudin bibendum morbi.
                </Text>

                <View style={[{flexDirection: 'column',backgroundColor: '#4FF491',marginTop:20,borderRadius: 12},styles.fullW]}>
                        <View style={[
                            {flexDirection: 'row',alignItems:'center',paddingVertical:40,
                            justifyContent:'center'
                        }]}>

                                <Icons.FontAwesome5 name="hand-holding-heart" color="white" size={40}></Icons.FontAwesome5>
                                
                        </View>
                        <Button buttonStyle={{
                            backgroundColor: '#034A2B',
                            borderRadius: 12,
                            width:'100%',
                            borderTopRightRadius:0,
                            borderTopLeftRadius:0
                        }} 
                        titleStyle= {{
                            letterSpacing: 2
                        }}
                        title='Give'>

                        </Button>
                </View>
            </View>
            </View>
        )
    }
}

function ImageElement({source, stretch = true}) {
    return <View style={[{
        backgroundColor: '#000',
        marginTop: 16,
        height: 140,
        borderRadius: 14
    },styles.fullW]}>
        <Image source={source} style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: stretch ? 'cover' : 'contain',
                    borderRadius: 14,
                    borderBottomLeftRadius:0,
                    borderBottomRightRadius:0,
                }} />
        </View>
}


const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    nav: {
        width: '100%', 
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        flex: 10,
        width: width,
        // backgroundColor: '#0F0F0F',
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
        paddingTop: 18,
        flexDirection:'column',
        alignItems: 'center',
    },
    fullW:{
        width: (width*0.9),
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
        width: (width*0.9),
        marginVertical:10
    }
    
})

export default Offerings;