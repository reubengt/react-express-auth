const { Pool } = require("pg");
const url = require("url");

const isTest = process.env.NODE_ENV === "test";
const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) require("env2")(".env");

const DB_URL = isProduction ? process.env.DB_URL : process.env.DBTEST_URL;

if (!DB_URL) throw new Error("Environment variable not available");

const params = url.parse(DB_URL);

const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== "localhost"
};

module.exports = new Pool(options);
