/*
	--- make me an email
	Write the function that will make this code work.
*/
console.log("Make me an Email");

// ---- put function here ----
// first approach
//function makeEmail(firstname, lastname) {
//    return(firstname+"."+lastname+"@evolveu.ca");
//}

//second approach
//makeEmail = (firstname, lastname) => {
//    return(firstname+"."+lastname+"@evolveu.ca");
//}

//third approach
makeEmail = (firstname, lastname) => firstname+"."+lastname+"@evolveu.ca";

const larryEmail = makeEmail('larry', 'shumlich');
const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

if (larryEmail != shouldBeLarryEmail) {
    console.log("***** We have an error here *****",
        larryEmail,
        " is not = ",
        shouldBeLarryEmail,
        " and it should be."
    )
}

console.log("Larry:", larryEmail);

console.log("Jane:", makeEmail("jane", "lee"));
console.log("Bill:", makeEmail("jane", "lee"));
console.log("Sam:", makeEmail("jane", "lee"));
