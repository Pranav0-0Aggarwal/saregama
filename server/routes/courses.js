const express = require('express');
const router = express.Router();

const {getCourses,createCourse} = require('../controller/Courses');

router.get('/get-courses',getCourses);
router.post('/create-course',createCourse);

module.exports = router;