## Requirements

- [Twitter API keys](https://developer.twitter.com/en/apps)

## Development

```bash
$ git clone https://github.com/AbeEstrada/socialfeed.git
$ cd socialfeed
$ npm install
$ npm start
```

## Deploy

### [Up](https://up.docs.apex.sh/)

Follow `up` [installation process](https://up.docs.apex.sh/#installation).

Create a new file `up.json`

```json
{
  "name": "socialfeed",
  "environment": {
    "TWITTER_CONSUMER_KEY": "",
    "TWITTER_CONSUMER_SECRET": "",
    "TWITTER_ACCESS_TOKEN": "",
    "TWITTER_ACCESS_TOKEN_SECRET": ""
  }
}
```

```bash
$ up
```

### [Now](https://zeit.co/now)

Follow `now` [installation process](https://zeit.co/now#get-started).

Create a new file `now.json`

```json
{
  "env": {
    "TWITTER_CONSUMER_KEY": "",
    "TWITTER_CONSUMER_SECRET": "",
    "TWITTER_ACCESS_TOKEN": "",
    "TWITTER_ACCESS_TOKEN_SECRET": ""
  }
}
```

```bash
$ now
```

### [Heroku](https://www.heroku.com/)

Follow `heroku` [installation process](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

```bash
$ heroku create

# Add config vars
$ heroku config:set TWITTER_CONSUMER_KEY=
$ heroku config:set TWITTER_CONSUMER_SECRET=
$ heroku config:set TWITTER_ACCESS_TOKEN=
$ heroku config:set TWITTER_ACCESS_TOKEN_SECRET=

$ git push heroku master
$ heroku open
```

### [Google App Engine](https://cloud.google.com/appengine/)

Follow `gcloud` [installation process](https://cloud.google.com/nodejs/docs/setup#install_the_google_cloud_sdk).

Create a new file `app.yaml`

```yaml
runtime: nodejs8
env_variables:
  TWITTER_CONSUMER_KEY: ""
  TWITTER_CONSUMER_SECRET: ""
  TWITTER_ACCESS_TOKEN: ""
  TWITTER_ACCESS_TOKEN_SECRET: ""
```

```bash
$ gcloud app deploy
```

## Usage

### Twitter

Route: `/twitter/:username`

Eg: `https://domain.com/twitter/jack`

Output:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">
  <channel>
    <title><![CDATA[Twitter • jack (@jack)]]></title>
    <description><![CDATA[‽]]></description>
    <link>https://twitter.com/jack/</link>
    <generator>RSS for Node</generator>
    <lastBuildDate>Thu, 30 Aug 2018 21:26:26 GMT</lastBuildDate>
    <pubDate>Thu, 30 Aug 2018 21:10:26 GMT</pubDate>
    <item>
      <title><![CDATA[New policy for legislative iss...]]></title>
      <description><![CDATA[New policy for legislative issue ads, with exemptions for news organizations. https://t.co/4v8SFZ0SMk]]></description>
      <link>https://twitter.com/jack/status/1035273560971915265</link>
      <guid isPermaLink="true">https://twitter.com/jack/status/1035273560971915265</guid>
      <pubDate>Thu, 30 Aug 2018 21:10:26 GMT</pubDate>
    </item>
  </channel>
</rss>
```

### Instagram

Route: `/instagram/:username`

Eg: `https://domain.com/instagram/hilaryduff`

Output:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">
  <channel>
    <title><![CDATA[Instagram • Hilary Duff (@hilaryduff)]]></title>
    <description />
    <link>https://www.instagram.com/hilaryduff/</link>
    <generator>RSS for Node</generator>
    <lastBuildDate>Thu, 30 Aug 2018 21:28:25 GMT</lastBuildDate>
    <pubDate>Wed, 29 Aug 2018 03:54:19 GMT</pubDate>
    <item>
      <title><![CDATA[[Video] Shots shots shots..... jk jk mines a green juice  lovely din with @starmandarren @suttonlenore and @debimazar @abckitchen so delishhhhh.]]></title>
      <description><![CDATA[<img referrerpolicy="no-referrer" src="https://scontent-sea1-1.cdninstagram.com/vp/79e6933dd6890067b54ba62d3341c1e3/5B8ACDB2/t51.2885-15/e15/39376584_1857390267676380_6871329129589899264_n.jpg">]]></description>
      <link>https://www.instagram.com/p/BnC6b2rnt0q/</link>
      <guid isPermaLink="true">https://www.instagram.com/p/BnC6b2rnt0q/</guid>
      <pubDate>Wed, 29 Aug 2018 03:54:19 GMT</pubDate>
    </item>
  </channel>
</rss>
```

---

With code from [RSSHub](https://github.com/DIYgod/RSSHub)
