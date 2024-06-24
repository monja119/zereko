import React from 'react'

// Router
import {Routes, Route} from 'react-router-dom' 

// Global Styling
import './App.css'

// pages
import Sign from "./pages/Sign/Sign"
import Home from "./pages/Home/Home.jsx"

// profile
import Forum from "./pages/Forum"
import Profile from "./pages/profile/Profile"
import History from "./pages/profile/History";
import Feedback  from "./pages/profile/Feedback";
import NotFound from "./pages/errors/NotFound";
import LogOut from "./pages/settings/logOut";
import Agenda from "./pages/profile/Agenda";

// Layout
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/login" element={<Sign/>}/>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/forum" element={<Forum/>}/>
            <Route path="/profile" element={<Profile/>}>
                <Route path="" element={<History/>}/>
                <Route path="history" element={<History/>}/>
                <Route  path="feedback" element={<Feedback/>}/>
                <Route  path="agenda" element={<Agenda/>}/>
            </Route>
        </Route>
        <Route path="/logout" element={<LogOut/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
