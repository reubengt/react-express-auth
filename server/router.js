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
      if (resFromDB.length > 0)
        res.status(400).send({
          error: `User ${username} already exists. Please pick another username.`
        });
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
        res.status(201).end();
      }
    })
    .catch(err => console.log);
});

router.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  cookieObj = req.cookies;
  getStoredPassword(username)
    .then(responseFromDB => {
      if (responseFromDB.length === 0)
        res.status(400).send({
          error: "User not found. Are you sure that's the right username?"
        });
      const { hashed_password } = responseFromDB[0];
      comparePasswords(password, hashed_password)
        .then(match => {
          if (match) {
            const jwt = createJWT(username);
            res.cookie("jwt", jwt, {
              httpOnly: true
            });
            res.status(200).end();
          } else {
            res.status(400).send({
              error:
                "Sorry, your password was incorrect. Please double-check your password."
            });
          }
        })
        .catch(passwordMatchErr => console.log);
    })
    .catch(databaseErr => console.log);
});

module.exports = router;
