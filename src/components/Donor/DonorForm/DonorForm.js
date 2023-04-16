import React, { useState } from 'react';
import './DonorForm.css';

const DonorForm = () => {

    const regions = ["Region-1","Region-2","Region-3","Region-4","Region-5"];
    const category = ["Perishable Food Items","Stationary and Books","Furniture","Electronic Items","Clothes"];

    const [userInput,setUserInput] = useState({
        userfirstname: "",
        userlastname: "",
        email: "",
        phone: "",
        city: "",
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


                <div class="form-wrap fullname">
                    <div class="form-item">
                        <label htmlFor="userfirstname">First Name</label>
                        <input type="text" value={userInput.userfirstname} onChange={handleInput} name="userfirstname" id="userfirstname" required/>
                    </div>
                    <div class="form-item">
                        <label htmlFor="userlastname">Last Name</label>
                        <input type="text" value={userInput.userlastname} onChange={handleInput} name="userlastname" id="userlastname" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="email">E-mail Address</label>
                        <input type="email" value={userInput.email} onChange={handleInput} name="email" id="email" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" value={userInput.phone} onChange={handleInput} name="phone" id="phone" required/>
                    </div>
                </div>

                <div class="form-wrap select-box">
                    <div class="form-item">
                        <label htmlFor="city">City</label>
                        <input type="text" value={userInput.city} onChange={handleInput} name="city" id="city" required/>
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
                            {/* <option>Region-1</option>
                            <option>Region-2</option>
                            <option>Region-3</option>
                            <option>Region-4</option>
                            <option>Region-5</option> */}
                        </select>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="address">Address</label>
                        <input type="text" value={userInput.address} onChange={handleInput} name="address" id="address" required/>
                    </div>
                </div>

                <div class="form-wrap select-box">
                    <div class="form-item2">
                        <label>Category of Item for Donation</label>
                        <select name="category" value={userInput.category} onChange={handleInput}>
                            {
                                category.map((category) => {
                                    return(
                                        <option>{category}</option>
                                    );
                                })
                            }
                            {/* <option>Perishable Food Items</option>
                            <option>Stationary and Books</option>
                            <option>Furniture</option>
                            <option>Electronic Items</option>
                            <option>Clothes</option> */}
                        </select>
                    </div>
                </div>
                <br/>

                <div class="form-wrap">
                    <div class="form-item">
                        <label>Please upload the image of item to be donated (in exact same condition)</label>
                        <input type="file" onChange={(event)=>{setFile(event.target.files)}} required/>
                    </div>
                </div>
                <br/>

                <div class="btn">
                    <input type="submit" value="Submit Request"/>
                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default DonorForm;