import * as React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from '../fragments/Icons';

const ProfileComponent = ({imgSource, componentName, onClick}) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'grey',
        borderRadius: 5,
        padding: RFValue(3),
        margin: RFValue(2.5),
        marginVertical: RFValue(1),
      }}
      onClick={onClick}>
      <Icon
        type={imgSource.type}
        name={imgSource.name}
        style={{
          borderRadius: 10,
          backgroundColor: imgSource.isRed
            ? ' rgba(106, 0, 0, 0.15)'
            : 'rgba(255, 190, 24, 0.05)',
          padding: RFValue(8),
        }}
        color={imgSource.isRed ? '#FD4F4F' : '#FFBE18'}
        size={25}
      />

      <Text
        style={{
          color: 'white',
          padding: RFValue(15),
          fontSize: RFValue(16),
          fontFamily: 'Montserrat-Medium',
          width: 230,
        }}>
        {componentName}
      </Text>

      <Ionicons
        name="chevron-forward-outline"
        size={20}
        color="white"
        style={{padding: RFValue(2), marginHorizontal: RFValue(8)}}
      />
    </SafeAreaView>
  );
};

export default ProfileComponent;
