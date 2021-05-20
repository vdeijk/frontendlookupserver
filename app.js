const express = require("express");
const app = express();
const conceptsRouter = require("./routes/conceptsRoutes.js");
const wordsRouter = require("./routes/wordsRoutes.js");
const cors = require("cors");
const compression = require("compression");

app.use(
  "/api/v1/concepts",
  cors({
    origin: "http://localhost:3000",
  }),
  conceptsRouter
);

app.use(
  "/api/v1/words",
  cors({
    origin: "http://localhost:3000",
  }),
  wordsRouter
);

app.use(compression());

module.exports = app;
