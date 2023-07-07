const ShelfOfBooks = [
  { bookName: "A Christmas Carol", shelfId: 2, floor: 0 },
  { bookName: "A Christmas Carol", shelfId: 2, floor: 0 },
  { bookName: "A Tale of Two Cities", shelfId: 2, floor: 0 },
  { bookName: "A Tale of Two Cities", shelfId: 2, floor: 0 },
  { bookName: "A Tale of Two Cities", shelfId: 2, floor: 0 },
  { bookName: "A Tale of Two Cities", shelfId: 2, floor: 0 },
  { bookName: "Alices Adventures in Wonderland", shelfId: 2, floor: 0 },
  { bookName: "Alices Adventures in Wonderland", shelfId: 2, floor: 0 },
  { bookName: "Brave New World", shelfId: 2, floor: 0 },
  { bookName: "Crime and Punishment", shelfId: 2, floor: 0 },
  { bookName: "Crime and Punishment", shelfId: 2, floor: 0 },
  { bookName: "David Copperfield", shelfId: 2, floor: 0 },
  { bookName: "Don Quixote", shelfId: 2, floor: 0 },
  { bookName: "Don Quixote", shelfId: 2, floor: 0 },
  { bookName: "Don Quixote", shelfId: 2, floor: 0 },
  { bookName: "Dracula", shelfId: 2, floor: 0 },
  { bookName: "Frankenstein", shelfId: 2, floor: 0 },
  { bookName: "Frankenstein", shelfId: 2, floor: 0 },
  { bookName: "Frankenstein", shelfId: 2, floor: 0 },
  { bookName: "Great Expectations", shelfId: 2, floor: 0 },
  { bookName: "Great Expectations", shelfId: 2, floor: 0 },
  { bookName: "Gullivers Travels", shelfId: 2, floor: 0 },
  { bookName: "Gullivers Travels", shelfId: 2, floor: 0 },
  { bookName: "Gullivers Travels", shelfId: 2, floor: 0 },
  { bookName: "Jane Eyre", shelfId: 2, floor: 0 },
  { bookName: "Little Women", shelfId: 2, floor: 0 },
  { bookName: "Moby Dick", shelfId: 2, floor: 0 },
  { bookName: "Moby Dick", shelfId: 2, floor: 0 },
  { bookName: "Moby Dick", shelfId: 2, floor: 0 },
  { bookName: "Moby Dick", shelfId: 2, floor: 0 },
  { bookName: "Oliver Twist", shelfId: 2, floor: 0 },
  { bookName: "Oliver Twist", shelfId: 2, floor: 0 },
  { bookName: "Patterns of Provincial life", shelfId: 2, floor: 0 },
  { bookName: "Pride and Prejudice", shelfId: 2, floor: 0 },
  { bookName: "Pride and Prejudice", shelfId: 2, floor: 0 },
  { bookName: "Pride and Prejudice", shelfId: 2, floor: 0 },
  { bookName: "The Adventures of Huckleberry Finn", shelfId: 2, floor: 0 },
  { bookName: "The Adventures of Huckleberry Finn", shelfId: 2, floor: 0 },
  { bookName: "The Adventures of Huckleberry Finn", shelfId: 2, floor: 0 },
  { bookName: "The Adventures of Huckleberry Finn", shelfId: 2, floor: 0 },
  { bookName: "The Adventures of Tom Sawyer", shelfId: 2, floor: 0 },
  { bookName: "The Hobbit", shelfId: 2, floor: 0 },
  { bookName: "The Hobbit", shelfId: 2, floor: 0 },
  { bookName: "The Hobbit", shelfId: 2, floor: 0 },
  { bookName: "The Pilgrims Progress", shelfId: 2, floor: 0 },
  { bookName: "The Pilgrims Progress", shelfId: 2, floor: 0 },
  { bookName: "The Pilgrims Progress", shelfId: 2, floor: 0 },
  { bookName: "The Pilgrims Progress", shelfId: 2, floor: 0 },
  { bookName: "The Pilgrims Progress", shelfId: 2, floor: 0 },
  { bookName: "The Return of the King", shelfId: 2, floor: 0 },
  { bookName: "The Return of the King", shelfId: 2, floor: 0 },
  { bookName: "The Scarlet Letter", shelfId: 2, floor: 0 },
  { bookName: "The Scarlet Letter", shelfId: 2, floor: 0 },
  { bookName: "The Three Musketeers", shelfId: 2, floor: 0 },
  { bookName: "The Three Musketeers", shelfId: 2, floor: 0 },
  { bookName: "The Wizard of Oz", shelfId: 2, floor: 0 },
  { bookName: "To Kill a Mockingbird", shelfId: 2, floor: 0 },
  { bookName: "To Kill a Mockingbird", shelfId: 2, floor: 0 },
  { bookName: "Treasure Island", shelfId: 2, floor: 0 },
  { bookName: "Treasure Island", shelfId: 2, floor: 0 },
  { bookName: "Treasure Island", shelfId: 2, floor: 0 },
  { bookName: "Uncle Toms Cabin", shelfId: 2, floor: 0 },
  { bookName: "Wuthering Heights", shelfId: 2, floor: 0 },
  { bookName: "Wuthering Heights", shelfId: 2, floor: 0 },
];

const runTest = () => {
  var testCases = [
    {
      name: "Treasure Island",
      ans: 3,
    },
    {
      name: "The Scarlet Letter",
      ans: 2,
    },
    {
      name: "The Adventures of Huckleberry Finn",
      ans: 4,
    },
    {
      name: "Gullivers Travels",
      ans: 3,
    },
    {
      name: "A Christmas Carol",
      ans: 2,
    },
    {
      name: "No name error",
      ans: 0,
    },
  ];

  var result = [];
  testCases.forEach((item) => {
    var ans = getNumberOfCopies(ShelfOfBooks, item.name);
    if (ans == item.ans) {
      result.push(true);
    } else {
      result.push(false);
    }
  });
  console.log(result);
};

//Find the number of copies of "targetBook" in "ShelfOfBooks"
//function should return a whole number
const getNumberOfCopies = (ShelfOfBooks, targetBook) => {
  //write your code here
};

runTest();
