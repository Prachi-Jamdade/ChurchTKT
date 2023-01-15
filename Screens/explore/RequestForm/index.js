/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import Icon, {Icons} from '../../fragments/Icons';
import ModalDropdown from 'react-native-modal-dropdown';
import FuneralService from './FuneralService';
import CelebrateBirthday from './CelebrateBirthday';
import ChildDedication from './ChildDedication';
import HouseDedication from './HouseDedication';
import WaterBaptism from './WaterBaptism';
import ThanksGiving from './ThanksGiving';
import MemorialServices from './MemorialServices';
import RequestSent from './RequestSent';
import gobalStyle from '../../styles/index';
import {sendFom} from '../../api/requestForms';
import {checkObj} from '../../utils/obj';
import {AppContext} from '../../../context';
import LoginAlert from '../../custom/LoginAlert';
import {useContext} from 'react';
import OrganizeWedding from './OrganizeWeddings';

const {width} = Dimensions.get('window');
const RequestForm = ({navigation}) => {
  const {setAlert, isUserLogin} = useContext(AppContext);
  const [showAlert, setShowAlert] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    if (!isUserLogin) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, []);
  useEffect(() => {
    setIsFirstTime(true);
  }, [navigation]);

  const options = [
    'Water Baptism',
    'Thanks Giving',
    'Child Dedications',
    'Organize Weddings',
    'Memorial Services',
    'House Dedications',
    'Celebrate Birthday',
    'Request Funeral Services',
  ];
  const optionIcons = [
    {type: Icons.MaterialCommunityIcons, name: 'water-plus'},
    {type: Icons.AntDesign, name: 'heart'},
    {type: Icons.MaterialCommunityIcons, name: 'human-male-child'},
    {type: Icons.FontAwesome5, name: 'ring'},
    {type: Icons.MaterialCommunityIcons, name: 'candle'},
    {type: Icons.Octicons, name: 'home'},
    {type: Icons.FontAwesome5, name: 'birthday-cake'},
    {type: Icons.Entypo, name: 'awareness-ribbon'},
  ];

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const submit = (data, setData, intitial) => {
    if (loading) return;
    const isOK = checkObj(data);
    if (!isOK) {
      return setAlert('error', 'All fields are mandatory');
      // return alert('All fields are mandatory');
    }
    if (data?.phoneNumber) {
      if (data.phoneNumber.length !== 10) {
        return setAlert('error', 'Enter valid phone number');
      }
    }
    setLoding(true);
    sendFom(data)
      .then(res => {
        // console.log(res);
        setData(intitial);
        setShow(true);
      })
      .catch(e => {
        console.log(e);
        return setAlert('error', 'Something went wrong, try again');
        // alert('Something went wrong, Try again');
      })
      .finally(() => {
        setLoding(false);
      });
  };

  return (
    <KeyboardAvoidingView
      keyboardShouldPersistTaps="never"
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <SafeAreaView
        style={{
          backgroundColor: '#0F0F0F',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: 30,
        }}>
        <TouchableOpacity
          // provide navigate path
          onPress={() => navigation.navigate('Explore')}
          style={{alignSelf: 'flex-start'}}>
          <SafeAreaView style={[gobalStyle.nav, {alignSelf: 'flex-start'}]}>
            <SafeAreaView style={gobalStyle.nav_image}>
              <Icons.MaterialIcons
                name="arrow-back-ios"
                size={24}
                color="white"
              />
            </SafeAreaView>
            <Text style={gobalStyle.nav_header}>Request Forms</Text>
          </SafeAreaView>
        </TouchableOpacity>

        {showAlert && (
          <LoginAlert
            navigation={navigation}
            setShow={setShowAlert}
            isDisable={true}
            prevScreen="Explore"
          />
        )}

        <SafeAreaView
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}>
          {/* <Text style={{ color: 'white', marginVertical: 10, alignSelf: 'flex-start', fontSize: 16, fontFamily: 'Montserrat-Medium' }}>Choose the Service</Text> */}

          <Icon
            type={Icons.MaterialIcons}
            name="keyboard-arrow-down"
            size={26}
            style={styles.arrow}></Icon>
          <ModalDropdown
            options={options}
            style={[styles.input]}
            defaultValue={'Choose a Service'}
            textStyle={{
              color: 'white',
              marginVertical: 10,
              fontSize: 16,
              fontFamily: 'Montserrat-Medium',
              marginStart: 10,
            }}
            dropdownStyle={styles.dropdownStyle}
            isFullWidth={true}
            borderRadius={5}
            dropdownTextStyle={styles.dropdownTextStyle}
            dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
            onSelect={e => {
              setIsFirstTime(false);
              setIndex(e);
            }}
            renderRow={(option, Index, isSelected) => {
              const item = optionIcons[Index];
              return (
                <SafeAreaView
                  style={[
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 10,
                      paddingHorizontal: 5,
                      backgroundColor: '#0F0F0F',
                      borderWidth: 1,
                      borderColor: '#343739',
                    },
                  ]}>
                  <Icon
                    type={item?.type}
                    name={item?.name}
                    size={22}
                    style={[
                      {padding: 3},
                      !isSelected
                        ? styles.dropdownTextStyle
                        : styles.dropdownTextHighlightStyle,
                    ]}
                  />

                  <Text
                    style={[
                      {marginLeft: 10, fontSize: 16},
                      !isSelected
                        ? styles.dropdownTextStyle
                        : styles.dropdownTextHighlightStyle,
                    ]}>
                    {option}
                  </Text>
                </SafeAreaView>
              );
            }}
          />
        </SafeAreaView>

        <SafeAreaView
          style={{
            flex: 2,
            marginTop: 100 / 5,
            paddingVertical: 8,
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#161616',
            borderRadius: 20,
          }}>
          {!isFirstTime && (
            <>
              <Text
                style={[
                  {
                    color: 'white',
                    marginStart: 15,
                    marginTop: 1,
                    padding: 2,
                    fontSize: 16,
                    fontFamily: 'Montserrat-Medium',
                  },
                  styles.texts,
                ]}>
                We need some details
              </Text>
              <GetForm
                index={index}
                setShow={setShow}
                submit={submit}
                loading={loading}
              />
            </>
          )}
          {show && <RequestSent setShow={setShow} />}
        </SafeAreaView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const GetForm = ({index, setShow, submit, loading}) => {
  if (index === 0) {
    return <WaterBaptism setShow={setShow} submit={submit} loading={loading} />;
  }

  if (index === 1) {
    return <ThanksGiving setShow={setShow} submit={submit} loading={loading} />;
  }

  if (index === 2) {
    return (
      <ChildDedication setShow={setShow} submit={submit} loading={loading} />
    );
  }

  if(index === 3) {
    return(
      <OrganizeWedding setShow={setShow} submit={submit} loading={loading} />
    )
  }

  if (index === 4) {
    return (
      <MemorialServices setShow={setShow} submit={submit} loading={loading} />
    );
  }

  if (index === 5) {
    return (
      <HouseDedication setShow={setShow} submit={submit} loading={loading} />
    );
  }
  if (index === 6) {
    return (
      <CelebrateBirthday setShow={setShow} submit={submit} loading={loading} />
    );
  }
  if (index === 7) {
    return (
      <FuneralService setShow={setShow} submit={submit} loading={loading} />
    );
  }
};

const boxWidth = width * 0.9;

const styles = StyleSheet.create({
  chatSupportBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F79D16',
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor: '#fff',
    textTransform: 'uppercase',
    width: width * 0.92,
  },
  loginText: {
    fontSize: 18.5,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    color: 'white',
  },
  arrow: {
    position: 'absolute',
    right: 10,
    bottom: 15,
  },
  input: {
    borderColor: '#343739',
    borderWidth: 1,
    color: 'white',
    width: width * 0.9,
    padding: 4,
    marginVertical: 5,
    fontFamily: 'Montserrat-Medium',
  },
  dropdownTextStyle: {
    color: '#808080',
    backgroundColor: '#0F0F0F',
    borderColor: '#343739',
    borderWidth: 0,
    fontFamily: 'Montserrat-Medium',
  },
  dropdownTextHighlightStyle: {
    color: 'white',
  },
  texts: {
    width: width * 0.92,
  },
  dropdownStyle: {
    height: 360,
    backgroundColor: '#000',
  },
});

export {styles};

export default RequestForm;
