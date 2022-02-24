// drawback1 of var keywprd
//let can be used in block scope effectively

for(let i=1;i<=10;i++)
{
    console.log("inner i value is :"+i);
}
console.log("outer i value is :"+i);


//drawback2 of var keyword
// let does not allow re defined variables
let x = 20;
let x = 30;
console.log(x); 

//drawback3 of var keyword
let a = 10;
{
    let b = 20;
    let b = 30;
    console.log(b);
}

//constant keyword 
const price = 200;
{
    price = 400;
    console.log(price);
}


