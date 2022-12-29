const express = require("express");
const news = require("./routes/news");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/news", news);

app.listen(3000, () => console.log("listening on port 3000..."));
