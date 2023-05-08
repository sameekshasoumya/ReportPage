import React, {useState,useEffect} from "react";
import axios from "../../../axios";
import './AdminDashboard.css';

const Donors = (props) => {

    const [donorsData, setDonorsData] = useState([]);

    const [Text,setText] = useState("View");
    const Text1 = useState("Past Dontions");

    useEffect(() => {
        const timer = setTimeout(async () => {
            const response = await axios.post('/donator/',{});
            console.log(response);
            setDonorsData(response.data.allDonators);
        },500);
        return () => {clearTimeout(timer);};
    }, []);

    return(
        <div class="recent-payments">
                <div class="title">
                    <h2>Donors' Details</h2>
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        {/* <th>Region</th> */}
                        <th>Items Donated</th>
                        <th>{Text1}</th>
                    </tr>
                    {
                        donorsData.map((donor)=>{
                            return(
                                <tr key={donor._id}>
                                    <td>{donor.name}</td>
                                    <td>{donor.mobile}</td>
                                    <td>{donor.email}</td>
                                    {/* <td>{donor.region}</td> */}
                                    <td>{donor.items.length}</td>
                                    <td><a href="#" class="btn" onClick={()=> setText("Viewed")}>{Text}</a></td>
                                </tr> 
                            );
                        })
                    }
                    
                </table>
                </div>
    );
}

export default Donors;