// Simple Hello World Node.js test with express
"use strict";

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

app.get("/", (req, res) => {
  console.log("Got a GET request for the /");
  res.send("<h1>Wake up!!</h1><br><p>" + new Date() + "<br>This is a test</p>");
});

app.get("/shell", (req, res) => {
  const { exec } = require("child_process");
  console.log("Got a GET request for the /shell");
  exec("date", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    res.send(stdout);
  });
});

app.get("/script", (req, res) => {
  console.log("Got a GET request for the /script");
  const { execFile } = require("child_process");
  const child = execFile("datetime", (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    res.send(stdout);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
