const fs = require("fs");
const ytdl = require("@distube/ytdl-core");

const cookies_data = fs.readFileSync("cookies.txt", "utf8").trim();
const cookies = [
    { name: "cookie1", value: cookies_data},
];
const agentOptions = {
    pipelining: 5,
    maxRedirections: 0,
    // localAddress: "127.0.0.1",
};
const agent = ytdl.createAgent(cookies, agentOptions);

ytdl.getBasicInfo("http://www.youtube.com/watch?v=aqz-KE-bpKQ", { agent }).then((res) => {
    console.log(res);
});
ytdl.getInfo("http://www.youtube.com/watch?v=aqz-KE-bpKQ", { agent }).then((res) => {
    console.log(res);
});
