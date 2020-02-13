const databaseConnection = require("./../database/dbConnection");
const getStoredPassword = userName => {
  return databaseConnection
    .query(`SELECT hashed_password FROM users WHERE name = '${userName}'`)
    .then(res => res.rows)
    .catch(err => err);
};
module.exports = getStoredPassword;
