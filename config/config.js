module.exports = {
    development: {
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: 'employee_directory',
        host: 'localhost',
        dialect: 'mysql'
    },
    test: {
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: "employee_directory_test",
        host: "localhost",
        dialect: "mysql"
    }
}