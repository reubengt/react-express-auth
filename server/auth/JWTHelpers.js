const { sign, verify } = require("jsonwebtoken");
const JWTSECRET = process.env.JWTSECRET;

const createJWT = username => {
  const userDetails = {
    username,
    logged_in: "true"
  };
  return sign(userDetails, JWTSECRET);
};

const verifyJWT = cookieObj => {
  const { jwt } = cookieObj;
  if (!jwt) {
    console.log("Client has no JWT token");
    return false;
  }
  return verify(jwt, SECRET, (err, jwt) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      console.log(`Valid JWT Token found`);
      return true;
    }
  });
};

module.exports = { createJWT, verifyJWT };
