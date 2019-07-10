const express = require("express");
const { configureMiddleware } = require("./middleware");

// init express
const app = express();

// Configuring global middle ware
configureMiddleware(app);

// index route displays name
app.get("/", async (req, res) => {
  res.send(
    '<h1 style="color: red; text-align: center; font-size: 40px;">SERVER IS UP</h1>'
  );
});

module.exports = app;