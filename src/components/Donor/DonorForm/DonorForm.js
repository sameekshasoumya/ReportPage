import React, { useState } from 'react';
import './DonorForm.css';
import ImageCropper from '../../Agent/AgentForm/ImageCropper';
import axios from '../../../axios';

const upload = async (file, event, userInput, donorID, setDisplayDashboard) => {
    console.log(donorID);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('donID', donorID);
    formData.append('name', userInput.itemName);
    formData.append('region', userInput.region);
    formData.append('category', userInput.category);
    formData.append('address', userInput.address);
    event.preventDefault();
    const response = await axios.post('/items/add',formData);
    if(response.status == 200){
        alert('Item Added Successfully!');
    }
    else{
        alert(response.message);
    }
    await setDisplayDashboard(true);
}

const DonorForm = (props) => {

    const regions = ["Region-1","Region-2","Region-3","Region-4","Region-5"];
    const category = ["Perishable Food Items","Stationary and Books","Furniture","Electronic Items","Clothes"];

    const [userInput,setUserInput] = useState({
        itemName:"",
        address: "",
        category: category[0],
        region: regions[0]
    });

    const [file,setFile] = useState(null);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInput({...userInput, [name] : value});
        console.log(userInput);
        console.log(file);
    }

    return(
        <>
            <div class="wrapper">
        <div class="form-container">
            <div class="form">
                <div class="heading">
                    <h2>New Donation Request</h2>
                </div>


                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="itemName">Item Name</label>
                        <input type="text" value={userInput.itemName} onChange={handleInput} name="itemName" id="itemName" required/>
                    </div>
                </div>

                {/* <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" value={userInput.phone} onChange={handleInput} name="phone" id="phone" required/>
                    </div>
                </div> */}

                <div class="form-wrap select-box">
                    <div class="form-item">
                        <label>Category of Item</label>
                        <select name="category" value={userInput.category} onChange={handleInput}>
                            {
                                category.map((category) => {
                                    return(
                                        <option>{category}</option>
                                    );
                                })
                            }
                        </select>
                    </div>

                    <div class="form-item">
                        <label>Donation Region</label>
                        <select name="region" value={userInput.region} onChange={handleInput}>
                            {
                                regions.map((region) => {
                                    return(
                                        <option>{region}</option>
                                    );
                                })
                            }
                        </select>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="address">Address</label>
                        <input type="text" value={userInput.address} onChange={handleInput} name="address" id="address" required/>
                    </div>
                </div>

                
                <br/>

                <ImageCropper 
                        uploadFile={image => {setFile(image)}}
                    />
                <br/>

                <div class="btn">
                    <input type="submit" value="Submit Request" onClick={(event) => upload(file, event,userInput,props.donorID , props.setDisplayDashboard)}/>
                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default DonorForm;