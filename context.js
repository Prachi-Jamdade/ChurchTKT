import { useState } from 'react';
import { createContext } from 'react';
const AppContext = createContext();

function AppContextProvider({children}) {
	const [ users, setUsers ] = useState({name:'zeel'});
	
	return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <AppContext.Provider value={{ users,setUsers }}>
            {children}
        </AppContext.Provider>
	);
}

export {AppContext};
export default AppContextProvider;