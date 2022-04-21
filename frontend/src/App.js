import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Videos, Video, Login } from "./pages";
import { Sidebar } from "./components";
import { PrivateRoute } from './PrivateRoute';
const App = () => {
  return (
    <div className="App" class="flex">
      <Sidebar/>
      <Routes>
        {/* <Route path='/videos' element={<PrivateRoute/>}>
          <Route path="" element={<Videos/>}/>  
        </Route> */}
        {/* <Route path='/home' element={<PrivateRoute/>}>
          <Route path="" element={<Videos/>}/>  
        </Route> */}
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/videos/:id" element={<Video/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

