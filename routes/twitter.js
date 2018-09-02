const express = require("express");
const router = express.Router();
const Twit = require("twit");
const RSS = require("rss");
const tweet2html = require("tweet-html");

const config = require("../config");

const T = new Twit(config.twitter);

router.get("/", (req, res) => {
  res.status(404).json({ error: "not found" });
});

router.get("/:user", async (req, res) => {
  const user = req.params.user;
  const result = await T.get("statuses/user_timeline", {
    screen_name: user,
    tweet_mode: "extended",
    exclude_replies: true,
    include_rts: false
  });

  const data = result.data;

  feed = new RSS({
    title: `Twitter • ${data[0].user.name} (@${user})`,
    site_url: `https://twitter.com/${user}/`,
    description: data[0].user.description,
    pubDate: new Date(data[0].created_at).toUTCString()
  });
  data.map(item => {
    item = item.retweeted_status || item;
    feed.item({
      title: `${item.in_reply_to_screen_name ? "Re " : ""}${
        item.full_text.length > 30 ? item.full_text.slice(0, 30) + "..." : item.full_text
      }`,
      description: `${tweet2html(item, user)}`,
      date: new Date(item.created_at).toUTCString(),
      url: `https://twitter.com/${user}/status/${item.id_str}`
    });
    return;
  });
  const xml = feed.xml();

  res.type("application/xml");
  res.send(xml);
});

module.exports = router;
