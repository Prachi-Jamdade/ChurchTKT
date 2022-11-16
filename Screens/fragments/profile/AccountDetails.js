import * as React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { View, TextInput } from "react-native-animatable";
import Ionicons from 'react-native-vector-icons/Ionicons';

class AccountDetails extends React.Component {

    state = {
        name: '',
        phoneNo: ''
    }

    constructor(props){
        super(props);
    }

    handleName = (text) => {
        this.setState({name: text})
    }

    handleMobile = (text) => {
        this.setState({mobile: text})
    }

    render() {
        <View style={{backgroundColor:'#0F0F0F', flex: 1}}>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                padding:12,
                margin:2.5
            }}>

                <Ionicons name='chevron-forward-outline' size={27} color="white" padding={2} margin={5} />

                <Text style={{color: "white", padding:15, fontSize:20, fontWeight:"400"}}>Account Details</Text>

            </View>

            <View style={{alignItems:'center', justifyContent:'center', padding:50}}>
                <Image 
                    source={require('../../assests/UserPic.png')}
                    style={{width: 150, height: 150, borderRadius:150/2}}
                />

                <Text style={{color: "#F79D16", padding:20, fontSize:18, fontWeight:"400"}}>Change Profile Picture</Text>
            </View>

            <View style={{padding:5, margin:10}}>

                <Text style={{color: "#808080", fontSize:18, fontWeight:"400", margin: 10}}>Name</Text>

                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Prachi Jamdade"
                    placeholderTextColor = "#808080"
                    autoCapitalize = "none"
                    onChangeText = {this.handleName} />

                <Text style={{color: "#808080", fontSize:18, fontWeight:"400", margin: 10}}>Mobile</Text>

                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "9324328505"
                    placeholderTextColor = "#808080"
                    autoCapitalize = "none"
                    onChangeText = {this.handleMobile} />
            </View>

        </View>
    }
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#343739',
        borderWidth: 1
     },
})

export default AccountDetails;