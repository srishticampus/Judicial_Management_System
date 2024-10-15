import React, { useState } from "react";
import "../../../Styles/AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import img from "../../../Assets/adlogin.jpg";

function AdminLogin() {

    const navigate = useNavigate();


    return (
        <div>
            <div className="container">
             
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="container justify-content-center">
                                <img src={img} className="img-fluid w-100" alt="user_reg_img" />
                            </div>
                            </div>
                        <div className="col-6">
                                <div className="user_registration_input_group admin-login-div1">
                                    <h3 className="admin-login-h3">Admin Login</h3>
                                    <form>
                                        <div className=" mt-5">
                                            <label>Username</label>
                                            <input
                                                type="text"
                                                className="form-control border border-dark"
                                                placeholder="Enter Username"
                                                name="email"
                                            // value={values.email}
                                            // onChange={handleChange}

                                            />
                                            {/* {errors.email && touched.email && (
                    <span className="text-danger">{errors.email}</span>
                  )} */}
                                        </div>
                                        <div className=" mt-4">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control border border-dark"
                                                placeholder="Password"
                                                name="password"
                                            // value={values.password}
                                            // onChange={handleChange}
                                            // onBlur={handleBlur}
                                            />
                                            {/* {errors.password && touched.password && (
                    <span className="text-danger">{errors.password}</span>
                  )} */}
                                        </div>

                                        <div className="user_registration_button text-center mt-5 d-flex justify-content-evenly">
                                            <button type="submit">Submit</button>
                                            <button type="reset">Reset</button>
                                        </div>


                                    </form>  </div>
                          
                        </div>

                    </div>


                </div>
         
        </div>
    );
}

export default AdminLogin;