import React, {useState,useEffect} from "react";
import axios from "../../../axios";
import './AdminDashboard.css';

const Agents = (props) => {

    const [agentsData, setAgentsData] = useState([]);

    useEffect(() => {
        const timer = setTimeout(async () => {
            const response = await axios.post('/collector/',{});
            console.log(response);
            setAgentsData(response.data.allCollectors);
        },500);
        return () => {clearTimeout(timer);};
    }, []);

    return(
        <div class="recent-payments">
                <div class="title">
                    <h2>Agents' Details</h2>
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Region</th>
                        <th>Item's Assigned</th>
                    </tr>
                    {
                        agentsData.map((agent)=>{
                            return(
                                <tr key={agent._id}>
                                    <td>{agent.name}</td>
                                    <td>{agent.mobile}</td>
                                    <td>{agent.email}</td>
                                    <td>{agent.region}</td>
                                    <td>{agent.items.length}</td>
                                </tr> 
                            );
                        })
                    }
                    
                </table>
                </div>
    );
}

export default Agents;