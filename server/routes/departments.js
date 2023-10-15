const express = require('express');
const router = express.Router();

const {getDepartments,createDepartment} = require('../controller/Departments');

router.get('/get-departments',getDepartments);
router.post('/create-department',createDepartment);

module.exports = router;