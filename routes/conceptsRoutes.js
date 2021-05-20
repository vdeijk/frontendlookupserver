const express = require("express");
const conceptsController = require("../controllers/conceptsController");

const router = express.Router();

router.route("/js").get(conceptsController.getJSConcept);
router.route("/react").get(conceptsController.getReactConcept);

module.exports = router;
