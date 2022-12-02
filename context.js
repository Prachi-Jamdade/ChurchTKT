import { useState } from 'react';
import { createContext } from 'react';
const AppContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';

function AppContextProvider({children}) {
	const [ user, setUser ] = useState(null);
	const [ isUserLogin, setUserLogin ] = useState(false);

    function clear(){
        setUser(null);
        setUserLogin(false);
        AsyncStorage.clear();
    }
	
	return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <AppContext.Provider value={
            { 
            user,
            setUser,
            isUserLogin,
            setUserLogin,
            clear
            }
            }>
            {children}
        </AppContext.Provider>
	);
}

export {AppContext};
export default AppContextProvider;