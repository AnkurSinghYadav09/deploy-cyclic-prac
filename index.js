const express = require("express");
require("dotenv").config();

const app = express();

app.get("/welcome", (req, res) => {
  res.send("welcome to the world of PT-web-16 ");
});

app.get("/goodbye", (req, res) => {
  res.send("goodbye this is the last lecture of PT-web-16-backend. ");
});

app.get("/instructor", (req, res) => {
  res.send(
    `this is our instructor for the last week whos name is ${process.env.NAME} `
  );
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  try {
    console.log(`listening on port ` + PORT);
  } catch (error) {
    console.log(error);
  }
});
