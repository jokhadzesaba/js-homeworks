function searchWord(sentence, word) {
  if (typeof sentence !== 'string' || typeof word !== 'string') {
    throw new Error('Both parameters must be strings.');
  }
  sentence = sentence.replace(/\s/g, "");
  let endOfSubString = word.length;
  let counter = 0;
  let currentIndex = 0;
  while (currentIndex <= sentence.length - endOfSubString) {
    if (
      sentence.substring(currentIndex, currentIndex + endOfSubString) === word
    ) {
      counter++;
      currentIndex += endOfSubString;
    } else {
      currentIndex++;
    }
  }
  return `word ${word} was found ${counter} times`;
}
try {
  console.log(searchWord("The quick brown fox", "fox")); // "'fox' was found 1 times."
  console.log(searchWord("aa, bb, cc, dd, aa", "aa")); // "'aa' was found 2 times."
  console.log(searchWord("sunshine", "sun")); // "'sun' was found 1 times."
} catch (error) {
  console.error(error.message);
}