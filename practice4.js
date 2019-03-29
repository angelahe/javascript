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
