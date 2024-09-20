const uniq = require("uniq");
const ary = [1,3,3,5,7,7,9,9,9];
const result = uniq(ary);


console.log(result); // [1, 3, 5, 7, 9]

console.log(process.argv[2]); 