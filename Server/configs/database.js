//const mysql = require("mysql");
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

// const db = mysql.createPool({
//   host: `${process.env.MYSQL_HOST}`,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
// });
const db = mysql.createPool(
  `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}:3307/${process.env.MYSQL_DATABASE}`
);
//mysql.createConnection(`mysql://takeuforward_rulekeptin:e1cc9414535eefb14f6ca38475d754c94148007d@ewb.h.filess.io:3307/takeuforward_rulekeptin`)
module.exports = db;
