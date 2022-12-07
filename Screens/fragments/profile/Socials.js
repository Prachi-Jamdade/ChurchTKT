import * as React from "react"
import { View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Socials = () => {
    return(
    <View style={{
        alignItems:'center',
        justifyContent:'center'
    }}>
        <Text style={{color: "white", padding:15, fontSize:17, fontWeight:"400",} }>Follow us on</Text>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Ionicons name='logo-linkedin' size={26} color="#FFBE18" 
            style={{
                padding: 10, 
                margin: 8,
                backgroundColor:'rgba(255, 190, 24, 0.05)',
                borderRadius:15,
            }} 
            />
            <Ionicons name='logo-facebook' size={26} color="#FFBE18" 
             style={{
                padding: 10, 
                margin: 8,
                backgroundColor:'rgba(255, 190, 24, 0.05)',
                borderRadius:15,
            }}
            />
            <Ionicons name='logo-twitter' size={26} color="#FFBE18" 
             style={{
                padding: 10, 
                margin: 8,
                backgroundColor:'rgba(255, 190, 24, 0.05)',
                borderRadius:15,
            }}
            />
            <Ionicons name='logo-instagram' size={26} color="#FFBE18" 
            style={{
                padding: 10, 
                margin: 8,
                backgroundColor:'rgba(255, 190, 24, 0.05)',
                borderRadius:15,
            }}
            />
            <Ionicons name='logo-youtube' size={26} color="#FFBE18" 
            style={{
                padding: 10, 
                margin: 8,
                backgroundColor:'rgba(255, 190, 24, 0.05)',
                borderRadius:15,
            }}
            />
        </View>
    </View>
    )
}

export default Socials