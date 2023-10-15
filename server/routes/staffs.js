const express = require('express');
const router = express.Router();

const {getStaffs,createStaff} = require('../controller/Staffs');

router.get('/get-staffs',getStaffs);
router.post('/create-staff',createStaff);

module.exports = router;