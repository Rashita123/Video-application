import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuthContext } from "./context";
export const PrivateRoute = () => {
    const location = useLocation();
    const { isLoggedIn } = useAuthContext();
    return isLoggedIn ? <Outlet/> : <Navigate to="/login" state={{from: location}}/>;
}