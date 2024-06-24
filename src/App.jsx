
// Router
import {Routes, Route} from 'react-router-dom' 

// Global Styling
import './App.css'

// auth
import Sign from "./pages/Sign/Sign"
import LogOut from "./pages/settings/logOut";

// home
import Forum from "./pages/Forum"
import Home from "./pages/home/Home.jsx"

// profile
import Profile from "./pages/profile/Profile"
import History from "./pages/profile/History";
import Feedback  from "./pages/profile/Feedback";
import NotFound from "./pages/errors/NotFound";
import Agenda from "./pages/profile/Agenda";
import Project from './pages/project/Project.jsx';
import ProjectAdd from './pages/project/ProjectAdd.jsx';
import Invitation from './pages/project/Invitation.jsx';
import ProjectView from './pages/project/ProjectView.jsx';

// notifications
import Notifications from "./pages/notifications/Notifications.jsx";

// Layout
import MainLayout from "./layouts/MainLayout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/login" element={<Sign/>}/>
        <Route path="/logout" element={<LogOut/>}/>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<Project/>}/>
          <Route path="/home" element={<Project/>}/>
          <Route path="/projects" element={<Project/>}/>        
          <Route path="/projects/add" element={<ProjectAdd/>}/>
          <Route path="/projects/view" element={<ProjectView/>}/>
          <Route path="/projects/inviter" element={<Invitation/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/profile" element={<Profile/>}>
              <Route path="" element={<History/>}/>
              <Route path="history" element={<History/>}/>
              <Route  path="feedback" element={<Feedback/>}/>
              <Route  path="agenda" element={<Agenda/>}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
