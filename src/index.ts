import http from "http";

import express from "express";

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/encode", (req, res) => {});
app.post("/decode", (req, res) => {});
const server = http.createServer(app);
const PORT = 3005;
server.listen(PORT, () => {
  console.log(`Server running on http:localhost:${PORT}`);
});
