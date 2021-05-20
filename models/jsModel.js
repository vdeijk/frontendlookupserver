const mongoose = require("mongoose");
const slugify = require("slugify");
// const validator = require('validator');

const jsConceptSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
});

const jsConcept = mongoose.model("Tour", jsConceptSchema);

module.exports = jsConcept;
