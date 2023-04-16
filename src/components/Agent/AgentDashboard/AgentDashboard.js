import React, { useState } from 'react';
import img1 from './settings.png';
import donate from './income.png';
import search from './search.png';
import user from './user.png';
import notifs from './notifications.png';
import info from './info.png';
import './AgentDashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import AgentForm from '../AgentForm/AgentForm';

const AgentDashboard = () => {

    const navigate = useNavigate();

    const shoot = () => {
        alert("You're logged out!");
    }

    const data = [
        {
            donorName: "Ramesh",
            address: "Dhanbad",
            item: "Books",
            status: "Pick-Up"
        }
    ];

    const [itemID,setItemID] = useState(null); 
    const [displayDashboard, setDisplayDashboard] = useState(true);

    const handleAgentForm = (e,task) => {
        //navigate("/agentForm",{state: {id:1,name:'sabaoon'}});
       e.preventDefault();
       console.log(task);
       setDisplayDashboard(prevState=>{
            return !prevState;
       });
       setItemID(task.item);

    }
   
    const [here,setHere] = useState("FORM"); 
    const [userName,setUserName] = useState("Agent : ABC"); 
    const [donorNumber,setDonorNumber] = useState("1023");
    const [donationNumber,setDonationNumber] = useState("2023");
    const [regionCount,setRegionCount] = useState("23");
    const [volunteerCount,setVolunteerCount] = useState("23");

    const agentDashboard =
        <>
            <div class="side-menu">
        <div class="brand-name">
            <h1>{userName}</h1>
        </div>
        <ul>
            <li><img src={img1} alt=""/>&nbsp; <span>Dashboard</span></li>
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
                    <h2>Pending/Completed Assignments</h2>
                </div>
                <table>
                    <tr>
                        <th>Donor Name</th>
                        <th>Address</th>
                        <th>Item</th>
                        <th>Action</th>
                    </tr>
                    {
                        data.map((task) => {
                            return(
                                <tr>
                                    <td>{task.donorName}</td>
                                    <td>{task.address}</td>
                                    <td>{task.item}</td>
                                    <td>
                                        {task.status=='Pick-Up'&&
                                            <a href="#" class="btn" onClick={(e)=>handleAgentForm(e,task)}>{task.status}</a>}
                                        {!(task.status=='Pick-Up')&&
                                        <a href="#" class="btn">{task.status}</a>}
                                    </td>
                                </tr>
                            );
                        })
                    }
                    {/* <tr>
                        <td>{Name1}</td>
                        <td>{Place1}</td>
                        <td>{Item1}</td>
                        <td><a href="#" class="btn" onClick={()=> setText1("Viewed")}>{Text1}</a></td>
                    </tr>
                    <tr>
                        <td>{Name2}</td>
                        <td>{Place2}</td>
                        <td>{Item2}</td>
                        <td><a href="#" class="btn" onClick={()=> setText2("Viewed")}>{Text2}</a></td>
                    </tr>
                    <tr>
                        <td>{Name3}</td>
                        <td>{Place3}</td>
                        <td>{Item3}</td>
                        <td><a href="#" class="btn" onClick={()=> setText3("Viewed")}>{Text3}</a></td>
                    </tr>
                    <tr>
                        <td>{Name4}</td>
                        <td>{Place4}</td>
                        <td>{Item4}</td>
                        <td><a href="#" class="btn" onClick={()=> setText4("Viewed")}>{Text4}</a></td>
                    </tr>
                    <tr>
                        <td>{Name5}</td>
                        <td>{Place5}</td>
                        <td>{Item5}</td>
                        <td><a href="#" class="btn" onClick={()=> setText5("Viewed")}>{Text5}</a></td>
                    </tr>
                    <tr>
                        <td>{Name6}</td>
                        <td>{Place6}</td>
                        <td>{Item6}</td>
                        <td><a href="#" class="btn" onClick={()=> setText6("Viewed")}>{Text6}</a></td>
                    </tr> */}
                </table>
                </div>
                <div class="new-students">
                    <div class="title">
                        <h2>Charge settlement</h2>
                        <a href="#" class="btn">{here}</a>
                    </div>
                    <table>
                        <tr>
                        <td>Form for overhead charges of completed pickups</td>                           
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
        </>;

    if(displayDashboard)
        return agentDashboard;
    else
        return <AgentForm state={itemID} setDisplayDashboard={setDisplayDashboard}/>
    
    
}

export default AgentDashboard;