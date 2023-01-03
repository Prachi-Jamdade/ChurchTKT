import React, {useState, useEffect} from 'react';
import gobalStyle from '../styles/index';
import {Linking, Platform} from 'react-native';
import {AppContext} from '../../context';
import {useContext} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  LayoutAnimation,
  Button,
} from 'react-native';

import Icon, {Icons} from '../Icons';

const PrivacyPolicy = ({navigation}) => {
  const {setAlert} = useContext(AppContext);

  return (
    <SafeAreaView style={gobalStyle.main}>
      <SafeAreaView style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <SafeAreaView style={gobalStyle.nav}>
            <SafeAreaView>
              <Icon
                style={{paddingStart: 12}}
                type={Icons.MaterialIcons}
                size={25}
                name="arrow-back-ios"
                color="white"
              />
            </SafeAreaView>
            <Text style={gobalStyle.nav_header}>Help</Text>
          </SafeAreaView>
        </TouchableHighlight>
        <SafeAreaView
          style={{
            backgroundColor: '#1E1E1E',
            borderRadius: 20,
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            marginTop: 10,
          }}></SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 16,
    marginBottom: 30,
    fontFamily: 'Montserrat-Medium',
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontFamily: 'Montserrat-Medium',
    color: 'white',
  },
  item: {
    borderRadius: 20,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  itemText: {
    fontSize: 16,
    color: 'white',
    opacity: 0.7,
    fontFamily: 'Montserrat-Medium',
  },
  content: {
    paddingHorizontal: 10,
    // backgroundColor: '#0F0F0F',
  },
  text: {
    fontSize: 16,
    padding: 10,
    color: 'white',
    opacity: 0.7,
    fontFamily: 'Montserrat-Regular',
  },
  separator: {
    height: 0,
    backgroundColor: '#1E1E1E',
    width: '100%',
  },
  chatSupportBtn: {
    width: 200,
    marginStart: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#F79D16',
    borderRadius: 4,
    borderWidth: 0.3,
    borderColor: '#fff',
  },
  loginText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    color: 'white',
  },
});

export default PrivacyPolicy;
