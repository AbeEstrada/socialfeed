const express = require("express");
const router = express.Router();
const axios = require("axios");
const RSS = require("rss");

router.get("/", (req, res) => {
  res.status(404).json({ error: "not found" });
});

router.get("/:user", async (req, res) => {
  const user = req.params.user;
  const response = await axios({
    method: "get",
    url: `https://www.instagram.com/${user}/`,
    headers: {
      Referer: `https://www.instagram.com/${user}/`
    }
  });
  const data =
    JSON.parse(response.data.match(/<script type="text\/javascript">window._sharedData = (.*);<\/script>/)[1]) || {};
  const list = data.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
  const name = data.entry_data.ProfilePage[0].graphql.user.full_name;

  feed = new RSS({
    title: `Instagram • ${name} (@${user})`,
    site_url: `https://www.instagram.com/${user}/`,
    description: `${" "}`,
    pubDate: new Date(list[0].node.taken_at_timestamp * 1000).toUTCString()
  });
  list.map(item => {
    item = item.node;
    let type = "";
    let tip = "";
    switch (item.__typename) {
      case "GraphVideo":
        type = "[Video]";
        break;
      case "GraphSidecar":
        type = "[Multiple]";
        break;
    }
    feed.item({
      title: `${type} ${(item.edge_media_to_caption.edges &&
        item.edge_media_to_caption.edges[0] &&
        item.edge_media_to_caption.edges[0].node.text) ||
        "Untitled"}`,
      description: `<img referrerpolicy="no-referrer" src="${item.display_url}">`,
      date: new Date(item.taken_at_timestamp * 1000).toUTCString(),
      url: `https://www.instagram.com/p/${item.shortcode}/`
    });
    return;
  });
  const xml = feed.xml();

  res.type("application/xml");
  res.send(xml);
});

module.exports = router;
