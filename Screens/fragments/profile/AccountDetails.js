import React,{useState,useContext,useEffect} from 'react';
import { ScrollView, View,Text, Image, StyleSheet,TouchableHighlight,TextInput, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Platform, Modal,Dimensions } from 'react-native';
import Icon,{Icons} from '../Icons';
import {AppContext} from '../../../context';
import {launchImageLibrary} from 'react-native-image-picker';
import gobalStyle from '../../styles/index';
import RNFS from 'react-native-fs';
import {styles as btnS} from '../explore/RequestForm';
import {updateUserData,getProfileDetails} from '../../api/authication'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
const AccountDetails = ({navigation})=> {
    const {clear}=useContext(AppContext);
    const [data,setData] = useState( {
        name: '',
        phoneNo: '',
    });
    const [show,setShow] = useState(false)
    const [isEditOn,setEditOn] = useState(false);

    const {user,profileUrl,setProfileUrl,setUser, setAlert}=useContext(AppContext);

    useEffect(()=>{
        setData({name:user&&user.firstName,phoneNo:user&&user.phoneNumber})
    },[user])



    const handleName = (text) => {
        setData({...data,name: text});
    };

    const handleMobile = (text) => {
        setData({...data,mobile: text});
    };

    const handleChoosePhoto = () => {
        const options = {
          noData: true,
        };
        launchImageLibrary(options, (response) => {
          if(response.assets&&response.assets.length==1){
              RNFS.readFile(response.assets[0].uri, 'base64')
              .then(res =>{
                  updateUserData({...user,profileUrl:`data:${response.assets[0].type};base64`+","+res}).then(
                    (e)=>{
                        setProfileUrl(`data:${response.assets[0].type};base64`+","+res);
                  })
            });
            }
        
          if (response.uri) {
            console.log(response.uri);
          }
        });
      };

    const handleSubmite = () => {

        console.log(data)

        if(!data.name || !data.phoneNo || data.phoneNo.length!=10){
            return setAlert("error", "Enter the valid phone number and name");
            // return alert("Enter the vaild phone no and name");
        }
     
        updateUserData({...user,profileUrl,firstName:data.name,phoneNumber:data.phoneNo})
        .then((e)=>{
            console.log("update")
            getProfileDetails(user.userId)
            .then((data)=>{
                data.profileUrl=null;
                data.token=user.token;
                AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
                    setUser(data);
                    setEditOn(false);
                });
            })
            .catch((e)=>console.log(e))
        })
         
      };


    return (
        <KeyboardAvoidingView
        keyboardShouldPersistTaps='never'
        behavior= {Platform.OS=='ios'?"padding":'height'}
        style={{flex:1}}
        >

    <SafeAreaView style={gobalStyle.main}>

            <TouchableHighlight onPress={()=>{
                    navigation.navigate('Profile');
                }}>
                <SafeAreaView style={[gobalStyle.nav,{backgroundColor:'transparent'}]}>
                    <SafeAreaView>

                    <Icon
                    style={{paddingStart: RFValue(10)}}
                    type={Icons.MaterialIcons}
                    size={25}
                    name="arrow-back-ios"
                    color= "white"
                    />
                    </SafeAreaView>
                    <Text style={gobalStyle.nav_header}>Account Details</Text>

                </SafeAreaView>
            </TouchableHighlight>
        <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        >
            <SafeAreaView style={{ backgroundColor: '#1E1E1E', borderRadius: 20, flexDirection: 'column', alignItems: 'center', width:'100%', height: '100%' }} >
                <SafeAreaView style={{alignItems:'center', justifyContent:'center', padding:30}}>

                {
                    profileUrl
                    ?
                    <Image
                    source={{uri: profileUrl}}
                    style={{width: RFValue(120), height: RFValue(120), borderRadius:RFValue(120/2)}}
                    />
                    :
                    <Image
                    source={require('../../assests/UserPic.png')}
                    style={{width: RFValue(120), height: RFValue(120), borderRadius:RFValue(120/2)}}
                    />
                }

                <TouchableHighlight onPress={handleChoosePhoto}>

                <Text style={{color: '#F79D16', padding:RFValue(10), fontSize:RFValue(16), fontFamily: 'Montserrat-Regular'}}>Change Profile Picture</Text>
                </TouchableHighlight>      

                </SafeAreaView>

                <SafeAreaView style={{padding:RFValue(5), margin:RFValue(10), width: '100%', margin: RFValue(10)}}>

                <Text style={{color: '#808080', fontSize:RFValue(16), fontFamily: 'Montserrat-Regular', margin: RFValue(10), marginStart: RFValue(20),
            marginEnd: RFValue(20),}}>Name</Text>

                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Name"
                    placeholderTextColor = "#808080"
                    autoCapitalize = "none"
                    value={data.name}
                    editable={isEditOn}
                    onChangeText = {handleName}
                    />

                <Text style={{color: '#808080', fontSize:RFValue(16),  fontFamily: 'Montserrat-Regular', margin: RFValue(10), marginStart: RFValue(20),
            marginEnd: RFValue(20),}}>Mobile</Text>

                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Phone No."
                    placeholderTextColor = "#808080"
                    autoCapitalize = "none"
                    value={data.phoneNo}
                    editable={isEditOn}
                    onChangeText = {handleMobile} />
                </SafeAreaView>

                <SafeAreaView style={{flexDirection: 'column',alignItems:'center',marginTop:30}}>
                    <TouchableHighlight style={btnS.chatSupportBtn}
                    // provide navigate path
                    onPress={

                        ()=>{
                            if(isEditOn){
                                handleSubmite()
                            }else{
                                setEditOn(true)
                            }
                        }
                    }
                    underlayColor="#fff"
                    >
                        {
                            isEditOn
                            ?
                            <Text style={btnS.loginText}>Save</Text>
                            :
                            <Text style={btnS.loginText}>Edit</Text>
                        }
                    </TouchableHighlight>
                    {
                    // Platform.OS==='ios'
                    true?

                <TouchableOpacity onPress={()=>setShow(true)} style={{alignSelf:'flex-end',marginTop:100}}>
                <Text style={{color:"white",fontSize:13,}}>
                Delete account</Text>
                </TouchableOpacity>: null
                }
                                <Modal visible={show}  transparent style={{alignSelf:'center',alignContent:"flex-end"}}>

<View style={{  backgroundColor: 'white',
    width: '90%',
    borderRadius:10,
    padding:38,
    backgroundColor:'#0F0F0F',
    marginTop:RFValue(280),
    alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
    }}>
    <Text style={{color:'white',fontSize:RFValue(14)}}>
        Are you sure, do you want to delete your account?
    </Text>

    <View style={{marginTop:RFValue(20),flexDirection:'row'}}>
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
        Toast.show({
            type: 'success',
            text1: 'Account Deletion request sent successfully!',
            text2: 'Our team will get in touch with you in a while'
          });
      
        clear(navigation);
        setShow(false);
    }}
        underlayColor='#fff'
        >
        <Text style={styles.loginText}>Delete</Text>
    </TouchableOpacity>
    </View>


</View>

 </Modal>
                </SafeAreaView>
            </SafeAreaView>
        </ScrollView>
    </SafeAreaView>

    </KeyboardAvoidingView>

    );

};
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
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: RFValue(5),
        marginHorizontal: RFValue(10),
        marginStart: RFValue(20),
        marginEnd: RFValue(20),
        height: RFValue(40),
        borderColor: '#343739',
        borderWidth: 2,
        borderRadius: 6,
        paddingHorizontal:RFValue(10),
        color: 'white',
        fontSize: RFValue(16),
        fontFamily: 'Montserrat-Regular'
     },
     header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: RFValue(30), 
        marginHorizontal: RFValue(16), 
        marginBottom:RFValue(30),
    },
});

export {styles};

export default AccountDetails;
