// const coding_lang = ["cpp" , "js" , "java" , "python" , "ruby"];
// const coding_language = coding_lang.forEach((code) => {
//     return code;
// });

// console.log(coding_language); // undefined
// forEach doesnt return anything

// to get something in return we can use filter based on condition

// const nums = [1,2,23,435,5434,22,90];
// const nums2 = nums.filter((num) => {
//     if(num > 50) return num;
// });

// console.log(nums2);

// using forEach to get values from an array
// const nums = [1,2,3,42,424,42342];
// const nums2 = [];
// nums.forEach((num) => {
//     if(num > 40) nums2.push(num);
// });

// console.log(nums2);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // get the books which are of genre non-fiction using filter
const book_nonfiction = books.filter((book) => {
  if(book.genre === "Non-Fiction") return book;
});
console.log(book_nonfiction);

// // get the books whose publishing date is after 2000
const book_pub = books.filter((book) => {
  if(book.publish > 2000) return book;
});
console.log(book_pub);

// get the books whose publishing date is after 1995 and genre is history
const his_1995 = books.filter((book) => {
  if(book.genre === "History" && book.publish >= 1995) return book;
});
console.log(his_1995);