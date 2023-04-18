import React from 'react';
import '../../App.css';
import './ConnectPage.css';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

const ConnectPage = () => {

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/register");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <div className='central'>
        <div
          className='login'
        >
            <a href='#' onClick={(e)=>handleLogin(e)}>LOGIN</a>
        </div>
        <div
          className='signup'
        >
           <a href='#' onClick={(e)=>handleSignup(e)}>SIGNUP</a>
        </div>
    </div>
  );
}

export default ConnectPage;
