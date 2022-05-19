const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require("cors");

const app = express();
// parse urlencoded request body
app.use(bodyParser.urlencoded({ extended: true }));

//************************** Access Origin ****************************************/
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/v1", router);

app.listen(5001);
