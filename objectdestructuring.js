//object destructure
//object creation syntax
const employeeinfo = { 
eid : 1001,
ename : "Harish",
esalary : 40000   
}
//object destructure(we can get employee details one by one)
const {eid,ename,esalary} = employeeinfo;
console.log(eid);
console.log(ename);
console.log(esalary);
