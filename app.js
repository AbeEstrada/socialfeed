const express = require("express");
const app = express();
const config = require("./config");

const { PORT = 3000 } = process.env;

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use("/instagram", require("./routes/instagram"));

if (
  config.twitter &&
  config.twitter.consumer_key &&
  config.twitter.consumer_secret &&
  config.twitter.access_token &&
  config.twitter.access_token_secret
) {
  app.use("/twitter", require("./routes/twitter"));
} else {
  console.log("Twitter RSS is disabled for lacking config.");
}

console.log("listening on %s", PORT);
app.listen(PORT);
