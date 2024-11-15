const express = require("express");
const router = express.Router();

const Admin=require('./controllers/adminController')
const User = require('./controllers/userController'); 
const advocates = require('./controllers/advocateController'); 
const cases=require('./controllers/caseController')
const appointments=require('./controllers/appointmentController')

// User routes

router.post('/registerUser', User.uploadSingle, User.registerUser);
router.post('/loginUser', User.login);
router.post('/forgotPasswordUser', User.forgotPassword);
router.post('/resetPasswordUser/:id', User.resetPassword);
router.post('/viewUserById/:id', User.viewUserById);
router.post('/viewUsersForAdmin', User.viewUsersForAdminAprvl);
router.post('/viewAllUsers', User.viewAllUsers);
router.post('/deActivateUserById/:id', User.deActivateUserById);
router.post('/rejectUserById/:id', User.rejectUserById);
router.post('/approveUserById/:id', User.approveUserById);
router.post('/editUserById/:id',User.uploadSingle, User.editUserById);
router.post('/activateUserById/:id', User.activateUserById);

//admin
router.post('/adminResetPassword',Admin.adminResetPassword);
router.post('/adminLogin',Admin.login);


//Attorney
//advocate routes
router.post('/registerAdvocate',advocates.upload,advocates.registerAdvocate)
router.post('/viewAdvocateById/:id',advocates.viewAdvocateById)
router.post('/forgotPassword',advocates.forgotPassword)
router.post('/loginAdvocate',advocates.login)
router.post('/editAdvocateById/:id',advocates.uploadProfile,advocates.editAdvocateById)
router.post('/deleteAdvocateById/:id',advocates.deleteAdvocateById)
router.post('/resetPassword/:id',advocates.resetPassword)
router.post('/approveAdvocateById/:id',advocates.approveAdvocateById)
router.post('/rejectAdvocateById/:id',advocates.rejectAdvocateById)
router.post('/viewAdvocateReqs',advocates.viewAdvocateReqs)
router.post('/viewAdvocates',advocates.viewAdvocates)
router.post('/activateAdvocateById/:id',advocates.activateAdvocateById)
router.post('/deactivateAdvocateById/:id',advocates.deactivateAdvocateById)
router.post('/viewAdvocatesBySpecializn',advocates.viewAdvocatesBySpecializn)
router.post('/addRating/:id',advocates.addRating)
router.post('/viewActiveAdvocates',advocates.viewActiveAdvocates)



//case routes
router.post('/createCase',cases.upload,cases.createCase)
router.post('/getCaseType/:description',cases.getCaseType)
router.post('/getCaseByUserId/:id',cases.getCaseByUserId)
router.post('/getCaseById/:id',cases.getCaseById)
router.post('/deleteCase/:id',cases.deleteCase)
router.post('/getAllCases',cases.getAllCases)

// Appointments
router.post('/createAppointment',appointments.createAppointment)
router.post('/getAppointmentReqsByUserId/:id',appointments.getAppointmentReqsByUserId)
router.post('/getAppointmentReqsForAdv/:id',appointments.getAppointmentReqsForAdv)
router.post('/acceptReqbyAdv/:id',appointments.acceptReqbyAdv)
router.post('/rejectReqbyAdv/:id',appointments.rejectReqbyAdv)
router.post('/getAppointmentReqsById/:id',appointments.getAppointmentReqsById)
router.post('/getApprovedAppointmentsForAdv/:id',appointments.getApprovedAppointmentsForAdv)
router.post('/getApprovedAppointmentsForAdv/:id',appointments.getApprovedAppointmentsForAdv)


module.exports = router;