const express = require("express");
const app = express();

const instagram = require("./routes/instagram");
const twitter = require("./routes/twitter");

const { PORT = 3000 } = process.env;

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use("/instagram", instagram);
app.use("/twitter", twitter);

console.log("listening on %s", PORT);
app.listen(PORT);
