import React, { useContext, useState } from "react";
import { BrowserRouter ,Routes ,Route, Navigate } from 'react-router-dom';
import './App.css';
import Auth from "./components/auth";
import DonorDashboard from "./components/Donor/DonorDashboard/DonorDashboard";
import DonorForm from "./components/Donor/DonorForm/DonorForm";
import AgentForm from "./components/Agent/AgentForm/AgentForm";
import AgentDashboard from "./components/Agent/AgentDashboard/AgentDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import Home from "./components/Home/pages/Home";
import Services from "./components/Home/pages/Services";
import Products from "./components/Home/pages/Products";
import SignUp from "./components/Home/pages/SignUp";

const App = (props) => {


    return(
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/donorDashboard" element={<DonorDashboard />} />
          <Route path="/donorForm" element={<DonorForm />} />
          <Route path="/agentForm" element={<AgentForm />} />
          <Route path="/agentDashboard" element={<AgentDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
