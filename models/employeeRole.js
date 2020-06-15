module.exports = function (sequelize, DataTypes) {
    let employee_role = sequelize.define('employee_role', {
        role_name: DataTypes.STRING,
        base_pay: DataTypes.INTEGER
    });

    employee_role.associate = function (models) {
        employee_role.belongsTo(models.department, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return employee_role;
} 