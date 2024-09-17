const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Your name is Hussain");
  return res.json({ name: "Hussain" });
});

app.listen(8000, () => {
  console.log("My name is Hussain");
});
