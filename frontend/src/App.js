import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Videos } from "./pages";
import { Sidebar } from "./components";
import { PrivateRoute } from './PrivateRoute';
import { useAuthContext } from './context';
const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const loginUser = () => {
    setIsLoggedIn(true);
  }
  return(
    <button onClick={loginUser}>Login</button>
  )
}
const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const [ resp, setResp ] = useState("");
  // useEffect(() => {
  //   axios.get("http://localhost:3000/")
  //   .then(res => {
  //     console.log(res.data);
  //     setResp(res.data);
  //  })

  // },[])




  return (
    <div className="App" class="flex">
      <Sidebar/>
      <Routes>
        {/* <Route path='/' element={<PrivateRoute/>}>
          <Route path="" element={<Videos/>}/>  
        </Route> */}
        <Route path="/" element={<Videos/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

