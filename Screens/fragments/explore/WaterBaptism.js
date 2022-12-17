import React,{useState} from 'react';
import {View,TouchableOpacity,Text,ScrollView} from 'react-native';
import RequestFormDetail from './RequestFormDetail';
import {styles} from './RequestForm';
import {sendFom} from '../../api/requestForms'


const WaterBaptism = ({setShow}) => {

    const intitial={
        formType:'water_baptism',
	    name:'',
		phoneNumber:'',
		address:'',
        dob:'',
    }

    const [data,setData]=useState(intitial);

    const setValue=(name,value)=>{
        setData({...data,[name]:value})
    }

    const submit=()=>{
        // console.log(data)
        sendFom(data).then((res)=>{
            console.log(res);
            setData(intitial)
            setShow(true);
        }).catch((e)=>{
            alert('Something went wrong, try again');
        })
    }



    return(
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
                autoCompleteValue={'birthdate-full'}
                placeholderName={'Date of Birth'}
                type="date"
                value={data.dob}
                name="dob"
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
    )
}

export default WaterBaptism;