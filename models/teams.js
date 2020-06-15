module.exports = function (sequelize, DataTypes) {
    let team = sequelize.define('team', {
        team_name: DataTypes.STRING,
        team_description: DataTypes.TEXT,
        current_goal: DataTypes.TEXT
    })
    return team;
} 