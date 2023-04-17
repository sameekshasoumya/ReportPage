import React, { useState, useEffect } from 'react';
import img1 from './settings.png';
import donate from './income.png';
import search from './search.png';
import user from './user.png';
import notifs from './notifications.png';
import info from './info.png';
import './DonorDashboard.css';
import axios from '../../../axios';
import DonorForm from '../DonorForm/DonorForm';

const DonorDashboard = () => {

    const shoot = () => {
        alert("You're logged out!");
    }
    
    const [data,setData] = useState([
        {
            name:"Books",
            region:"Dhanbad",
            category:"Non Perishabe item",
            agent:{
                name:"Raj",
                contact:"91234567890",
            },
            status:"Assigned"
        }
    ]);

    const [donator, setDonator] = useState({});
    const [donatedItems, setDonatedItems] = useState([]);
    const [tabView, setTabView] = useState("Dashboard");
    const [displayDashboard, setDisplayDashboard] = useState(true);
    const [donatorID,setDonatorID] = useState(localStorage.getItem('donatorID'));
    const donorID = "64260e700667c58853f69e60"; //Remove after login and change everywhere to donatorID

    useEffect(() => {
        const timer = setTimeout(async () => {
            const resDonator = await axios.post('/donator/get',{donatorID: donorID});
            console.log(resDonator);
            setDonator(resDonator.data.donator);
            const resDonatedItems = await axios.post('/donator/items',{donatorID:donorID});
            console.log(resDonatedItems);
            setDonatedItems(resDonatedItems.data.donatedItems);

        },500);
        return () => {clearTimeout(timer);};
    }, []);

    useEffect(() => {
        const timer = setTimeout(async () => {
            const resDonatedItems = await axios.post('/donator/items',{donatorID:donorID});
            console.log(resDonatedItems);
            setDonatedItems(resDonatedItems.data.donatedItems);

        },500);
        return () => {clearTimeout(timer);};
    }, [displayDashboard]);

    const handlePickUp = (e) => {
        e.preventDefault();
        setDisplayDashboard(prevState=>{
            return !prevState;
        })
    }

    const handleChange = (e,view) => {
        e.preventDefault();
        setTabView(view);
    }

    const [here,setHere] = useState("FORM"); 
    const [userName,setUserName] = useState("Donor XYZ"); 
    const [donorNumber,setDonorNumber] = useState("1023");
    const [donationNumber,setDonationNumber] = useState("2023");
    const [regionCount,setRegionCount] = useState("23");
    const [volunteerCount,setVolunteerCount] = useState("23");

    const donorDashboard = 
        <>
            <div class="side-menu">
        <div class="brand-name">
            <h1>{donator.name}</h1>
        </div>
        <ul>
            <a href="#" onClick={(e)=>handleChange(e,'Dashboard')}><li className={tabView=='Dashboard'?'highlight':''}><img src={img1} alt=""/>&nbsp; <span>Dashboard</span></li></a>
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
                    <h2>Past Dontions</h2>
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Category</th>
                        <th>Agent's Contact</th>
                        <th>Status</th>
                    </tr>
                    {
                        donatedItems.map((items)=>{
                            return(
                                <tr>
                                    <td>{items.name}</td>
                                    <td>{items.region}</td>
                                    <td>{items.category}</td>
                                    <td>{items.collId}</td>
                                    <td>
                                        {(items.status=='Unpaid'||items.status=='Paid')&&
                                            <a class="btn">Delivered</a>}
                                        {!(items.status=='Unpaid'||items.status=='Paid')&&
                                            <a class="btn">{items.status}</a>}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </table>
                </div>
                <div class="new-students">
                    <div class="title">
                        <h2>Request PickUp</h2>
                        <a href="#" class="btn" onClick={(e)=>handlePickUp(e)}>Form</a>
                    </div>
                    <table>
                        <tr>
                        <td>Fill Up the form for a new donation and request pickup</td>                           
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
        </>;
    
    if(displayDashboard)
        return donorDashboard;
    else
        return <DonorForm donorID={donorID} setDisplayDashboard={setDisplayDashboard} />

}

export default DonorDashboard;