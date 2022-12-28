import React,{useEffect,useContext} from 'react';
import Video from 'react-native-video';
import { AppContext } from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen =({navigation})=>{
    
    useEffect(()=>{
        setTimeout(() => {
            AsyncStorage.getItem('user').then((value)=>{
                // console.log(value);
                if(value===null || value == 'null') {    
                AsyncStorage.getItem('guestLogin').then((value)=>{
                        // console.log(value);
                        if(value===null || value == 'null') {    
                        navigation.navigate('Onboarding');
                        return;
                        }
                        navigation.navigate('BottomTabs');
                })
                return;
                }
                navigation.navigate('BottomTabs');
            })
        },5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <Video style = {{flex:1, backgroundColor:'black'}}
        source = {require('../assests/splash.mp4')}
        resizeMode = 'contain' />
    );   
}

export default SplashScreen;
