const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;
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

const User = require("./models/user");
//const Post = require("./models/post");
const { send } = require("process");

// Endpoint to register an user
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, department, role } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already exists!");
      return res.status(400).json({ message: "Email already exists!" });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password,
      department,
      role,
    });

    // Generate the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    // Save the user to the database
    await newUser.save();

    // Send the verification email to registered user
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(201).json({
      message:
        "User registered successfully!. Please check your mail to activate your account.",
    });
  } catch (error) {
    console.log("Error while registering user!", error);
    res
      .status(500)
      .json({ message: "Registration failed, Internal server error!" });
  }
});

// Endpoint to verify the user
const sendVerificationEmail = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dharaneesh5577@gmail.com",
      pass: "xmvs bvdf pvea lqcd",
    },
  });

  const mailOptions = {
    from: "dharaneesh5577@gmail.com",
    to: email,
    subject: "Bhuvan - Verify your account",
    text: `Please click on the link to verify your account: http://localhost:3000/verify/${verificationToken}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.log("Error while sending the email!", error);
  }
};

// Endpoint to verify email
app.get("/verify/:token", async (req, res) => {
  try {
    // const user = await User.findOne({
    //   verificationToken: req.params.token,
    // });

    // if (!user) {
    //   console.log("Invalid token!");
    //   return res.status(400).json({ message: "Invalid token!" });
    // }

    // // Update the verification status
    // user.verificationToken = null;
    // user.verificationCode = true;

    // await user.save();

    // res.status(200).json({ message: "Account verified successfully!" });

    const token = req.params.token;

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      console.log("Invalid token!");
      return res.status(400).json({ message: "Invalid token!" });
    }

    // Update the verification status
    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully!" });
  } catch (error) {
    console.log("Error while verifying the email!", error);
    res.status(500).json({
      message: "Error while verifying the email. Internal server error!",
    });
  }
});

// Generate secretkey
const generateSecretKey = () => {
  return crypto.randomBytes(64).toString("hex");
};
const secretKey = generateSecretKey();

// Endpoint to login a user
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email exists
    const user = await User.findOne({ email });

    if (!user) {
      console.log("Invalid email!");
      return res.status(401).json({ message: "Invalid email!" });
    }

    // Check if the password is correct
    if (user.password !== password) {
      console.log("Invalid password!");
      return res.status(401).json({ message: "Invalid password!" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);

    res
      .status(200)
      .json({
        token,
        role: user.role,
        verified: user.verified,
        department: user.department,
      });
  } catch (error) {
    console.log("Error while logging in!", error);
    res.status(500).json({ message: "Login failed, Internal server error!" });
  }
});
