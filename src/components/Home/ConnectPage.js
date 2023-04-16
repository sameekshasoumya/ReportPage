import React from 'react';
import '../../App.css';
import './ConnectPage.css';
import { Button } from './Button';

function ConnectPage() {
  return (
    <div className='central'>
        <div
          className='login'
        >
            <a href='http://localhost:5000/login'>LOGIN</a>
        </div>
        <div
          className='signup'
        >
           <a href='http://localhost:5000/register'>SIGNUP</a>
        </div>
    </div>
  );
}

export default ConnectPage;
