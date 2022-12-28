import React,{useState} from 'react';
import {View,TouchableOpacity,Text,ScrollView, SafeAreaView} from 'react-native';
import RequestFormDetail from './RequestFormDetail';
import {styles} from './RequestForm';

const FuneralService = ({setShow,submit}) => {

    const intitial = {
        formType:'funeral',
	    name:'',
		motherName:'',
		address:'',
		eventDate:'',
        phoneNumber:'',
        dob:'',
        dod:'',
        tod:'',
        eventTime:''
    };


    const [data,setData] = useState(intitial);

    const setValue = (name,value)=>{
        setData({...data,[name]:value});
    };

  


    return(
        <>
        <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>

            <RequestFormDetail
                autoCompleteValue={'name'}
                placeholderName={'Name of deceased person'}
                type="text"
                name={'name'}
                value={data.name}
                setValue={setValue}
             />

            <RequestFormDetail
                autoCompleteValue={'birthdate-full'}
                placeholderName={'Date of Birth'}
                type="date"
                value={data.dob}
                name="dob"
                setValue={setValue}
            />

            <RequestFormDetail
                autoCompleteValue={'birthdate-full'}
                placeholderName={'Death Date'}
                type="date"
                value={data.dod}
                name="dod"
                setValue={setValue}
            />

            <RequestFormDetail
                placeholderName={'Time of Death'}
                type="time"
                value={data.tod}
                setValue={setValue}
                name="tod"
             />

            <RequestFormDetail
                autoCompleteValue={'Funeral Date'}
                placeholderName={'Funeral Date'}
                type="date"
                value={data.eventDate}
                name="eventDate"
                setValue={setValue}
             />

            <RequestFormDetail
                placeholderName={'Funeral Time'}
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

        <SafeAreaView style={{flexDirection: 'column',alignItems:'center'}}>
                <TouchableOpacity style={styles.chatSupportBtn}
                // provide navigate path
                onPress={()=>submit(data,setData,intitial)}
                underlayColor="#fff"
                >
                    <Text style={styles.loginText}>Continue</Text>
                </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}

export default FuneralService;