const express = require("express");
const app = express();
const conceptsRouter = require("./routes/conceptsRoutes.js");
const wordsRouter = require("./routes/wordsRoutes.js");
const cors = require("cors");
const compression = require("compression");

app.use(
  "/api/v1/concepts",
  cors({
    origin: ["https://frontend-lookup.web.app/"],
  }),
  conceptsRouter
);

app.use(
  "/api/v1/words",
  cors({
    origin: ["https://frontend-lookup.web.app/"],
  }),
  wordsRouter
);

app.use(compression());

module.exports = app;
