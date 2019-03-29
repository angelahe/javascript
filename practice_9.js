/*
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
function assertEquals(p1, p2) {

  if (p1===p2) {
    console.log("ok -->", p1);
    return (true);
  }

  console.log("*** the two values are not the same:");
  console.log("p1 --> ", p1);
  console.log("p2 --> ", p2);
  return (false);

}

// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");

//third approach
makeEmail = (firstname, lastname) => firstname+"."+lastname+"@evolveu.ca";

/*
	Write the function to format an email based on an array
*/

// Write the function after this comment ---

function makeEmailArr (emailarray) {
  return makeEmail(emailarray[0], emailarray[1])
}
// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));


/*
	Write the function to format an email based on an object / map
*/

// Write the function after this comment ---
function makeEmailObj(emailobj) {
  //console.log("email address is ", emailobj.fname+'.'+emailobj.lname+'@evolveu.ca');
  return(emailobj.fname+'.'+emailobj.lname+'@evolveu.ca');
}
// and before this comment ---

const objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

const data = {
  staff: [
    {fname:"Jane", lname:"Smith", balance:10},
    {fname:"Liam", lname:"Henry", balance:1000},
    {fname:"Emma", lname:"Jones", balance:1330},
    {fname:"Olivia", lname:"Notly", balance:310},
    {fname:"Noah", lname:"Ho", balance:503},
    {fname:"William", lname:"Lee", balance:520},
    {fname:"Benjamin", lname:"Amis", balance:150},
  ],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta"
};

// Write the function after this comment ---

function loopStaff(staffArray) {

  let staffEmail = [];
  let nextEmail = {};

  for(let i=0; i<staffArray.length; i++) {
    nextEmail = makeEmailObj(staffArray[i]);
    staffEmail.push(nextEmail);
  }
  return(staffEmail);
}
// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
// console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);

//March 19

function loopWithForOf(staff) {
  console.log("in loopWithForOf");

  let staffEmail = [];

  for (let employee of staff) {
    staffEmail.push(makeEmailObj(employee));
  }

  return(staffEmail);
}

function loopWithForIn(staff) {
  console.log("in loopWithForIn");

  let staffEmail = [];

  for (var employee in staff) {
    staffEmail.push(makeEmailObj(employee));
  }

  return(staffEmail);
}

console.log('-----emailForOf')
const emailForOf = loopWithForOf(data.staff);
// console.log(emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);

console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
// console.log(emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);


// March 20

function loopWithEach(staff) {

  let staffEmail = [];

  staff.forEach(function(employee) {
    staffEmail.push(makeEmailObj(employee));
  });

  return (staffEmail);

}

function loopWithMap(staff) {

  const staffemail = staff.map(employee => makeEmailObj(employee));

  return staffEmail;
}


console.log('-----emailWithEach')
const emailWithEach = loopWithEach(data.staff);
// console.log(emailWithEach);
assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);

console.log('-----emailWithMap')
const emailWithMap = loopWithMap(data.staff);
// console.log(emailWithMap);
assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);

//write a function to receive the same array (staff) and return the total of balances

const totalBalance = data.staff.reduce(function(acc, obj) {return acc + obj.balance; }, 0);
console.log("total balance is ", totalBalance);

//create a table of objects of people having name and age
const people = [
    {name:"Jane", age:10},
    {name:"Liam", age:12},
    {name:"Emma", age:14},
    {name:"Olivia", age: 30},
    {name:"Noah", age: 68},
    {name:"William", age: 24},
    {name:"Benjamin", age: 3}
  ];

//write a function to receive the above array and return the total of the ages

//example from mozilla
//var arr = [{x:1},{x:2},{x:4}];
//arr.reduce(function (a, b) {
//  return {x: a.x + b.x}; // returns object with property x
//})
//
// ES6
//arr.reduce((a, b) => ({x: a.x + b.x}));

//totalAges returns an object with the accumulator in x
//const totalAges = people.reduce((a, b) => ({age: a.age + b.age}));
//should return the total but does not
const totalAges2 = people.reduce((acc, obj) => ({ acc: acc + obj.age}, 0));
//try with other javascript syntax
const totalAges3 = people.reduce(function (acc, obj) { return acc + obj.age; }, 0); // 161

//console.log("totalAges is :", totalAges);
console.log("totalAges2 is :", totalAges2);
console.log("totalAges3 is : ", totalAges3);

//write a function to receive the above array and return the average the ages

const averageAge = (people.reduce(function (acc, obj) { return acc + obj.age; }, 0)/people.length);

console.log("average age is ", averageAge);

//March 28 create a new array for balances >= 1000.
let largeBalances = data.staff.filter(employee => employee.balance >= 1000)
console.log(largeBalances);
assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");