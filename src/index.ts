import http from "http";

import express from "express";

import { Record } from "pocketbase";
import { pb } from "./db/pocketbase.js";
import { generateUniqueShortUrl } from "./helpers/functions.js";

const app = express();
//create a ejs view for app
app.set("view engine", "ejs");
app.set("views", "./src/views");

//allow app to use express json middleware
app.use(express.json());

//serving ejs view on "/"
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/encode", async (req, res) => {
  //get a list of the records and check to see if the record exists within list
  const records = await pb.collection("urls").getFullList({
    sort: "-created",
  });
  const record = records.find((record) => record.original === req.body.url);
  if (record) {
    //if the record exists than just return the saved shortened url from the data
    res.json({ shortened: record?.shortened });
  } else {
    //if record doesnt exist generate a new shortened url
    const shortUrl = await generateUniqueShortUrl();
    const data = {
      original: req.body.url,
      shortened: shortUrl,
    };
    try {
      //add the original url and the shortened url to the database
      const newRecord = await pb.collection("urls").create(data);
      //return the shortened url to client as a json object
      res.json({ shortened: data.shortened });
    } catch (error) {
      res.json({ response: "Creating shortened URL failed" });
    }
  }
});

app.post("/decode", async (req, res) => {
  try {
    const record = await pb
      .collection("urls")
      .getFirstListItem(`shortened="${req.body.url}"`);
    res.json({ response: record.original });
  } catch (error) {
    res.json({ response: "Invalid URL" });
  }
});

//creating server
const server = http.createServer(app);
const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server running on http:localhost:${PORT}`);
});
