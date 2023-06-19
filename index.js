const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// function titleCased() {
//   let newArray = [];
//   let putback = [];
//   tutorials.forEach((element) => {
//     let splitArray = element.split(" ");
//     for (let item of splitArray) {
//       item = item.charAt(0).toUpperCase() + item.substring(1);
//       putback.push(item);
//     }
//     let arrayPutBackTogether = putback.join(" ");
//     newArray.push(arrayPutBackTogether);
//   });

//   return newArray;
// }

// console.log(titleCased(tutorials));

// const modifiedTutorials = tutorials.map(titleCased);

// function titleCased(tutorial)  {
//   const words = tutorial.split(' '); // Split the tutorial into individual words
//   const capitalizedWords = words.map((word) => {
//     const firstLetter = word.charAt(0).toUpperCase(); // Get the first letter of each word and capitalize it
//     const restOfWord = word.slice(1); // Get the remaining letters of each word
//     return firstLetter + restOfWord; // Combine the capitalized first letter and the rest of the word
//   });
//   return capitalizedWords.join(' '); // Join the modified words back into a single string
// }
// console.log(modifiedTutorials);
function titleCased() {
  return tutorials.map((tutorial) => {
    const words = tutorial.split(' ');
    const capitalizedWords = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });
    return capitalizedWords.join(' ');
  });
}

