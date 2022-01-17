const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/studentController');

const studentControllerObj = new studentController();

router.post('/poststudent', studentControllerObj.postStudent);
router.get('/getstudents', studentControllerObj.getStudents);
router.put('/updatestudent/:id', studentControllerObj.updateStudent);

module.exports = router;