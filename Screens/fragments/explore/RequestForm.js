/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import {
    Dropdown,
}
    from 'react-native-material-dropdown';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions,ScrollView} from 'react-native';
import {Icons} from '../Icons';
import {styles as Input} from '../profile/AccountDetails';
import ModalDropdown from 'react-native-modal-dropdown';

import FuneralService from './FuneralService';
import CelebrateBirthday from './CelebrateBirthday';

import ChildDedication from './ChildDedication';
import HouseDedication from './HouseDedication';
import WaterBaptism from './WaterBaptism';
import ThanksGiving from './ThanksGiving';
import MemorialServices from './MemorialServices';

import RequestSent from './RequestSent';


const {width} = Dimensions.get('window');
const RequestForm = ({navigation}) => {

    const options = ['Request Funeral Services', 'Celebrate Birthday', 'Child Dedications', 'House Dedications', 'Water Baptism', 'Thanks Giving', 'Memorial Services'];
    const [index,setIndex] = useState(0);
    const [show,setShow] = useState(false);



    return (<View style={{ backgroundColor: '#0F0F0F', flex: 1,flexDirection: 'column',alignItems:'center',paddingBottom:30}}>

        <TouchableOpacity
        // provide navigate path
            onPress={() => navigation.navigate('Explore')}
        >

        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 12,
            margin: 2.5,
            marginVertical: 15,
            alignSelf:'flex-start',
            width:width,
        }}>
            <View>
            <Icons.MaterialIcons name="arrow-back-ios" size={27} color="white" />
            </View>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '400' }}>Account Details</Text>
        </View>
            </TouchableOpacity>


        <View style={{flexDirection: 'column',alignItems:'center'}}>
            <Text style={{ color: 'white',marginVertical:10,alignSelf:'flex-start'}}>Choose the Service</Text>
            <ModalDropdown
            options={options}
            style={[styles.input]}
            defaultIndex={index}
            defaultValue={options[index]}
            textStyle={{color: 'white',marginVertical:10}}
            dropdownStyle={styles.dropdownStyle}
            isFullWidth={true}
            dropdownTextStyle={styles.dropdownTextStyle}
            dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
            onSelect={(e)=>{
                console.log(e);
                setIndex(e);
            }}

             />
        </View>


        <Text style={[{ color: 'white',marginVertical:10,marginTop:20},styles.texts]}>We need some details</Text>
        
        <GetForm index={index} setShow={setShow}/>       
        {
            show &&
            <RequestSent setShow={setShow} />
        }

    </View>
    );
};


const GetForm = ({index})=>{

    if (index === 0){
        return <FuneralService />;
    }

    if (index === 1){
        return <CelebrateBirthday />;
    }


    if (index === 2){
        return <ChildDedication />;
    }

    if (index === 3){
        return <HouseDedication />;
    }
    if (index === 4){
        return <WaterBaptism />;
    }
    if (index === 5){
        return <ThanksGiving />;
    }
    if (index === 6){
        return <MemorialServices />;
    }
};



const boxWidth = width * 0.9;

const styles = StyleSheet.create({
    chatSupportBtn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F79D16',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#fff',
        width:(width * 0.92),
    },
    loginText: {
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
    },
    input: {
        borderColor: '#343739',
        borderWidth: 1,
        color: 'white',
        width:(width * 0.92),
        padding:4,
        marginVertical:5,
     },
     dropdownTextStyle:{
        color: '#808080',
        backgroundColor: '#0F0F0F',
        borderColor: '#343739',
        borderWidth: 0,
     },
     dropdownTextHighlightStyle:{
        color: 'white',
     },
     texts:{
        width:(width * 0.92),
     },
    // dropdownStyle:{
    //     width:width,
    //     margin:0,
    //     backgroundColor:'transparent',
    // }
});

export {styles};

export default RequestForm;
