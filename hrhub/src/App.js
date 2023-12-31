
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Attendence from './components/AttendenceComponent/Attendence';
import LayoutContainer from './Layout/LayoutContainer';
import Profile from './components/HomeComponent/DashboardContent/Profile/Profile';
import Details from './components/HomeComponent/DashboardContent/Details/Details';
import Skills from './components/HomeComponent/DashboardContent/Skills/Skills';
import Documents from './components/HomeComponent/DashboardContent/Documents/Documents';
import Education from './components/HomeComponent/DashboardContent/Education/Education';
import Family from './components/HomeComponent/DashboardContent/Family/Family';
import OrganizationChart from './pages/OrganizationChart/OrganizationChart';
import HomeLayout from './Layout/HomeLayout/HomeLayout';
import { AttendenceProvider } from './Context';
import Bank from './components/HomeComponent/DashboardContent/Bank/Bank';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <div className="App">
      <AttendenceProvider>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<LayoutContainer/>}>
            <Route index element={<Dashboard/>} />
            <Route path='/home' element={<HomeLayout/>}>
              <Route path='/home/profile' element={<Profile/>}/>
              <Route path="/home/details" element={<Details/>}/>
              <Route path="/home/skills" element={<Skills/>}/>
              <Route path="/home/documents" element={<Documents/>}/>
              <Route path="/home/education" element={<Education/>}/>
              <Route path="/home/family" element={<Family/>}/>
              <Route path="/home/bank" element={<Bank/>}/>
            </Route>
            <Route path="/attendence" element={<Attendence/>}></Route>
            <Route path="/organizationchart" element={<OrganizationChart/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
          </Route>
        </Routes>
      </AttendenceProvider>
      <ToastContainer/>
    </div>
  );
}

export default App;
