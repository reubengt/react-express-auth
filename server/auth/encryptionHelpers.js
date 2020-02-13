const bcrypt = require("bcrypt");

const hashPassword = plainTextPassword => {
  return bcrypt.hash(plainTextPassword, 10);
};

const comparePasswords = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = { hashPassword, comparePasswords };
