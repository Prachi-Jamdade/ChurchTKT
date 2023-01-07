import React, {useState} from 'react';
import {TouchableOpacity, Text, ScrollView, SafeAreaView} from 'react-native';
import RequestFormDetail from './RequestFormDetail';
import {styles} from '.';
import BtnAnimation from '../../fragments/Btn';

const ThanksGiving = ({setShow, submit, loading}) => {
  const intitial = {
    formType: 'thanksgiving',
    name: '',
    phoneNumber: '',
    address: '',
    eventDate: '',
    eventTime: '',
  };

  const [data, setData] = useState(intitial);

  const setValue = (name, value) => {
    setData({...data, [name]: value});
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <RequestFormDetail
          autoCompleteValue={'name'}
          placeholderName={'Name'}
          type="text"
          name={'name'}
          value={data.name}
          setValue={setValue}
        />

        <RequestFormDetail
          autoCompleteValue={'Event-full'}
          placeholderName={'Event Date'}
          type="date"
          value={data.eventDate}
          name="eventDate"
          setValue={setValue}
        />

        <RequestFormDetail
          placeholderName={'Event Time'}
          type="time"
          value={data.eventTime}
          setValue={setValue}
          name="eventTime"
        />

        <RequestFormDetail
          autoCompleteValue={'postal-address'}
          placeholderName={'Address'}
          type="text"
          value={data.address}
          setValue={setValue}
          name="address"
        />

        <RequestFormDetail
          placeholderName={'Contact no.'}
          type="number"
          name="phoneNumber"
          value={data.phoneNumber}
          setValue={setValue}
        />
      </ScrollView>
      <SafeAreaView style={{flexDirection: 'column', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.chatSupportBtn}
          // provide navigate path
          onPress={() => submit(data, setData, intitial)}
          underlayColor="#fff">
          {loading ? (
            <BtnAnimation></BtnAnimation>
          ) : (
            <Text style={styles.loginText}>Continue</Text>
          )}
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default ThanksGiving;
