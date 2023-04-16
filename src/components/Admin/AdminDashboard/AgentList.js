import React, { useState } from 'react';
import img1 from './settings.png';
import donate from './income.png';
import search from './search.png';
import user from './user.png';
import notifs from './notifications.png';
import info from './info.png';
import './DonorList.css';

const DonorList = () => {

    return(
        <>
            <div class="side-menu">
        <div class="brand-name">
            <h1>Admin Panel</h1>
        </div>
        <ul>
            <li><img src={img1} alt=""/>&nbsp; <span>Dashboard</span></li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Donors</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>MiddleMan</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Regions</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Categories</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Help-desk</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Settings</li>
        </ul>
    </div>
        </>
    )
}

export default DonorList;