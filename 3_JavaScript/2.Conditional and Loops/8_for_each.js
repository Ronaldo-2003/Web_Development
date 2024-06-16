const coding = ["js" , "python" , "cpp" , "java"];
// coding.forEach(function (code) {console.log(code);}) // in callback function name is not present

// now using arrow function for same purpose
// coding.forEach((code) => {console.log(code);})

// now using forEach for normal function
// function print(code){
//     console.log(code);
// }
// coding.forEach(print); // just pass the reference dont execute the function

//forEach has three parameters not only item
// coding.forEach((item,index,arr) => {
//     console.log(index,":",item,", arr:",arr);
// })

// using forEach on an array conatining object
const mycoding = [
    {
        language : "python",
        extension : "py"
    },

    {
        language : "javascript",
        extension : "js"
    },

    {
        language : "c plus plus",
        extension : "cpp"
    }
];

mycoding.forEach((item) => {console.log(item.extension)});