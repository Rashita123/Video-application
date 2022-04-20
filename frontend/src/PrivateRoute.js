import { useNavigate, Outlet, useLocation} from "react-router-dom";
import { useAuthContext } from "./context";
export const PrivateRoute = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn } = useAuthContext();
    return isLoggedIn ? <Outlet/> : navigate( '/login',  { state: { from: location } });
}