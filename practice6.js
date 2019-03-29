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
