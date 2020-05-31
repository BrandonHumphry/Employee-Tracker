const {createConnection} = require('mysql');
const util = require('util');

const connection = createConnection({
  user:"root",
  password: "root",
  host: "localhost",
  database: "employees_db",
  port: 3306
})

connection.connect();
connection.query = util.promisify(connection.query)

module.exports = connection;