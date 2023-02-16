const express = require("express");
const { connectDb } = require("./helpers/db");
const { port, apiUrl } = require("./configuration");
const axios = require("axios");

const app = express();

app.get("/test", (_, res) => {
  res.send("Our auth_api server is working correctly!");
});

app.get("/api/currentUser", (_, res) => {
  res.json({
    id: "123",
    email: "foo@gmail.com",
  });
});

function startServer() {
  app.listen(port, () => {
    console.log("Started auth_api service on port: " + port);
  });
}

connectDb()
  .on("error", console.log)
  .on("disconnect", connectDb)
  .once("open", startServer);
