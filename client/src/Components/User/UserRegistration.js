import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/UserReg.css";
import img from '../../Assets/clientReg.png';
import { toast } from "react-toastify";
import 'remixicon/fonts/remixicon.css';

function UserRegistration() {
    const navigate = useNavigate();

    const [isToastVisible, setToastVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (values) => {
       
    };
    const handleChange = (values) => {
       
    };

  

    return (
        <div className="user_registration">
            <p>User Registration</p>
            <div className="user_registration_container">
                <div className="user_registration_box1">
                    <div className="user_registration_input_group">
                        <form 
                        // onSubmit={(e)=>{handleSubmit(e)}}
                        >
                            <div className="user_registration_input">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control border border-dark"
                                    placeholder="Enter your name"
                                    name="name"
                                  
                                    onChange={handleChange}
                                    
                                />
                               
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control border border-dark"
                                    placeholder="Enter your email"
                                    name="email"
                                  
                                    onChange={handleChange}
                                   
                                />
                                {/* {errors.email && touched.email && (
                                    <span className="text-danger">{errors.email}</span>
                                )} */}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Contact</label>
                                <input
                                    type="number"
                                    className="form-control border border-dark"
                                    placeholder="Enter your contact"
                                    name="contact"
                                   
                                />
                                {/* {errors.contact && touched.contact && (
                                    <span className="text-danger">{errors.contact}</span>
                                )} */}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control border border-dark"
                                    placeholder="Enter your address"
                                    name="address"
                               
                                    onChange={handleChange}
                                    
                                />
                                {/* {errors.address && touched.address && (
                                    <span className="text-danger">{errors.address}</span>
                                )} */}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>DOB</label>
                                <input
                                    type="date"
                                    className="form-control border border-dark"
                                    name="dob"
                                  
                                    onChange={handleChange}
                                  
                                />
                                {/* {errors.dob && touched.dob && (
                                    <span className="text-danger">{errors.dob}</span>
                                )} */}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Gender</label>
                                <select
                                    className="form-control border border-dark"
                                    name="gender"
                                    
                                    onChange={handleChange}
                                    
                                >
                                    <option value="" label="Select gender" />
                                    <option value="male" label="Male" />
                                    <option value="female" label="Female" />
                                    <option value="other" label="Other" />
                                </select>
                                {/* {errors.gender && touched.gender && (
                                    <span className="text-danger">{errors.gender}</span>
                                )} */}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Profile Picture</label>
                                <input
                                    type="file"
                                    className="form-control border border-dark"
                                    name="profilePic"
                                    // onChange={(event) => {
                                    //     setFieldValue("profilePic", event.currentTarget.files[0]);
                                    // }}
                                />
                                {/* {errors.profilePic && touched.profilePic && (
                                    <span className="text-danger">{errors.profilePic}</span>
                                )} */}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Nationality</label>
                                <input
                                    type="text"
                                    className="form-control border border-dark"
                                    placeholder="Enter your nationality"
                                    name="nationality"
                                
                                    onChange={handleChange}
                                   
                                />
                                {/* {errors.nationality && touched.nationality && (
                                    <span className="text-danger">{errors.nationality}</span>
                                )} */}
                            </div>
                            <div className="user_registration_input mt-3">
                                <label>Password</label>
                                <div className="password-field">
                                    <input
                                        type="password"
                                        className="form-control border border-dark"
                                        placeholder="Password"
                                        name="password"
                                        
                                        onChange={handleChange}
                                     
                                    />
                                   
                                </div>
                                {/* {errors.password && touched.password && (
                                    <span className="text-danger">{errors.password}</span>
                                )} */}
                            </div>
                            <div className="user_registration_button text-center mt-3">
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="user_registration_box2">
                    <img src={img} className="img-fluid" alt="user_reg_img" />
                </div>
            </div>
        </div>
    );
}

export default UserRegistration;