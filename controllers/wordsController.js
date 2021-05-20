const fs = require("fs");

const jsConcept = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/javascriptData.json`)
);

const reactConcept = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/reactData.json`)
);

const TOTALLANGUAGES = [jsConcept, reactConcept];

const recentWords = () => {
  //Calculate total terms
  const totalTerms = TOTALLANGUAGES.map((el) => {
    return el.length;
  }).reduce((acc, el) => {
    return acc + el;
  });

  //Return added terms
  const numberOfLanguages = TOTALLANGUAGES.length - 1;
  const language = TOTALLANGUAGES[numberOfLanguages];
  const addedTerms = language.slice(-3);

  return {
    totalTerms,
    addedTerms,
  };
};

const wordOfTheDay = () => {
  //Select language
  const numberOfLanguages = TOTALLANGUAGES.length;
  const numberOfLanguage = Math.floor(Math.random() * numberOfLanguages);
  const selectedLanguage = TOTALLANGUAGES[numberOfLanguage];

  //Select word
  const languageLength = selectedLanguage.length;
  const wordNumber = Math.floor(Math.random() * languageLength);

  return selectedLanguage[wordNumber];
};

exports.recentwords = (req, res) => {
  res.status(200).json({
    status: "success",
    data: recentWords(TOTALLANGUAGES),
  });
};

exports.wordoftheday = (req, res) => {
  res.status(200).json({
    status: "success",
    data: wordOfTheDay(),
  });
};
