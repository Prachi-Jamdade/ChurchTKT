import * as React from "react"
import { View, Text, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from '../Icons'

const ProfileComponent = ({imgSource, componentName, onClick}) => {
    return(
        <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                borderColor:'grey', 
                borderRadius:5,
                padding:3,
                margin:2.5,
                marginVertical:5
            }}

            onClick={onClick}
        >


             <Icon
                type={imgSource.type} 
                name={imgSource.name}
                style={
                    {
                        borderRadius:10,
                        backgroundColor:imgSource.isRed?' rgba(106, 0, 0, 0.15)':'rgba(255, 190, 24, 0.05)',
                        padding:10,
                    }}
                color={imgSource.isRed?'#FD4F4F':"#FFBE18"}
                size ={25}
             />

            <Text style={{color: "white", padding:15, fontSize:17, fontWeight:"400", width:230}}>{componentName}</Text>

            <Ionicons name='chevron-forward-outline' size={20} color="white" style={{padding:2, marginHorizontal:8}} />

        </View>
    )
}

export default ProfileComponent;