const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorialTitle => {
    //Split the title into indivicual words
    //Filter out any empty strings that might result from multiple spaces
    const words = tutorialTitle.split(' ').filter(word => word.length > 0);

    //Capitalise the first letter of each word and make the rest lowercase
    const titleCasedWords = words.map(word => {
      //Ensure the word is not empty before processing
      if(word.length === 0){
        return '';
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    //Join the title-cased words back into a single string
    return titleCasedWords.join(' ');
  });
};
