const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// app.get('/',require('./router/index'));
router.use('/courses',require('./courses'));
router.use('/students',require('./students'));
router.use('/departments',require('./departments'));
router.use('/staffs',require('./staffs'));
router.use('/audits',require('./logs'));

module.exports = router;