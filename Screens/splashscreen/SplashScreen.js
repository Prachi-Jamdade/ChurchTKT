import React,{useEffect} from 'react';
import Video from 'react-native-video';


const SplashScreen =({navigation})=>{

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Launch');
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
