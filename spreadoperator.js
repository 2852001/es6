//Spread Operator
//In es6 spread operator is represented with 3 dot symbols(...)
const team1 = ["Dheeraj","Manisha","Harish"];
const team2 = [...team1,"Mayuri","Hariharan","Ahmed"];

console.log(team2);

//spread Operator example 2
const team3 = ["Dheeraj","Manisha","Harish"];
const team4 = [...team3];
console.log(team4);

//spread Operator example 3
const team5 = ["A",..."EIO","U"];
console.log(team5);
