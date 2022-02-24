//rest parameter
//In ES6 we are using 3 dot symbols(...) to represent rest parameter
const res = (a,b,...c) => console.log(a+" "+b+" "+c );
res(10,20,30,40,50);

//rest parameter eg.2
const res1 = (...x) => console.log(x);
res1(1,2,3,4,5);