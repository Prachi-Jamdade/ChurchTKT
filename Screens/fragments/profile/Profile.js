import React from 'react';
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
import { ScrollView } from 'react-navigation';
import { RFValue } from 'react-native-responsive-fontsize';

class Profile extends React.Component {

    state = {
        clicked: false,
        show: false,
        showAlert: false,
    }
    static contextType = AppContext;

    navigate = (navigateTo) => {
        this.props.navigation.navigate(navigateTo);
    }

    setShow(show) {
        this.setState({ show: show });
        // console.log(this.state)
    }

    setShowAlert(showAlert) {
        this.setState({ showAlert: showAlert });
    }

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const {user,setUser,profileUrl, setProfileUrl, isUserLogin}=this.context;
        if(user) {
            getProfileDetails(user.userId).then((data)=>{
                setProfileUrl(data.profileUrl)
            }).catch((e)=>console.log(e))
        }
        if(!isUserLogin) {
            this.setShowAlert(true);
        }
    }

    render() {
        return (
            <SafeAreaView style={{ alignItems: 'center', backgroundColor: '#0F0F0F', height: '100%' }}>

                <Text style={[gobalStyle.header, { alignSelf: 'flex-start', marginBottom: RFValue(20) }]}>
                    Profile
                </Text>

                <SafeAreaView style={{ backgroundColor: '#1E1E1E', borderRadius: 20, flexDirection: 'column', alignItems: 'center', width:'100%', height: '100%' }} >
                            
                {
                    this.context.profileUrl
                    ?
                    <Image
                    source={{uri: this.context.profileUrl}}
                        style={{ width: RFValue(90), height: RFValue(90), borderRadius: 90 / 2, marginTop: RFValue(15) }}
                    />
                    :
                    <Image
                    source={
                        require('../../assests/UserPic.png')}
                        style={{ width: RFValue(90), height: RFValue(90), borderRadius: 90 / 2, marginTop: RFValue(15) }}
                    />

                    
                }

                    <Text style={{ color: "white", padding: RFValue(20), fontSize: RFValue(16), fontFamily: 'Montserrat-SemiBold' }}>{this.context?.user?.firstName + " " + this.context?.user?.lastName}</Text>

                    <TouchableHighlight onPress={() => {
                        this.props.navigation.navigate("AccountDetails");
                    }}>
                        <ProfileComponent
                            imgSource={{ type: Icons.AntDesign, name: "user" }}
                            componentName="Account Details"
                        />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => {
                        this.props.navigation.navigate("Help");
                    }}>
                        <ProfileComponent imgSource={{ type: Icons.AntDesign, name: "adduser" }} componentName="Help" />
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <ProfileComponent imgSource={{ type: Icons.Feather, name: "shield" }} componentName="Privacy Policy" />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => {
                        this.setShow(true);
                    }}>
                        <ProfileComponent imgSource={{ type: Icons.Ionicons, name: "log-in-outline", isRed: true }} componentName="Logout" />
                    </TouchableHighlight>

                    <Socials />

                    {
                        this.state.show && <LogoutAlert navigation={this.props.navigation} setShow={(show) => { this.setShow(show) }}></LogoutAlert>
                    }
                </SafeAreaView>


            </SafeAreaView>

        )
    }
}

export default Profile;
