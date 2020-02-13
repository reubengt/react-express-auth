const express = require("express");
const router = require("./router");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.listen(5000, () => console.log(`Server started on port ${port}`));
