import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Card from './components/Cards/Card'
import BoxSection from './components/Box/Box'
import LeftSection from './components/LeftSection/LeftSection'
import Home from './pages/basic pages/Home'
import {Routes,Route} from "react-router-dom" 
import Signup from "./authcomponents/Signup.jsx"
import Adminpanel from './adminpanel/Adminpanel.jsx'
import Login from './authcomponents/Login.jsx'
import  Application  from './adminpanel/Application.jsx'
import Getlawyers from './adminpanel/Getlawyers.jsx'
import Createcontent from './adminpanel/Createcontent.jsx'
function App() {


  return (
    <>

  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/signup' element={<Signup/>}></Route>
<Route path='/admin-panel' element={<Adminpanel/>}>
</Route>
  <Route path='/login' element={<Login/>}> </Route>
<Route path='/application' element={<Application/>}></Route>
<Route path='/getlawyer' element={<Getlawyers/>}/>
<Route path='/createpost' element={<Createcontent/>}/>
  </Routes>  
  </>





  );
}

export default App
