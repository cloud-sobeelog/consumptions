const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    port: 3306,
    database: "consumptionhistory",
    waitForConnections:true,
    insecureAuth: true,
    connectionLimit: 50
})


module.exports = {
    db
};