class MyString {
  reverse(string) {
    return string.split("").reduce((acc, char) => char + acc, "");
  }
  ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }
  ucWords(string) {
    return string.split(" ").map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  }
}

let myString = new MyString();
console.log(myString.ucWords("abcde abcde abcde"));
