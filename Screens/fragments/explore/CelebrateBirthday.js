import React,{useState} from 'react';
import {View,TouchableOpacity,Text,ScrollView} from 'react-native';
import RequestFormDetail from './RequestFormDetail';
import {styles} from './RequestForm';
import {sendFom} from '../../api/requestForms'

const CelebrateBirthday = ({setShow,submit}) => {

    const intitial={
        formType:'birthday',
	    name:'',
		fatherName:'',
		motherName:'',
		phoneNumber:'',
		address:'',
		eventDate:'',
		eventTime:'',
    }

    const [data,setData]=useState(intitial);

    const setValue=(name,value)=>{
        setData({...data,[name]:value})
    }

    return (
        <>
        <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>

            <RequestFormDetail
                autoCompleteValue={'name'}
                placeholderName={'Name of Birthday Person'}
                type="text"
                name={'name'}
                value={data.name}
                setValue={setValue}
             />

            <RequestFormDetail
                autoCompleteValue={'name'}
                placeholderName={"Father's Name"}
                type="text"
                name="fatherName"
                value={data.fatherName}
                setValue={setValue}
             />

            <RequestFormDetail
                autoCompleteValue={'name'}
                placeholderName={"Mother's Name"}
                type="text"
                name="motherName"
                value={data.motherName}
                setValue={setValue}
             />

            <RequestFormDetail
                autoCompleteValue={'birthdate-full'}
                placeholderName={'Birthday Date'}
                type="date"
                value={data.eventDate}
                name="eventDate"
                setValue={setValue}
             />

            <RequestFormDetail
                placeholderName={'Prefered celebration time'}
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
            <View style={{flexDirection: 'column',alignItems:'center'}}>
                <TouchableOpacity style={styles.chatSupportBtn}
                // provide navigate path
                onPress={()=>submit(data,setData,intitial)}
                underlayColor="#fff"
                >
                    <Text style={styles.loginText}>Continue</Text>
                </TouchableOpacity>
            </View>
            </>
    );
};

export default CelebrateBirthday;