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
import { AppContext } from '../../../context';
import gobalStyle from '../../styles/index';
import { Icons } from '../Icons';
import LogoutAlert from './LogoutAlert';
class Profile extends React.Component {

    state = {
        clicked: false,
        show: false,
    }
    static contextType = AppContext;

    navigate = (navigateTo) => {
        this.props.navigation.navigate(navigateTo);
    }

    setShow(show) {
        this.setState({ show: show });
        // console.log(this.state)
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ alignItems: 'center', backgroundColor: '#0F0F0F', height: '100%' }}>

                <Text style={[gobalStyle.header, { alignSelf: 'flex-start', marginBottom: 20 }]}>
                    Profile
                </Text>

                <View style={{ backgroundColor: '#1E1E1E', borderRadius: 20, flexDirection: 'column', alignItems: 'center', width:'100%', height: '100%' }} >
                    
         
                    <Image
                        source={require('../../assests/UserPic.png')}
                        style={{ width: 100, height: 100, borderRadius: 100 / 2, marginTop: 20 }}
                    />

                    <Text style={{ color: "white", padding: 20, fontSize: 18, fontFamily: 'Montserrat-SemiBold' }}>{this.context?.user?.firstName + " " + this.context?.user?.lastName}</Text>

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
                </View>


            </View>

        )
    }
}

export default Profile;
