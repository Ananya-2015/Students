const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/studentController');
const paginatorMiddleware = require('../Middlewares/paginator');


const studentControllerObj = new studentController();
const paginatorMiddlewareObj = new paginatorMiddleware();

router.post('/', studentControllerObj.postStudent);
router.get('/', paginatorMiddlewareObj.pagination, studentControllerObj.getStudents);
router.put('/:id', studentControllerObj.updateStudent);

module.exports = router;