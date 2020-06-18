const db = require('../models');

module.exports = function (app) {
    app.get('/api/department', function (req, res) {
        db.department.findAll({ raw: true }).then(function (dbDepartment) {
            res.json(dbDepartment)
        })
    })
    app.get('/api/role', function (req, res) {
        db.employee_role.findAll({
            include: [db.department]
        }).then(function (dbRole) {
            res.json(dbRole)
        })
    })
    app.get('/api/employee', function (req, res) {
        db.employee.findAll({
            include: { all: true, nested: true }
        }).then(function (dbRole) {
            res.json(dbRole)
        })
    })
    app.post('/api/employee', function (req, res) {
        db.employee.create(req.body).then(function (dbEmployee) {
            res.json(dbEmployee)
        })
    })
    app.get('/api/employee/:id', function (req, res) {
        db.employee.findOne({
            where: {
                id: req.params.id
            },
            include: { all: true, nested: true }
        }).then(function (dbRole) {
            res.json(dbRole)
        })
    })
}