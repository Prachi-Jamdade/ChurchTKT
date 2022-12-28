import { useState } from 'react';
import { createContext } from 'react';
const AppContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllHomeEvent} from './Screens/api/home';
import {getLiveEvent} from './Screens/api/explore';
import {getAllDaiyMana} from './Screens/api/home';
import { Text } from 'react-native-animatable';
import RNRestart from 'react-native-restart'; 
import DisplayView from './Screens/custom/DialogView'


function AppContextProvider({children}) {
	const [ user, setUser ] = useState(null);
	const [ homeEvents, setHomeEvents ] = useState([]);
	const [ profileUrl, setProfileUrl ] = useState(null);
	const [ videoLink, setVideoLink ] = useState([
        {
        "videoId":"vqzqb6Jz29A",
        }
    ]);
	const [ isUserLogin, setUserLogin ] = useState(false);

    const [dialog, setDialogDescription] = useState(null);

    async function clear(navigation){
        try{
            await AsyncStorage.clear();
            setUser(null);
            setUserLogin(false);
            // navigation.navigate('Onboarding',{isLogout:true});
            RNRestart.Restart();
        }catch(e){
            console.log(e);
        }
    }

    function setAlert(status, description) {
        setDialogDescription({status: status, description: description});
        setTimeout(() => {
            setDialogDescription(null);
        }, 5000);
    }

    async function getHomeEvent(){
        const data=await getAllHomeEvent();
        setHomeEvents([...data]);
        let video1=await getLiveEvent();
        const list=await getAllDaiyMana();
        let newVideo=list.map((item)=>{return {videoId:find(item.sourceUrl)}});
        if(video1?.sourceUrl){
            newVideo=[{videoId:find(video1?.sourceUrl)},...newVideo]
        }
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
            setAlert,
            user,
            homeEvents,
            isUserLogin,
            videoLink,
            profileUrl
            }
            }>
            {children}
            {
                dialog && <DisplayView {...dialog} />
            }
        </AppContext.Provider>
	);
}

export {AppContext};
export default AppContextProvider;