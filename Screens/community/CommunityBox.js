import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {styles} from './index';
import Icon, {Icons} from '../fragments/Icons';
import gobalStyle from '../styles/index';
import {RFValue} from 'react-native-responsive-fontsize';
import {Linking} from 'react-native';

const CommunityBox = ({
  navigation,
  image,
  title,
  description,
  setIndex,
  about,
  SendWhatsApp,
  msg,
  phoneNumber,
}) => {
  const [active, setActive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide =
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
    if (slide !== active) {
      setActive(slide);
    }
  };

  function SendWhatsApp(msg, phoneWithCountryCode) {
    let mobile =
      Platform.OS == 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;
    if (phoneWithCountryCode) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      }
    }
  }
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  }, []);

  // const backBtnHandler = () => {
  //     navigation.navigate('Community');
  // }

  // useEffect(() => {
  //     const backHandler = BackHandler.addEventListener("hardwareBackPress", backBtnHandler);

  //     return () => {
  //       backHandler.removeEventListener("hardwareBackPress", backBtnHandler);
  //     };
  //   }, [backBtnHandler]);

  return (
    <SafeAreaView style={gobalStyle.main}>
      <TouchableOpacity
        style={{zIndex: 999}}
        onPress={() => {
          setIndex(-1);
        }}>
        <Text
          style={[
            gobalStyle.header,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <View>
            <Icon
              type={Icons.MaterialIcons}
              size={24}
              name="arrow-back-ios"
              color="white"
              style={{marginStart: RFValue(3), marginBottom: RFValue(4)}}
            />
          </View>
          <View>
            <Text style={gobalStyle.nav_header}>{title}</Text>
          </View>
        </Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={change}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          {image.map((image, index) => (
            <Image key={index} source={image} style={styles.images} />
          ))}
        </ScrollView>

        <View style={styles.pagination}>
          {image.map((i, k) => (
            <Text
              key={k}
              style={
                k === active ? styles.pagingActive : styles.pagingText
              }></Text>
          ))}
        </View>
      </View>

      <SafeAreaView style={styles.BigBox}>
        <Text style={[styles.headerInfo, {alignSelf: 'flex-start'}]}>
          {title}
        </Text>
        <ScrollView>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.DescriptionText}>{about}</Text>
            {/* <Text style= {[styles.DescriptionText,{alignSelf: 'flex-start'}]}> 
                    More Info
                </Text> */}
            {/* <Image
                    source = {moreInfo}
                    style = {styles.imagesAbout} 
                    /> */}
            <TouchableHighlight
              style={[
                styles.submit,
                {
                  backgroundColor: '#FFBE18',
                  marginTop: RFValue(20),
                  marginStart: RFValue(10),
                  marginEnd: RFValue(10),
                },
              ]}
              underlayColor="#fff"
              onPress={() => {
                if (title == 'Life Groups') {
                  return Linking.openURL('https://forms.gle/uEdkSWBxyB1qnC5S8');
                }
                if (phoneNumber) {
                  SendWhatsApp(msg, phoneNumber);
                } else {
                  Linking.openURL('https://kingstemple.in/echurch-3/');
                }
              }}>
              <Text style={[gobalStyle.submitText]}>JOIN US</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default CommunityBox;
