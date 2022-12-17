import React,{useState} from 'react';
import {View,TouchableOpacity,Text,ScrollView} from 'react-native';
import RequestFormDetail from './RequestFormDetail';
import {styles} from './RequestForm';
import {sendFom} from '../../api/requestForms'

const ChildDedication = ({setShow}) => {

    const intitial = {
        formType:'child_dedication',
	    name:'',
		fatherName:'',
		motherName:'',
		address:'',
		eventDate:'',
        phoneNumber:'',
        dob:''
    };


    const [data,setData] = useState(intitial);

    const setValue = (name,value)=>{
        setData({...data,[name]:value});
    };

    const submit=()=>{
        // console.log(data)
        sendFom(data).then((res)=>{
            console.log(res);
            setData(intitial)
            setShow(true);
        }).catch((e)=>{
            // console.log(e);
            alert('Some thing went Wrong, Try again');
        })
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
                autoCompleteValue={'Date of Birth'}
                placeholderName={'Date of Birth'}
                type="date"
                value={data.dob}
                name="dob"
                setValue={setValue}
            />
            <RequestFormDetail
                autoCompleteValue={'Event Date'}
                placeholderName={'Event Date'}
                type="date"
                value={data.eventDate}
                name="eventDate"
                setValue={setValue}
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
                onPress={submit}
                underlayColor="#fff"
                >
                    <Text style={styles.loginText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default ChildDedication;
