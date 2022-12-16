import { useState } from 'react';
import { createContext } from 'react';
const AppContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllHomeEvent} from './Screens/api/home';
import {getLiveEvent,getDailyDose} from './Screens/api/explore';


function AppContextProvider({children}) {
	const [ user, setUser ] = useState(null);
	const [ homeEvents, setHomeEvents ] = useState([]);
	const [ videoLink, setVideoLink ] = useState([
        {
        "videoId":"1nTd931luNM",
        },
        {
        "videoId":"1nTd931luNM",
        },
        {
        "videoId":"1nTd931luNM",
        },
]);
	const [ isUserLogin, setUserLogin ] = useState(false);

    function clear(navigation){
        AsyncStorage.clear().then(()=>{
            // console.log('clear...');
            setUser(null);
            setUserLogin(false);
            navigation.navigate('Onboarding',{isLogout:true});
        }).catch((e)=>{
            // console.log(e);
        })
    }

    async function getHomeEvent(){
        const data=await getAllHomeEvent();
        setHomeEvents([...data,...data,...data,...data]);
        // let video=await getLiveEvent();
        // if(!video?.sourceUrl){
        //     video=await getDailyDose();   
        // }
        // console.log(video);
        // if(!video?.sourceUrl){
        //     return;
        // }
        // const list=video?.sourceUrl.split("/");
        // const videoId=list[list.length-1];
        // setVideoLink([{videoId}]);
    }
    
	return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <AppContext.Provider value={
            { 
            user,
            setUser,
            setUserLogin,
            clear,
            getHomeEvent,
            homeEvents,
            isUserLogin,
            videoLink
            }
            }>
            {children}
        </AppContext.Provider>
	);
}

export {AppContext};
export default AppContextProvider;