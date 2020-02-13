const express = require("express");
const router = express.Router();
const path = require("path");
const checkExistingUsers = require("./queries/checkExistingUsers");
const createUser = require("./queries/createUser");
const getStoredPassword = require("./queries/getStoredPassword");

const { hashPassword, comparePasswords } = require("./auth/encryptionHelpers");
const { createJWT, verifyJWT } = require("./auth/JWTHelpers");

router.post("/api/createuser", (req, res) => {
  const { username, password } = req.body;
  checkExistingUsers(username)
    .then(resFromDB => {
      if (resFromDB.length > 0) res.send("User Already Exists");
      else {
        hashPassword(password)
          .then(hashedPassword => {
            createUser(username, hashedPassword)
              .then(res => res)
              .catch(databaseErr => console.log);
          })
          .catch(passwordHashErr => console.log);
        const jwt = createJWT(username);
        res.cookie("jwt", jwt, { httpOnly: true });
        res.send("created a user and logged in!");
      }
    })
    .catch(err => console.log);
});

router.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  cookieObj = req.cookies;
  getStoredPassword(username)
    .then(responseFromDB => {
      if (responseFromDB.length === 0) res.send("User not found");
      const { hashed_password } = responseFromDB[0];
      comparePasswords(password, hashed_password)
        .then(match => {
          if (match) {
            const jwt = createJWT(username);
            res.cookie("jwt", jwt, {
              httpOnly: true
            });
            res.send("logged in!");
          } else {
            res.send("password invalid");
          }
        })
        .catch(passwordMatchErr => console.log);
    })
    .catch(databaseErr => console.log);
});

module.exports = router;
