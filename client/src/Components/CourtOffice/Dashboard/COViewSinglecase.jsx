import React, { useEffect, useState } from "react";
import "../../../Styles/AdvocateViewCaseReq.css";
import icon1 from "../../../Assets/profile.png";
import icon2 from "../../../Assets/mail.png";
import icon3 from "../../../Assets/contact.png";
import icon4 from "../../../Assets/house.png";

import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import { IMG_BASE_URL } from "../../Services/BaseURL";
import { resetPassword, ViewByData, ViewById } from "../../Services/CommonServices";
import { approveById } from "../../Services/AdminService";

function COViewSinglecase() {

    const [data, setData] = useState({
        userId: { profilePic: { filename: '' } },
        dateOfIncident: "",
        evidence: {},
        type:''
    });

    const { id } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [evidenceUrl, setEvidenceUrl] = useState('');
    const [fileType, setFileType] = useState("");
    const [advocate, setAdvocate] = useState([]);
    const [selectedadvocate, setSelectedAdvocate] = useState("");



    useEffect(() => {
        const fetchdata = async () => {
            try {
                console.log("id", id);

                const result = await ViewById('getCaseById', id);

                if (result.success) {
                    console.log(result);
                    setData(result.user || []);
                } else {
                    console.error('Advocate View Error :', result);
                    // toast.error(result.message);
                }
            } catch (error) {
                console.error('Unexpected error:', error);
                toast.error('An unexpected error occurred during login');
            }
        };
        fetchdata();
    }, [id]);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                
let spl=data.type
                const result = await ViewByData('viewJudgesBySpecializn', {
                    specialization:spl
                });

                if (result.success) {
                    console.log(result);
                    setAdvocate(result.user || []);
                } else {
                    console.error('Advocate View Error :', result);
                    // toast.error(result.message);
                }
            } catch (error) {
                console.error('Unexpected error:', error);
                toast.error('An unexpected error occurred during login');
            }
        };
        fetchdata();
    }, [data.type]);

    
  const handleAdvChange = (e) => {
    const month = e.target.value;
    setSelectedAdvocate(month);

  };

    const handleAssign = async (jid) => {
        try {
            
            const result = await resetPassword({judgeId:selectedadvocate},'assignJudgeCaseById', id);

            if (result.success) {
                console.log(result);
                navigate("/co_view_cases");
            } else {
                console.error(' View Error :', result);
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            toast.error('An unexpected error occurred during login');
        }
    };





    const handleEvidenceClick = () => {
        const evidence = data.caseId.evidence || {};
        const fileUrl = evidence.filename ? `${IMG_BASE_URL}/${evidence.filename}` : null;
        if (!fileUrl) {
            setFileType("none");
            setEvidenceUrl(null);
        } else {
            const fileExtension = fileUrl.split(".").pop().toLowerCase();
            setFileType(fileExtension);
            setEvidenceUrl(fileUrl);
        }
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <div className="adv_view_case_req">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="adv_case_req_left_container1">
                            <div className="adv_case_req_left_container1_head">
                                <p>Petitioner Details</p>
                            </div>
                            <div className="adv_case_req_left_container1_content d-flex">

                                <div>
                                    <div className="d-flex mt-2">
                                        <div className="px-3">
                                            <img src={icon1} alt="icon1" />
                                        </div>
                                        <div>{data.userId.name}</div>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <div className="px-3">
                                            <img src={icon2} alt="icon2" />
                                        </div>
                                        <div>{data.userId.email}</div>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <div className="px-3">
                                            <img src={icon3} alt="icon3" />
                                        </div>
                                        <div>{data.userId.contact}</div>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <div className="px-3">
                                            <img src={icon4} alt="icon4" />
                                        </div>
                                        <div>{data.userId.city}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="adv_case_req_left_container2 ">
                            <div className="adv_case_req_left_container1_head">
                                <p>Opponent Details</p>
                            </div>
                            <div className="adv_case_req_left_container1_content">
                                <div className="d-flex mt-2">
                                    <div className="px-3">Name :</div>
                                    <div>{data.opponentName ? data.opponentName : 'Unknown'}</div>
                                </div>
                                <div className="d-flex mt-2">
                                    <div className="px-3">Address :</div>
                                    <div>{data.opponentAddress ? data.opponentAddress : 'Unknown'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="adv_case_req_right_container">
                            <div className="adv_case_req_left_container1_head">
                                <p>Case Details</p>
                            </div>
                            <div className="adv_case_req_left_container1_content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Case Title</td>
                                            <td>: {data.title}</td>
                                        </tr>
                                        <tr>
                                            <td>Case Description</td>
                                            <td>: {data.description}</td>
                                        </tr>
                                        <tr>
                                            <td>Case Type</td>
                                            <td>: {data.type}</td>
                                        </tr>
                                        <tr>
                                            <td>Date of Request</td>
                                            <td>: {data.dateOfIncident.slice(0, 10)}</td>
                                        </tr>
                                        <tr>
                                            <td>Evidence</td>
                                            <td>: <Link to="#" onClick={handleEvidenceClick}>Click here</Link></td>
                                        </tr>
                                        <tr>
                                            <td>Advocate</td>
                                            <td>:
                                                <select
                                                    value={selectedadvocate}
                                                    onChange={handleAdvChange}
                                                   className="ms-2"
                                                >
                                                    <option value="">Choose Advocate</option>
                                                    {console.log(advocate.length)
                                                    }
                                                    {advocate.length>0?
                                                    advocate.map(x=>{
                                                        
                                                  return(
                                                    <>
                                                     <option value={x._id}>{x.name}</option></>
                                                  )
                                                      }):'' }
                                                    </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="adv_view_case_req_actions text-center mt-2">
                                    <button className="btn bg-gold" onClick={handleAssign}>Assign Judge</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Evidence</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {fileType === "none" ? (
                        <p>No Evidence Added</p>
                    ) : fileType === "pdf" ? (
                        <iframe src={evidenceUrl} width="100%" height="500px" title="Evidence PDF" />
                    ) : (
                        <img src={evidenceUrl} alt="Evidence" className="img-fluid" />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default COViewSinglecase