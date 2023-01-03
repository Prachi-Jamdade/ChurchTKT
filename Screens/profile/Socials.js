import * as React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Linking} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const Socials = () => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          padding: RFValue(15),
          fontSize: RFValue(17),
          fontFamily: 'Montserrat-Regular',
        }}>
        Follow us on
      </Text>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <Ionicons name='logo-linkedin' size={26} color="#FFBE18" 
            style={{
                padding: RFValue(8), 
                margin: RFValue(5),
                backgroundColor:'rgba(255, 190, 24, 0.05)',
                borderRadius:15,
            }} 
            // onPress={() => Linking.openURL('')}
            /> */}
        <Ionicons
          name="logo-facebook"
          size={26}
          color="#FFBE18"
          style={{
            padding: RFValue(8),
            margin: RFValue(5),
            backgroundColor: 'rgba(255, 190, 24, 0.05)',
            borderRadius: 15,
          }}
          onPress={() => Linking.openURL('https://www.facebook.com/tktfb/')}
        />
        <Ionicons
          name="logo-twitter"
          size={26}
          color="#FFBE18"
          style={{
            padding: RFValue(8),
            margin: RFValue(5),
            backgroundColor: 'rgba(255, 190, 24, 0.05)',
            borderRadius: 15,
          }}
          onPress={() =>
            Linking.openURL(
              'https://twitter.com/thekingstemple?t=9kkgWKdzLTvG1NHRAAj6Ug&s=09',
            )
          }
        />
        <Ionicons
          name="logo-instagram"
          size={26}
          color="#FFBE18"
          style={{
            padding: RFValue(8),
            margin: RFValue(5),
            backgroundColor: 'rgba(255, 190, 24, 0.05)',
            borderRadius: 15,
          }}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/tktchurch/')
          }
        />
        <Ionicons
          name="logo-youtube"
          size={26}
          color="#FFBE18"
          style={{
            padding: RFValue(8),
            margin: RFValue(5),
            backgroundColor: 'rgba(255, 190, 24, 0.05)',
            borderRadius: 15,
          }}
          onPress={() =>
            Linking.openURL('https://youtube.com/@thekingstemplechurch3010')
          }
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Socials;
