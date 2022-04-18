const studentService = require('../services/students.service');

const get = function(req, res){
    res.send(studentService.get(req.params._id))
}

const getAll = function(req, res){
    res.send(studentService.getAll())
}

module.exports = {
    get,
    getAll
};