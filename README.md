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

## Usage

### Twitter

Route: `/twitter/:username`

Eg: `https://domain.com/twitter/jack`

### Instagram

Route: `/instagram/:username`

Eg: `https://domain.com/instagram/hilaryduff`

---

Inspired by [RSSHub](https://github.com/DIYgod/RSSHub)