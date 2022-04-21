import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Videos, Login } from "./pages";
import { Sidebar } from "./components";
import { PrivateRoute } from './PrivateRoute';
const App = () => {
  return (
    <div className="App" class="flex">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<PrivateRoute/>}>
          <Route path="" element={<Videos/>}/>  
        </Route>
        {/* <Route path='/home' element={<PrivateRoute/>}>
          <Route path="" element={<Videos/>}/>  
        </Route> */}
        {/* <Route path="/" element={<Videos/>}/> */}
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

