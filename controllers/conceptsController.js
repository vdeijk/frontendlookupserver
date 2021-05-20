const fs = require("fs");

const jsConcept = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/javascriptData.json`)
);

const reactConcept = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/reactData.json`)
);

exports.getJSConcept = (req, res) => {
  res.status(200).json({
    status: "success",
    data: jsConcept,
  });
};

exports.getReactConcept = (req, res) => {
  res.status(200).json({
    status: "success",
    data: reactConcept,
  });
};
