

import React, { useEffect, useState } from "react";
import img from "../../../Assets/Vecto(2).png";
import axiosInstance from "../../Constants/BaseUrl";
import { Link } from "react-router-dom";
import noData from "../../../Assets/noDataFound.json";
import Lottie from "lottie-react";
import '../../../Styles/AdminViewUsers.css'
import { toast, ToastContainer } from "react-toastify";

function AdminViewUserReqs() {


    const [data, setData] = useState([]);


    useEffect(() => {
        axiosInstance
            .post("/viewUsersForAdmin")
            .then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    setData(res.data.data || []);
                } else {
                    setData([]);
                }
            })
            .catch((error) => {
                console.error("Error!", error);
            });
    }, []);

    // const handleActivate = (id) => {
    //     axiosInstance
    //       .post(`/approveUserById/${id}`)
    //       .then((res) => {
    //         console.log(res);

    //         if (res.status === 200) {
    //             console.log(res);
                
    //             toast.success('User Approved Successfully')
    //           const updatedData = data.map((user) => {
    //             if (user._id === id) {
    //                 user.isActive = true;
    //             }
    //             return user;
    //           });
    //           setData(updatedData);
    //         }
    //       })
    //       .catch((error) => {
    //         console.error("Error!", error);
    //       });
    //   };
    

    const handleActivate = (id) => {
        axiosInstance
          .post(`/approveUserById/${id}`)
          .then((res) => {
            if (res.status === 200) {
                toast.success('User Approved Successfully'); // Toast after success
                const updatedData = data.map((user) => {
                  if (user._id === id) {
                      user.isActive = true;
                  }
                  return user;
                });
                setData(updatedData);
            }
          })
          .catch((error) => {
            console.error("Error!", error);
            toast.error("Error approving user."); // Show toast on error
          });
    };
    
      const handleDeactivate = (id) => {
        axiosInstance
          .post(`/rejectUserById/${id}`)
          .then((res) => {
            if (res.data.status === 200) {
              const updatedData = data.map((junioradvocate) => {
                if (junioradvocate._id === id) {
                    junioradvocate.isActive = false;
                }
                return junioradvocate;
              });
              setData(updatedData);
            }
          })
          .catch((error) => {
            console.error("Error!", error);
          });
      };
    return (
        <div className="main-div">
           
            {data.length !== 0 ? (
                 <>
        <h3 className="mt-5 mb-3">New Users</h3>
                <div className="table-container table-striped">
                    <table className="container-fluid">
                    <thead className="thead-dark">
                            <tr >
                                <th className="table-header fw-bolder">Name</th>
                                <th className="table-header  fw-bolder">Email</th>
                                <th className="table-header  fw-bolder">Contact</th>
                                <th className="table-header  fw-bolder">Aadhar Number</th>
                                <th className="table-header  fw-bolder">City</th>
                                <th className="table-header  fw-bolder">Profile</th>
                                <th className="table-header  fw-bolder">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length ? (
                                data.map((user) => (
                                    <tr>
                                        <td className="table-data">{user.name}</td>
                                        <td className="table-data">{user.email}</td>
                                        <td className="table-data">{user.contact}</td>
                                        <td className="table-data">{user.aadhar}</td>
                                        <td className="table-data"> {user.city}</td>
                                        <td className="table-data">
                                            <Link to={`/admin_view_single_user/${user._id}`}>
                                                <button className="btn1 btn btn-outline-secondary p-1">
                                                    <img src={img} alt="View Details" />
                                                </button>
                                            </Link>
                                        </td>{" "}
                                        {console.log(user.isActive)}
                                        <td className="table-data">
                          
                           
                       
                            <button
                              className="btn btn-outline-success button-size p-1"
                              onClick={() => handleActivate(user._id)}
                            >
                             Approve
                            </button>
                            <button
                              className="btn btn-outline-danger button-size p-1  ms-3"
                              onClick={() => handleDeactivate(user._id)}
                            >
                              Delete 
                            </button>
                        </td>
                                    </tr>
                                ))
                            ) : (
                                <h1>No Data obtained</h1>
                            )}
                        </tbody>
                    </table>
                </div>
                </>
            ) : (
                <div className="no_data_animation">
                    <Lottie animationData={noData} className="no_data_animation" />

                </div>
            )}

        </div>
    )
}




export default AdminViewUserReqs