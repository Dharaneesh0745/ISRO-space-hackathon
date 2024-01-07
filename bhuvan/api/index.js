const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://dharaneesh0745:7mahi_18vkgoat_17mr360@cluster0.cmm4tzy.mongodb.net/isro-bhuvan",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Database connection failed!", error);
  });

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
