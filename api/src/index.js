const express = require("express");
const { connectDb } = require("./helpers/db");
const { port, db, authApiUrl } = require("./configuration");
const { default: mongoose } = require("mongoose");
const axios = require("axios");

const app = express();

const postSchema = new mongoose.Schema({
  name: String,
});

const Post = mongoose.model("Post", postSchema);

app.get("/test", (_, res) => {
  res.send("Our api server is working correctly!");
});

app.get("/api/testapidata", (_, res) => {
  res.json({
    testapi: true,
  });
});

app.get("/testwithcurrentuser", (_, res) => {
  axios.get(`${authApiUrl}/currentUser`).then((response) => {
    res.json({
      testwithcurrentuser: true,
      currentUser: response.data,
    });
  });
});

function startServer() {
  app.listen(port, () => {
    console.log("Started api service on port: " + port);

    const silence = new Post({ name: "Silence" });
    silence.save((err, silence) => {
      if (err) return console.log(err);
      console.log("Saved silence with volumes", silence);
    });
  });
}

connectDb()
  .on("error", console.log)
  .on("disconnect", connectDb)
  .once("open", startServer);
