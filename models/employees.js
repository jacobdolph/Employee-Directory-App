module.exports = function (sequelize, DataTypes) {
    let employee = sequelize.define('employee', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        start_day: DataTypes.DATE

    });

    employee.associate = function (models) {
        employee.belongsTo(models.employee_role, {
            foreignKey: {
                allowNull: false
            }
        })
        employee.belongsTo(models.team, {
            foreignKey: {
                allowNull: true
            }
        });
    };


    return employee;
} 