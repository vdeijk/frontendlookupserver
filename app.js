const express = require("express");
const app = express();
const conceptsRouter = require("./routes/conceptsRoutes.js");
const wordsRouter = require("./routes/wordsRoutes.js");
const cors = require("cors");
const compression = require("compression");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
console.log(process.env.NODE_ENV);

app.use(
  "/api/v1/concepts",
  cors({
    origin: ["http://localhost:3000", "https://frontend-lookup.web.app"],
  }),
  conceptsRouter
);

app.use(
  "/api/v1/words",
  cors({
    origin: ["http://localhost:3000", "https://frontend-lookup.web.app"],
  }),
  wordsRouter
);

app.use(compression());

module.exports = app;
