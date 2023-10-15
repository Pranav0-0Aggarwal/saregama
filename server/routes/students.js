const express = require('express');
const router = express.Router();
const {getStudents , createStudent , getStudent , updateStudent} = require('../controller/Students');

router.post('/create-student', createStudent);
router.get('/get-students',getStudents);
router.post('/get-student',getStudent);
router.post('/update-student',updateStudent);


module.exports = router;