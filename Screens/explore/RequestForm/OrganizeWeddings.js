import React, {useState} from 'react';
import {TouchableOpacity, Text, ScrollView, SafeAreaView} from 'react-native';
import RequestFormDetail from './RequestFormDetail';
import {styles} from '.';
import BtnAnimation from '../../fragments/Btn';

const OrganizeWedding = ({setShow, submit, loading}) => {
  const intitial = {
    formType: 'memorial',
    name: '',
    dob: '',
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
          placeholderName={'Bride / Groom Name'}
          type="text"
          name={'name'}
          value={data.name}
          setValue={setValue}
        />

        <RequestFormDetail
          autoCompleteValue={'name'}
          placeholderName={"Father's Name"}
          type="text"
          name={'name'}
          value={data.name}
          setValue={setValue}
        />

        <RequestFormDetail
          autoCompleteValue={'name'}
          placeholderName={"Mother's Name"}
          type="text"
          name={'name'}
          value={data.name}
          setValue={setValue}
        />

        <RequestFormDetail
          autoCompleteValue={'birthdate-full'}
          placeholderName={'Date of Marriage'}
          type="date"
          value={data.dob}
          name="dob"
          setValue={setValue}
        />

        <RequestFormDetail
          placeholderName={'Event Date'}
          type="date"
          value={data.eventDate}
          name="eventDate"
          setValue={setValue}
        />

        <RequestFormDetail
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

export default OrganizeWedding;
