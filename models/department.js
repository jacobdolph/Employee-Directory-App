module.exports = function (sequelize, DataTypes) {
    let department = sequelize.define('department', {
        department_name: DataTypes.STRING
    })
    return department;
} 