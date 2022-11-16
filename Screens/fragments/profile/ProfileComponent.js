import * as React from "react"
import { View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ProfileComponent = ({imgSource, componentName, onClick}) => {
    return(
        <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                borderColor:'grey', borderWidth:0.4, borderRadius:5,
                padding:3,
                margin:2.5
            }}

            onClick={onClick}
        >

            <Image 
                source={imgSource}
                style={{width: 40, height: 40, borderRadius:15/2, padding:5}}
            />

            <Text style={{color: "white", padding:15, fontSize:17, fontWeight:"400", width:230}}>{componentName}</Text>

            <Ionicons name='chevron-forward-outline' size={20} color="white" style={{padding:2, marginHorizontal:8}} />

        </View>
    )
}

export default ProfileComponent;