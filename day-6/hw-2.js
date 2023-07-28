function readingStatus(books) {
  for (let i in books) {
    let str = "";
    if (books[i].haveRead) {
      books[i].daysAgo = function () {
        let x = new Date().getDate() - books[i].dateOfRead.getDate();
        return `${x} days ago`;
      };
      console.log(
        (str += `${books[i].author} have read ${books[i].title} book ${books[i].daysAgo()}`));
    } else {
      console.log((str += `${books[i].author} havev't read ${books[i].title} book yet`));
    }
  }
}
var Books = [
  {
    author: "Bill",
    title: "The Road Ahead",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
  },
  {
    author: "Steve",
    title: "Walter Isaacson",
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
  },
  {
    author: "Jhon",
    title: "The Hunger Games",
    haveRead: false,
    dateOfRead: NaN,
  },
];
readingStatus(Books);
