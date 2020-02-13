const databaseConnection = require("./../database/dbConnection");
const createUser = (userName, password) => {
  return databaseConnection
    .query(
      `INSERT INTO users (name, hashed_password) VALUES ('${userName}', '${password}');`
    )
    .then(res => res.rows)
    .catch(err => err);
};
module.exports = createUser;
