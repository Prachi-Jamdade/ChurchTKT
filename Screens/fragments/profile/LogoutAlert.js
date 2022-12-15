import  React,{useContext} from "react"
import { Alert } from "react-native"
import { Button } from "react-native-elements";

import { View,Image,TouchableOpacity,Text,StyleSheet,Dimensions } from 'react-native';

import {AppContext} from '../../../context'

const LogoutAlert = ({navigation,setShow}) => {
    const {clear}=useContext(AppContext);
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>

                <Text style={styles.header}>Do you really want to logout?</Text>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.chatSupportBtn}
                        // provide naviate path
                        onPress={() => setShow(false)}
                        underlayColor='#fff'
                        >
                        <Text style={styles.loginText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.chatSupportBtn,{backgroundColor:'#FF1818',borderColor:'transparent'}]}
                    // provide naviate path
                    onPress={() => {
                        clear(navigation);
                        setShow(false);
                    }}
                        underlayColor='#fff'
                        >
                        <Text style={styles.loginText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    chatSupportBtn: {
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'transparent',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#fff',
        width:width/3
    },
    loginText: {
        color:'white',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:2,
    },
    containerItem:{
        backgroundColor:'#0F0F0F',
        paddingVertical:30,
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth:0.5,
        borderColor:'#3b3b3b',
        borderRadius:10,
        width:width*0.97,
    },
    header:{
        fontSize:18,
        fontFamily: 'Montserrat-Medium',
        color:'white',
        marginBottom: 40,
    },
    text:{
        color:'white',
        width:width*.8,
        textAlign:'center',
        lineHeight:20,
        marginBottom: 20,
        fontFamily: 'Montserrat-Medium'
    }
})

export default LogoutAlert;