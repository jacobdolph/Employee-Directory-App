const db = require('../models');

module.exports = function (app) {
    app.get('/api/department', function (req, res) {
        db.department.findAll({ raw: true }).then(function (dbDepartment) {
            res.json(dbDepartment)
        })
    })
    app.get('/api/role', function (req, res) {
        db.department.findAll({ raw: true }).then(function (dbRole) {
            res.json(dbRole)
        })
    })
}