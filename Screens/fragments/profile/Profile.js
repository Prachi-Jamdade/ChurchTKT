import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    TextInput
} from 'react-native';

import ProfileComponent from './ProfileComponent';
import Socials from './Socials';
import {AppContext} from '../../../context'

class Profile extends React.Component{

    state = {
        clicked: false
    }
    static contextType = AppContext;

    navigate = (navigateTo) => {
        this.props.navigation.navigate(navigateTo);
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'#0F0F0F', flex: 1}}>
                <Image 
                    source={require('../../assests/UserPic.png')}
                    style={{width: 100, height: 100, borderRadius:100/2}}
                />

                <Text style={{color: "white", padding:20, fontSize:18, fontWeight:"500"}}>My Name</Text>

                <TouchableHighlight onPress={()=>{
                    this.props.navigation.navigate("AccountDetails");
                }}>
                <ProfileComponent imgSource={require('../../assests/icons/acc_details.png')} componentName="Account Details" />
                </TouchableHighlight>
                
                <TouchableHighlight onPress={()=>{
                    this.props.navigation.navigate("Help");
                }}>
                <ProfileComponent imgSource={require('../../assests/icons/help.png')} componentName="Help"/>
                </TouchableHighlight>

                <TouchableHighlight>
                <ProfileComponent imgSource={require('../../assests/icons/privacy_policy.png')} componentName="Privacy Policy" />
                </TouchableHighlight>
              
                <TouchableHighlight onPress={()=>{
                    this.props.navigation.navigate("LogoutAlert");
                }}>
                <ProfileComponent imgSource={require('../../assests/icons/logout.png')} componentName="Logout"/>
                </TouchableHighlight>
                
                <Socials />
            </View>

        )
    }
}

export default Profile;
