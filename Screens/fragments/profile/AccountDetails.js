import React,{useState,useContext,useEffect} from 'react';
import { View,Text, Image, StyleSheet,TouchableHighlight,TextInput } from 'react-native';
import Icon,{Icons} from '../Icons'
import {AppContext} from '../../../context'

const AccountDetails = ({navigation})=> {
    const [data,setData] = useState( {
        name: '',
        phoneNo: '',
    });

    const {user}=useContext(AppContext);

    useEffect(()=>{
        setData({name:user.firstName+" "+user.lastName,phoneNo:user.phoneNumber})
    },[user])



    const handleName = (text) => {
        setData({...data,name: text});
    };

    const handleMobile = (text) => {
        setData({...data,mobile: text});
    };

    return (
    <View style={{backgroundColor:'#0F0F0F', flex: 1}}>

            <TouchableHighlight onPress={()=>{
                    navigation.navigate('Profile');
                }}>
                <View style={styles.header}>
                    <View>

                    <Icon
                    type={Icons.MaterialIcons}
                    size={25}
                    name="arrow-back-ios"
                    color= "white"
                    />
                    </View>
                    <Text style={{
                        color: 'white',
                        fontFamily : 'Montserrat',
                        fontSize: 22,
                        fontWeight: 'bold',
                        }}>Account Details</Text>

                </View>
            </TouchableHighlight>

        <View style={{alignItems:'center', justifyContent:'center', padding:50}}>
            <Image
                source={require('../../assests/UserPic.png')}
                style={{width: 150, height: 150, borderRadius:150 / 2}}
            />

            <Text style={{color: '#F79D16', padding:20, fontSize:18, fontWeight:'400'}}>Change Profile Picture</Text>
        </View>

        <View style={{padding:5, margin:10}}>

            <Text style={{color: '#808080', fontSize:18, fontWeight:'400', margin: 10}}>Name</Text>

            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Prachi Jamdade"
                placeholderTextColor = "#808080"
                autoCapitalize = "none"
                value={data.name}
                onChangeText = {handleName}
                />

            <Text style={{color: '#808080', fontSize:18, fontWeight:'400', margin: 10}}>Mobile</Text>

            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "9324328505"
                placeholderTextColor = "#808080"
                autoCapitalize = "none"
                value={data.phoneNo}
                onChangeText = {handleMobile} />
        </View>
    </View>
    );

};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#343739',
        borderWidth: 1,
        paddingHorizontal:10
     },
     header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30, 
        marginHorizontal: 16, 
        marginBottom:30,
    },
});

export default AccountDetails;
