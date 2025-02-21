# YouTube Downloader JS

A simple Node.js script to fetch YouTube video information using the `@distube/ytdl-core` library.

## Features

- Fetch basic video information
- Fetch detailed video metadata
- Support for custom cookies
- Customizable HTTP agent options

## Installation

**Clone the repository:**
```
git clone https://github.com/BaseMax/youtube-downloader-js.git
cd youtube-downloader-js
```

**Install dependencies:**

```
npm install
```

## Usage

Place your YouTube authentication cookies in a file named cookies.txt.

**Run the script:**

```
node youtube-downloader
```

```
const fs = require("fs");
const ytdl = require("@distube/ytdl-core");

const cookies_data = fs.readFileSync("cookies.txt", "utf8").trim();
const cookies = [
    { name: "cookie1", value: cookies_data },
];
const agentOptions = {
    pipelining: 5,
    maxRedirections: 0,
};
const agent = ytdl.createAgent(cookies, agentOptions);

const videoUrl = "http://www.youtube.com/watch?v=aqz-KE-bpKQ";

ytdl.getBasicInfo(videoUrl, { agent }).then((res) => {
    console.log("Basic Info:", res);
});

ytdl.getInfo(videoUrl, { agent }).then((res) => {
    console.log("Full Info:", res);
});
```

### License

This project is licensed under the MIT License.

### Author

Created by Max Base (2025).
