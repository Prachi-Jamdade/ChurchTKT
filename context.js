import { useState } from 'react';
import { createContext } from 'react';
const AppContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAllHomeEvent} from './Screens/api/home';


function AppContextProvider({children}) {
	const [ user, setUser ] = useState(null);
	const [ homeEvents, setHomeEvents ] = useState([]);
	const [ isUserLogin, setUserLogin ] = useState(false);

    function clear(){
        setUser(null);
        setUserLogin(false);
        AsyncStorage.clear();
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