const express = require("express");
const mongoose = require("mongoose");
const mysql = require('mysql');
require('dotenv').config();
const db = require('./models')
// const routes = require('./routes')
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require('./controllers/controller.js')(app)
// app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employeelist");

db.sequelize.sync().then(() => {
    app.listen(PORT, function () { console.log("Listening to PORT" + PORT) });
})