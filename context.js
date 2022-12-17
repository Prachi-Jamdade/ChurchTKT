import { useState } from 'react';
import { createContext } from 'react';
const AppContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllHomeEvent} from './Screens/api/home';
import {getLiveEvent} from './Screens/api/explore';
import {getAllDaiyMana} from './Screens/api/home';


function AppContextProvider({children}) {
	const [ user, setUser ] = useState(null);
	const [ homeEvents, setHomeEvents ] = useState([]);
	const [ profileUrl, setProfileUrl ] = useState(null);
	const [ videoLink, setVideoLink ] = useState([
        {
        "videoId":"1nTd931luNM",
        }
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
        setHomeEvents([...data]);
        let video1=await getLiveEvent();
        const list=await getAllDaiyMana();
        const newVideo=list.map((item)=>{return {videoId:find(item.sourceUrl)}});
        console.log(newVideo);
        setVideoLink(newVideo);
    }

    function find(sourceUrl){
        const list=sourceUrl.split("/");
        return list[list.length-1];
    }
    
	return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <AppContext.Provider value={
            { 
            setUser,
            setUserLogin,
            clear,
            getHomeEvent,
            setProfileUrl,
            user,
            homeEvents,
            isUserLogin,
            videoLink,
            profileUrl
            }
            }>
            {children}
        </AppContext.Provider>
	);
}

export {AppContext};
export default AppContextProvider;