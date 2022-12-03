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
            <Ionicons name='logo-linkedin' size={26} color="yellow" style={{padding: 2, margin: 8}} />
            <Ionicons name='logo-facebook' size={26} color="yellow" style={{padding: 2, margin: 8}} />
            <Ionicons name='logo-twitter' size={26} color="yellow" style={{padding: 2, margin: 8}} />
            <Ionicons name='logo-instagram' size={26} color="yellow" style={{padding: 2, margin: 8}} />
            <Ionicons name='logo-youtube' size={26} color="yellow" style={{padding: 2, margin: 8}} />
        </View>
    </View>
    )
}

export default Socials