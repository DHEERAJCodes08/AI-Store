var pool = require("./db");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

var app = express();

//used imp function
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rutes
app.get("/", function (res, res) {
  res.redirect("Home.html");
});

app.get("/SingUp.html", function (res, res) {});
app.get("/Login.html", function (res, res) {});

//Rutes End

//database connection
pool.connect(function (error) {
  if (error) throw error;
  console.log("Succesfully database connected");
});

//database connection End
app.post("/SingUp.html", async (req, res) => {
  /* const Hashpassword = await bcrypt.hash(req.body.password, 10) */

  var name = req.body.name;
  var password = req.body.password;

  var sql =
    "INSERT INTO userlogin (name, password) VALUES('" +
    name +
    "', '" +
    password +
    "')";

  pool.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Succesfully Account Created");
  });

  res.redirect("Login.html");
});

//Authentication process
app.use(express.urlencoded({ extended: true }));

// Handle the login request
app.post("/Login.html", (req, res) => {
  const { name, password } = req.body;

  // Query to check if the email and password match
  const query = {
    text: "SELECT COUNT(*) AS count FROM userlogin WHERE name = $1 AND password = $2",
    values: [name, password],
  };

  pool
    .query(query)
    .then((result) => {
      const count = result.rows[0].count;
      if (count === "1") {
        // Successful authentication
        console.log("Successfully logged in");
        res.redirect("Home.html");
      } else {
        // Invalid credentials
        res.send("Invalid email or password");
      }
    })
    .catch((error) => {
      console.error("Error during login:", error);
      res.status(500).send("Internal server error");
    });
});

app.listen(3000, function (err, result) {
  if (err) throw err;

  console.log("Server Started");
});
