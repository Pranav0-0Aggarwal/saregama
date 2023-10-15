const express = require('express');
const router = express.Router();

const {getStudentsAudit , revertStudentAudit} = require('../controller/Logs');

router.get('/get-logs',getStudentsAudit);
router.post('/get-revert-logs',revertStudentAudit);

module.exports = router;