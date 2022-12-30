import React,{useEffect,useState,useContext} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    TextInput,
    SafeAreaView
} from 'react-native';

import ProfileComponent from './ProfileComponent';
import Socials from './Socials';
import { AppContext } from '../../../context';
import gobalStyle from '../../styles/index';
import { Icons } from '../Icons';
import LogoutAlert from './LogoutAlert';
import {getProfileDetails} from '../../api/authication';
import { RFValue } from 'react-native-responsive-fontsize';
import { Linking } from 'react-native';

const Profile =({ navigation })=>{
    const {setAlert, isUserLogin,user,setUser,profileUrl, setProfileUrl} = useContext(AppContext);
    // const [showAlert, setShowAlertV] = useState(false);
    const [show, setShowV] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if(user) {
            getProfileDetails(user.userId).then((data)=>{
                setProfileUrl(data.profileUrl)
            }).catch((e)=>console.log(e))
        }
        // if(!isUserLogin) {
        //     setShowAlert(true);
        // }else{
        //     setShowAlert(false);
        // }
    }, [user, isUserLogin, setProfileUrl]);

    const navigate = (navigateTo) => {
        navigation.navigate(navigateTo);
    }

    function setShow(show) {
        setShowV(show);
        // console.log(this.state)
    }

    // function setShowAlert(showAlert) {
    //     setShowAlertV(showAlert);
    // }

        return (
            <SafeAreaView style={{ alignItems: 'center', backgroundColor: '#0F0F0F', height: '100%' }}>
                <Text style={[gobalStyle.header, { alignSelf: 'flex-start', marginBottom: RFValue(20) }]}>
                    Profile
                </Text>

                {/* {
                showAlert && <LoginAlert navigation={navigation} isDisable={true} setShow={(show) => { setShowAlert(show)}} prevScreen='Home' />
                } */}

                <SafeAreaView style={{ backgroundColor: '#1E1E1E', borderRadius: 20, flexDirection: 'column', alignItems: 'center', width:'100%', height: '100%' }} >
                            
                {
                    profileUrl
                    ?
                    <Image
                    source={{uri: profileUrl}}
                        style={{ width: RFValue(90), height: RFValue(90), borderRadius: 90 / 2, marginTop: RFValue(15) }}
                    />
                    :
                    <Image
                    source={
                        require('../../assests/UserPic.png')}
                        style={{ width: RFValue(90), height: RFValue(90), borderRadius: 90 / 2, marginTop: RFValue(15) }}
                    />

                    
                }

                    <Text style={{ color: "white", padding: RFValue(20), fontSize: RFValue(16), fontFamily: 'Montserrat-SemiBold' }}>
                        {/* {this.context?.user?.firstName?this.context.user.firstName:"" + " " + this.context?.user?.lastName} */}
                        {user?user?.firstName:''+"  "+user?user?.lastName:''}
                        </Text>

                    <TouchableHighlight onPress={() => {
                        navigation.navigate("AccountDetails");
                    }}>
                        <ProfileComponent
                            imgSource={{ type: Icons.AntDesign, name: "user" }}
                            componentName="Account Details"
                        />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => {
                        navigation.navigate("Help");
                    }}>
                        <ProfileComponent imgSource={{ type: Icons.AntDesign, name: "adduser" }} componentName="Help" />
                    </TouchableHighlight>

                    <TouchableHighlight  onPress={() => {
                        Linking.openURL('https://kingstemple.in/privacy-policy/');
                    }}>
                        <ProfileComponent imgSource={{ type: Icons.Feather, name: "shield" }} componentName="Privacy Policy" />
                    </TouchableHighlight>

                    {
                        isUserLogin &&
                        <TouchableHighlight onPress={() => {
                            setShow(true);
                        }}>
                            <ProfileComponent imgSource={{ type: Icons.Ionicons, name: "log-in-outline", isRed: true }} componentName="Logout" />
                        </TouchableHighlight>
                    }


                    <Socials />

                    {
                        show && <LogoutAlert navigation={navigation} setShow={(show) => { setShow(show) }}></LogoutAlert>
                    }
                </SafeAreaView>


            </SafeAreaView>

        )
}

export default Profile;
