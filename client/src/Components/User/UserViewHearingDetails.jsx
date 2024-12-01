import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { register, resetPassword, ViewById } from "../Services/CommonServices";
import "../../Styles/UserAddCases.css";
import ReactStars from "react-rating-stars-component";

function UserViewHearingDetails() {
  const { id } = useParams();
  const [hearings, setHearings] = useState([]);
  const [rating,setRating]=useState(0)
  const [advId,setAdvId]=useState('')
  const navigate=useNavigate()

  useEffect(() => {
    const fetchHearings = async () => {
      try {
        const result = await ViewById("getStatusByCaseId", id);
        if (result.success) {
          
          setHearings(result.user || []);
         if(result.user.length>0){
            setRating(result.user[0].rating)
            setAdvId(result.user[0].advocateId._id)

         }
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        console.error("Error fetching hearings:", error);
        toast.error("Failed to load hearings");
      }
    };

    fetchHearings();
  }, [id]);

  useEffect(()=>{
    if(localStorage.getItem('user'==null)){
        navigate('/')
    }
})
  const addRating =async (newRating) => {
    try {
        const result = await resetPassword( { rating: newRating },'addRating',advId);
        console.log(result);
        if (result.success) {
          
           
            
               toast.success('Rating Added updated successfully');
               

        } else {
          console.error(' error:', result);
          toast.error(`Rating Not Added`);
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        toast.error('An unexpected error occurred during Update Profile');
      }
  
  };


  return (
    <div className="container adv-case-hearing">
      <div className="case-hearings container mt-5 p-2">
       <center> <h2 className="mb-5">Case Hearings</h2></center>
       <div className="align-right mt-2 rating-container d-flex align-items-center">
  <label className="me-2 fw-bold" style={{color:'maroon'}}>Rate Your Advocate Now
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; </label>
  <ReactStars
    count={5}
    size={30}
    value={rating}
    onChange={addRating}
    activeColor="#ffd700"
  />
</div>
        
          {hearings.length > 0 ? (
              <div className="advocate_home_container2_table table-responsive">
            <table className="table align-center">
              <thead>
                <tr>
                  <th scope="col">Sl. No</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Next Hearing Date</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {hearings.map((caseReq, index) => (
                  <tr key={caseReq?._id}>
                    <td>{index + 1}</td>
                    <td>{caseReq?.date
                        ? caseReq.date.slice(0, 10)
                        : "N/A"}</td>
                    <td>{caseReq?.status
                        ? caseReq.status.slice(0, 10)
                        : "N/A"}</td>
                    <td>
                      {caseReq?.hearingDate
                        ? caseReq.hearingDate.slice(0, 10)
                        : "N/A"}
                    </td>
                    <td title={caseReq?.description}>{caseReq?.description?.slice(0, 50)}...</td>

                
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          ) : (
<p className="fw-bold fs-4">No hearing Updates available for this case.</p>
          )}
       
        </div>
       
    </div>
  );
}

export default UserViewHearingDetails;
