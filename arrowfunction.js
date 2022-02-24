//ES5 syntax
/*var result = function display() 
{
    console.log("Edubridge");
}
result(); 
*/
//ES6 syntax(arrowfunction without parameters)
var result =  () =>  console.log("Edubridge");
result();

//ES6 syntax(arrowfunction with parameters)
const res = (a,b) => console.log(a+" "+b);
res(10,20);

//ES6 syntax(arrowfunction with parameters and body)
const res1 = (a,b) => {
     console.log(a+b);
     console.log("Hi");
     }
res1(10,20);