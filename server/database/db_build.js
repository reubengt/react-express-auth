const fs = require("fs");
const path = require("path");
const dbConnection = require("./dbConnection");

const sqlPath = path.join(__dirname, "db_build.sql");
const sql = fs.readFileSync(sqlPath).toString();

const runDbBuild = () => {
  dbConnection
    .query(sql)
    .then(console.log)
    .catch(console.log);
};

module.exports = runDbBuild;
