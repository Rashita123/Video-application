import { useAuthContext } from '../context';
export const Login = () => {
    const { setIsLoggedIn } = useAuthContext();
    const loginUser = () => {
      setIsLoggedIn(true);
    }
    return(
      <button onClick={loginUser}>Login</button>
    )
  }