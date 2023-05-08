import React, { useState } from 'react';
import './AgentForm.css';
import axios from '../../../axios';
import ImageCropper from './ImageCropper';
import 'react-image-crop/dist/ReactCrop.css';

const upload = async (file, event, itemID, charges, desc, setType, setDisplayDashboard) => {
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('itemID', itemID);
    formData.append('charges', charges);
    formData.append('desc', desc);
    event.preventDefault();
    const response = await axios.post('/collector/itemUpdate',formData);
    await setType("");
    if(response.status == 200){
        await setDisplayDashboard(true);
        alert('Item Updated Successfully!');
    }
    else{
        alert(response.message);
    }
    
}

const AgentForm = (props) => {

    const [userInput,setUserInput] = useState({
        itemID: props.itemID,
        charges:"",
        desc:""
    });

    const [file, setFile] = useState(null);

    const handleInput = (e) => {
        //e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setUserInput({...userInput, [name] : value});
    }

    return(
        <>
            <div class="wrapper">
        <div class="form-container">
            <div class="form">
                <div class="heading">
                    <h2>Overhead Charges Form</h2>
                </div>

                {/* <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="id">Consignment ID</label>
                        <p>{props.itemID}</p> 
                    </div>
                </div> */}

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="charges">Total Cost incurred</label>
                        <input type="number" value={userInput.charges} onChange={handleInput} name="charges" id="charges" required/>
                    </div>
                    <div class="form-item-desc">
                        <label htmlFor="charges">Description(Changes done to the item)</label>
                        <input type="text" value={userInput.desc} onChange={handleInput} name="desc" id="desc" required/>
                    </div>
                </div>
                <div class="form-wrap">
                    <div class="form-item">
                        <label>Please upload the picture of Mended item</label>
                        <ImageCropper uploadFile={image => {setFile(image)}}/>
                   </div>
                </div>
                <br/>

                <div class="btn">
                    <input type="submit" value="Submit Request" onClick={(event) => upload(file, event, userInput.itemID, userInput.charges, userInput.desc, props.setType, props.setDisplayDashboard)}/>
                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default AgentForm;