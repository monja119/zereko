// Pages
import Home from "../page/Home"
import Forum from "../page/Forum"
import Project from "../pages/project/project"
import Event from "../page/Event"
import ProfileSetting from "../page/ProfileSetting"

import LogOut from "../page/settings/logOut"
import Profile from "../page/profile/Profile"

import ProjectAdd from "../pages/project/projectAdd"


export const withLayoutRoutes = [
    { path: "/",component: <Home/>},
    { path: "/forum", component: <Forum/>},
    { path: "/projects",component: <Project/>},
    { path: "/addProject",component: <ProjectAdd/>},
    { path: "/events",component: <Event/>},
    { path: "/settings",component: <ProfileSetting/>},
    { path: "/profile",component: <Profile/>},
    // log out
    { path: "/logout",component: <LogOut/>},

]
