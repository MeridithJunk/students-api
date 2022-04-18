const express = require('express');
const router = express.Router({ mergeParams: true });

const studentController = require('../controllers/student.controller');

router.route('/')
    .get(studentController.getAll);

router.route('/:_id')
    .get(studentController.get);

module.exports = router;