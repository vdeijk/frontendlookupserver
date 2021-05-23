const fs = require("fs");

const jsConcept = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/javascriptData.json`)
);

const reactConcept = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/reactData.json`)
);

//State
const TOTALLANGUAGES = [jsConcept, reactConcept];
let wordOfWeekSet = false;
let wordOfWeek = TOTALLANGUAGES[0][0];

const setRecentWords = () => {
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

const setNewWordOfWeek = () => {
  //Select language
  const numberOfLanguages = TOTALLANGUAGES.length;
  const numberOfLanguage = Math.floor(Math.random() * numberOfLanguages);
  const selectedLanguage = TOTALLANGUAGES[numberOfLanguage];

  //Select word
  const languageLength = selectedLanguage.length;
  const wordNumber = Math.floor(Math.random() * languageLength);

  wordOfWeekSet = true;
  wordOfWeek = selectedLanguage[wordNumber];

  return wordOfWeek;
};

const setWordOfWeek = () => {
  const date = new Date();
  const day = date.getDay();
  if (day === 0 && !wordOfWeekSet) return setNewWordOfWeek();
  else if (day === 0 && wordOfWeekSet) return wordOfWeek;
  else {
    if (wordOfWeekSet) wordOfWeekSet = false;
    return wordOfWeek;
  }
};

exports.recentwords = (req, res) => {
  res.status(200).json({
    status: "success",
    data: setRecentWords(TOTALLANGUAGES),
  });
};

exports.wordoftheday = (req, res) => {
  res.status(200).json({
    status: "success",
    data: setWordOfWeek(),
  });
};
