const express = require("express");
const router = express.Router();

const Admin=require('./controllers/adminController')



//admin
router.post('/adminResetPassword',Admin.adminResetPassword);
router.post('/adminLogin',Admin.login);

module.exports = router;