import React, { useState } from 'react';
import img1 from './settings.png';
import donate from './income.png';
import search from './search.png';
import user from './user.png';
import notifs from './notifications.png';
import info from './info.png';
import './AdminDashboard.css';

const AdminDashboard = () => {

    const shoot = () => {
        alert("You're logged out!");
    }
    
    const data = [
        {
            name: "Books",
            region: "Dhanbad",
            category: "Stationery",
            agent:"Suresh",
            status: "Assigned"
        }
    ];

    const agent = [
        {
            name: "Ramesh",
            region: "Dhanbad",
            contact: "91234567890"
        }
    ];

    const [here,setHere] = useState("Approve");
    const [current,setCurrent] = useState("Accept All");
    const [donorNumber,setDonorNumber] = useState("1023");
    const [donationNumber,setDonationNumber] = useState("2023");
    const [regionCount,setRegionCount] = useState("23");
    const [volunteerCount,setVolunteerCount] = useState("23");

    return(
        <>
            <div class="side-menu">
        <div class="brand-name">
            <h1>Admin Panel</h1>
        </div>
        <ul>
            <li><img src={img1} alt=""/>&nbsp; <span>Dashboard</span></li>
            <a href="./DonorList"><li><img src={img1} alt=""/>&nbsp; <span></span>Donors</li></a>
            <li><img src={img1} alt=""/>&nbsp; <span></span>MiddleMan</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Regions</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Categories</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Help-desk</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Settings</li>
        </ul>
    </div>
    <div class="container">
        <div class="header">
            <div class="nav">
                <div class="search">
                    <input type="text" placeholder="Search.."/>
                    <button type="submit"><img src={search} alt=""/></button>
                </div>
                <div class="user">
                    <a href="#" class="btn" onClick={shoot}>Log Out</a>
                    <img src={notifs} alt=""/>
                    <div class="img-case">
                        <img src={user} alt=""/> 
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="cards">
                <div class="card">
                    <div class="box">
                        <h1>{donationNumber}</h1>
                        <h3>Donations</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>{donorNumber}</h1>
                        <h3>Notable Donors</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>{regionCount}</h1>
                        <h3>Regions</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>{volunteerCount}</h1>
                        <h3>Volunteers</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
            </div>
            <div class="content-2">
                <div class="recent-payments">
                <div class="title">
                    <h2>Donation Item Status</h2>
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Category</th>
                        <th>Agent</th>
                        <th>Status</th>
                    </tr>
                    {
                        data.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.region}</td>
                                    <td>{item.category}</td>
                                    <td>{item.agent}</td>
                                    <td><a href="#" class="btn">{item.status}</a></td>
                                </tr> 
                            );
                        })
                    }
                    
                </table>
                </div>
                <div class="new-students">
                    <div class="title">
                        <h2>Pending Approval</h2>
                    </div>
                    <table>
                        <tr>
                            <th>Agent</th>
                            <th>Region</th>
                            {/* <th>Approve</th> */}
                        </tr>
                        {
                            agent.map((agent)=>{
                                return(
                                    <tr>
                                        <td>{agent.name}</td>
                                        <td>{agent.region}</td>
                                        <td><a href="#" class="btn">{here}</a></td>
                                    </tr>
                                );
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default AdminDashboard;