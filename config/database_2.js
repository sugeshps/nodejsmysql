const { createPool } = require("mysql");
const pool2 = createPool({
    port: process.env.DBPORT2,
    host : process.env.DBHOST2,
    user : process.env.DBUSER2,
    password : process.env.DBPASSWORD2,
    database : process.env.DBNAME2,
    connectionLimit:10
});

module.exports = pool2;

