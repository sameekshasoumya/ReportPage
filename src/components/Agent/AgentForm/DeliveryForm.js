import React, { useState } from 'react';
import './AgentForm.css';
import axios from '../../../axios';

const DeliveryForm = (props) => {

    const [userInput,setUserInput] = useState({
        itemID: props.itemID,
        name:"",
        aadhar:"",
        mobile:"",
        address:""
    });

    const handleInput = (e) => {
        //e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setUserInput({...userInput, [name] : value});
        // console.log(props);
        // props.setDisplayDashboard(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/collector/itemDeliver',userInput);
        props.setType("");
        if(response.status == 200){
            props.setDisplayDashboard(true);
        }
        else{
            alert(response.message);
        }
    }

    return(
        <>
            <div class="wrapper">
        <div class="form-container">
            <div class="form">
                <div class="heading">
                    <h2>Delivery Form</h2>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="id">Consignment ID</label>
                        <p>{props.itemID}</p>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={userInput.name} onChange={handleInput} name="name" id="name" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="name">Aadhar</label>
                        <input type="number" value={userInput.aadhar} onChange={handleInput} name="aadhar" id="aadhar" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="name">Mobile</label>
                        <input type="number" value={userInput.mobile} onChange={handleInput} name="mobile" id="mobile" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="name">Address</label>
                        <input type="text" value={userInput.address} onChange={handleInput} name="address" id="address" required/>
                    </div>
                </div>

                
                <br/>

                <div class="btn">
                    <input type="submit" value="Submit Request" onClick={(e)=>handleSubmit(e)}/>
                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default DeliveryForm;