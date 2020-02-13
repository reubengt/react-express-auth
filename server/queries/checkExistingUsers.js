const databaseConnection = require("./../database/dbConnection");
const checkExistingUsers = requestedName => {
  return databaseConnection
    .query(`SELECT id FROM users WHERE name = '${requestedName}'`)
    .then(res => res.rows)
    .catch(err => err);
};
module.exports = checkExistingUsers;
