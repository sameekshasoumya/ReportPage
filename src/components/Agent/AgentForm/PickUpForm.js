import React, { useState } from 'react';
import './AgentForm.css';
import axios from '../../../axios';

const PickUpForm = (props) => {

    const [userInput,setUserInput] = useState({
        itemID: props.itemID,
        file:null
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
        const response = await axios.post('/collector/itemCollect',userInput);
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
                    <h2>Pick Up Form</h2>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="id">Consignment ID</label>
                        <p>{props.itemID}</p>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label>Please upload the condition of item</label>
                        <input type="file" value={userInput.file} onChange={handleInput} name="file" id="file" required/>
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

export default PickUpForm;