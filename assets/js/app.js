// Pre-class: Write a function that accepts a string and outputs the number of vowels (not counting y).  Ex: Input: "hello",Output: 2    Input: "you are great!"Output: 6    Input: "why?",Output: 0

// variables (const / let)
const vowelList = ["a", "e", "i", "o", "u"];
const exInput = "hellooooO";

const questions = [
  {
    question:
      "What is the average forward velocity of a coconut-laden swallow?",
    answers: ["25", "African or European?", "42", "All of the above"],
    answerIndex: "African or European?",
  },
];

// define functions
function numberVowels(stringToCheck) {
  let count = 0;
  // eliminate non vowels letters - eo
  const inputArray = stringToCheck.split("");
  for (let index = 0; index < inputArray.length; index++) {
    const letter = inputArray[index];
    // if in the list, do what -- add the count or store in temp array
    // convert to lowercase (input) so we can use short, non-caps vowel list
    if (vowelList.includes(letter.toLowerCase())) {
      count++;
    }
    // for (let index = 0; index < vowelList.length; index++) {
    //   const vowel = vowelList[index];
    //   if (letter.toLowerCase() === vowel) {
    //     count++;
    //   }
    // }
  }

  // LATER... (filter) -- compare against vowelList

  return count;
}

// logic - console.log - start the app
console.log(numberVowels(exInput));
