import React, {useState,useEffect} from "react";
import axios from "../../../axios";
import './AdminDashboard.css';

const Agents = (props) => {

    const [agentsData, setAgentsData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const timer = setTimeout(async () => {
            const response = await axios.post('/collector/',{});
            console.log(response);
            setAgentsData(response.data.allCollectors);
        },500);
        return () => {clearTimeout(timer);};
    }, [refresh]);

    const handleRemove = async (e,id) =>{
        e.preventDefault();
        console.log(id);
        try{
            const response = await axios.post('/collector/delete',{ collectorID: id});
            //console.log(response);
            setRefresh(prevState=>{
                return !prevState;
            });
            alert(response.data.message);
        }
        catch(err){
            alert(err.response.data.message);
        }
    }

    const [Textt1,setTextt1] = useState("Download");

    return(
        <div class="recent-payments">
                <div class="title">
                    <h2>Agents' Details</h2>
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Aadhar</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Region</th>
                        <th>Action</th>
                        <th>History</th>
                        {/* <th>Items Assigned</th> */}
                    </tr>
                    {
                        agentsData.map((agent)=>{
                            return(
                                <tr key={agent._id}>
                                    <td>{agent.name}</td>
                                    <td>{agent.aadhar}</td>
                                    <td>{agent.mobile}</td>
                                    <td>{agent.email}</td>
                                    <td>{agent.region}</td>
                                    {/* <td>{agent.items.length}</td> */}
                                    <td><a href="#" class="btn" onClick={(e)=>handleRemove(e,agent._id)}>Remove</a></td>
                                    <td><a href="#" class="btn" onClick={()=> setTextt1("Downloaded")}>{Textt1}</a></td>
                                </tr> 
                            );
                        })
                    }
                    
                </table>
                </div>
    );
}

export default Agents;