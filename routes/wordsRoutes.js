const express = require("express");
const wordsController = require("../controllers/wordsController");

const router = express.Router();

router.route("/recentwords").get(wordsController.recentwords);
router.route("/wordoftheday").get(wordsController.wordoftheday);

module.exports = router;
