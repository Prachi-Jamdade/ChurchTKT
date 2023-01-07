import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import gobalStyle from '../styles/index.js';
import Icon, {Icons} from '../fragments/Icons';
const {width} = Dimensions.get('window');

const DialogView = ({status, description}) => {
  return (
    <SafeAreaView
      style={[
        {
          position: 'absolute',
          left: 0,
          right: 0,
          marginTop: RFValue(10),
          marginBottom: RFValue(20),
          paddingHorizontal: RFValue(20),
          paddingVertical: RFValue(12),
          backgroundColor: '#FFBE18',
          borderRadius: RFValue(8),
          borderWidth: 1,
          width: width * 0.92,
          marginHorizontal: RFValue(16),
        },
        {
          backgroundColor: status == 'success' ? '#339033' : '#C22626',
          marginBottom: RFValue(85),
          paddingVertical: RFValue(10),
          position: 'absolute',
          top: RFValue(0),
        },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          type={status == 'success' ? Icons.AntDesign : Icons.MaterialIcons}
          name={status == 'success' ? 'checkcircleo' : 'error-outline'}
          size={25}
          style={{color: 'white', padding: RFValue(3), marginEnd: RFValue(3)}}
        />
        <Text
          style={[
            gobalStyle.submitText,
            {fontSize: RFValue(13), textTransform: null},
          ]}>
          {description}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DialogView;
