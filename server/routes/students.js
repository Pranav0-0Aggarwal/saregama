const express = require('express');
const router = express.Router();
const {getStudents , createStudent} = require('../controller/Students');

router.post('/create-student', createStudent);
router.get('/get-students',getStudents)

module.exports = router;