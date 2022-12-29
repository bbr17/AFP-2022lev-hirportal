const express = require("express");
const news = require("./routes/news");
const errorController = require("./controllers/error");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*"); // allow CORS
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  next();
});

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.use("/news", news);

app.use(errorController.pageNotFound404);
app.use(errorController.internalServerError500);

app.listen(3000, () => console.log("listening on port 3000..."));
