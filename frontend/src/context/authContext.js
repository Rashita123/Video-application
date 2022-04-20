import { useContext, createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    useEffect(()=>{
        if(isLoggedIn){
            const { from } = location.state || { from: { pathname: "/" } }
            navigate(from);
        }
        
    },[isLoggedIn])
    
    return <authContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
    </authContext.Provider>
}

export const useAuthContext = () => {
    return useContext(authContext);
}