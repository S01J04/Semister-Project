import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import Login from "./components/Login.jsx";
import Contact from "./components/Contact.jsx";
import About from './components/About.jsx';
import Location from './components/Location.jsx';
import Specificlocation from './components/Specificlocation.jsx';
import { SignInAdmin } from './components/admin/Login.jsx';
import Admin from './components/admin/Admin.jsx';
import Dashboard from './components/admin/Dashboard.jsx';
import Billboards from './components/admin/Billboards.jsx';
import Campaign from './components/admin/Campaign.jsx';
import Analytics from './components/admin/Analytics.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AppWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search-results/:statename" element={<Location />} />
          <Route path="billboards/:_id" element={<Specificlocation />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<SignInAdmin />} />
        
        <Route path="/admindashboard" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="/admindashboard/Billboards" element={<Billboards />} />
          <Route path="/admindashboard/Campaign" element={<Campaign />} />
          <Route path="/admindashboard/Analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
