import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context';
export const Login = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuthContext();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(isLoggedIn,"from login useeffect")
        if(isLoggedIn){
            const { from } = location.state || { from: { pathname: "/" } }
            navigate(from);
        }
    },[])
    const loginUser = () => {
      setIsLoggedIn(true);
    }
    return(
      <button onClick={loginUser}>Login</button>
    )
  }