import { useState } from 'react';
import { createContext } from 'react';
const AppContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllHomeEvent} from './Screens/api/home';


function AppContextProvider({children}) {
	const [ user, setUser ] = useState(null);
	const [ homeEvents, setHomeEvents ] = useState([]);
	const [ isUserLogin, setUserLogin ] = useState(false);

    function clear(navigation){
        AsyncStorage.clear().then(()=>{
            console.log('clear...');
            setUser(null);
            setUserLogin(false);
            navigation.navigate('Onboarding',{isLogout:true});
        }).catch((e)=>{
            console.log(e);
        })
    }

    async function getHomeEvent(){
        const data=await getAllHomeEvent();
        setHomeEvents(data);
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
            }
            }>
            {children}
        </AppContext.Provider>
	);
}

export {AppContext};
export default AppContextProvider;