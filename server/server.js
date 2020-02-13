const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/createuser", (req, res) => {
  console.log(req.body);
});

app.post("/api/login", (req, res) => {});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.listen(5000, () => console.log("Server started on port 5000"));
