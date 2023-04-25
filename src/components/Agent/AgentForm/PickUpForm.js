import React, { useState } from 'react';
import './AgentForm.css';
import axios from '../../../axios';
import ImageCropper from './ImageCropper';

const upload = async (file, event, itemID, setType, setDisplayDashboard) => {
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('itemID', itemID);
    event.preventDefault();
    const response = await axios.post('/collector/itemCollect',formData);
    await setType("");
    if(response.status == 200){
        await setDisplayDashboard(true);
        alert('Item Status Updated!');
    }
    else{
        alert(response.message);
    }
    
}

const PickUpForm = (props) => {

    const [userInput,setUserInput] = useState({
        itemID: props.itemID,
        file:null
    });
    const [file, setFile] = useState(null);


    const handleInput = (e) => {
        //e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setUserInput({...userInput, [name] : value});
        // console.log(props);
        // props.setDisplayDashboard(true);
    }

    return(
        <>
            <div class="wrapper">
        <div class="form-container">
            <div class="form">
                <div class="heading">
                    <h2>Pick Up Form</h2>
                </div>

                {/* <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="id">Consignment ID</label>
                        <p>{props.itemID}</p>
                    </div>
                </div> */}

                <div class="form-wrap">
                    <div class="form-item">
                        <label>Please upload the condition of item</label>
                        <ImageCropper uploadFile={image => {setFile(image)}}/>
                   </div>
                </div>
                
                <br/>

                <div class="btn">
                    <input type="submit" value="Submit Request" onClick={(event) => upload(file, event, userInput.itemID, props.setType, props.setDisplayDashboard)}/>
                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default PickUpForm;