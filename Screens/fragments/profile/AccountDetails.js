import React,{useState,useContext,useEffect} from 'react';
import { View,Text, Image, StyleSheet,TouchableHighlight,TextInput } from 'react-native';
import Icon,{Icons} from '../Icons';
import {AppContext} from '../../../context';
import gobalStyle from '../../styles/index';

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
    <View style={gobalStyle.main}>

            <TouchableHighlight onPress={()=>{
                    navigation.navigate('Profile');
                }}>
                <View style={[gobalStyle.nav,{backgroundColor:'transparent'}]}>
                    <View>

                    <Icon
                    style={{paddingStart: 10}}
                    type={Icons.MaterialIcons}
                    size={25}
                    name="arrow-back-ios"
                    color= "white"
                    />
                    </View>
                    <Text style={gobalStyle.nav_header}>Account Details</Text>

                </View>
            </TouchableHighlight>

            <View style={{ backgroundColor: '#1E1E1E', borderRadius: 20, flexDirection: 'column', alignItems: 'center', width:'100%', height: '100%' }} >
            <View style={{alignItems:'center', justifyContent:'center', padding:30}}>
            <Image
                source={require('../../assests/UserPic.png')}
                style={{width: 130, height: 130, borderRadius:130 / 2}}
            />

            <Text style={{color: '#F79D16', padding:10, fontSize:18, fontFamily: 'Montserrat-Regular'}}>Change Profile Picture</Text>
        </View>

        <View style={{padding:5, margin:10, width: '100%', margin: 10}}>

            <Text style={{color: '#808080', fontSize:18, fontFamily: 'Montserrat-Regular', margin: 10, marginStart: 20,
        marginEnd: 20,}}>Name</Text>

            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Prachi Jamdade"
                placeholderTextColor = "#808080"
                autoCapitalize = "none"
                value={data.name}
                onChangeText = {handleName}
                />

            <Text style={{color: '#808080', fontSize:18,  fontFamily: 'Montserrat-Regular', margin: 10, marginStart: 20,
        marginEnd: 20,}}>Mobile</Text>

            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "9324328505"
                placeholderTextColor = "#808080"
                autoCapitalize = "none"
                value={data.phoneNo}
                onChangeText = {handleMobile} />
        </View>
            </View>
    </View>
    );

};

const styles = StyleSheet.create({
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
        marginStart: 20,
        marginEnd: 20,
        height: 40,
        borderColor: '#343739',
        borderWidth: 1,
        paddingHorizontal:10,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
     },
     header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30, 
        marginHorizontal: 16, 
        marginBottom:30,
    },
});

export {styles};

export default AccountDetails;
