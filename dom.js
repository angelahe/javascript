const btnshow = document.getElementById("btnshow");
const btnadd = document.getElementById("btnadd");
const btndelete = document.getElementById("btndelete");
const position = document.getElementById("position");

let domdiv = document.getElementById("domdiv");
let counter = 4;
let listOfStuff = document.getElementsByTagName("ol");
const listOfStuff2 = document.getElementById("thislist");
function onDomDivClicked(event){

    console.log(event);
}

function onButtonShowClicked() {
    console.log("Show ol child items");
    console.log("ol as a whole", listOfStuff[0]);
    console.log("ol children", listOfStuff[0].children);
}

function onButtonAddClicked() {

    const index = Number(position.value);
    console.log("Add button was clicked");
    //console.log("position is", index);
    //console.log("position is", position.value);
    //console.log("listOfStuff[0]")
    let newListItem = document.createElement("li");
    newListItem.textContent = "Item " + String(counter);
    counter++;
    if(position != NaN){
        let listItemAfter = listOfStuff[0].children[index-1];
        listOfStuff[0].insertBefore(newListItem, listItemAfter);
    }
    else {
        listOfStuff.appendChild(newListItem);
    }
}

function onButtonDeleteClicked(event) {
    const index = Number(position.value);
    listOfStuff2.removeChild(listOfStuff2.childNodes[index]);
}

domdiv.addEventListener("click", onDomDivClicked);
btnshow.addEventListener("click", onButtonShowClicked);
btndelete.addEventListener("click", onButtonDeleteClicked);
btnadd.addEventListener("click", onButtonAddClicked);

/////////////////////////////////////////////
//
//  Working with Cards
//
/////////////////////////////////////////////

"use strict";

const cardcontainer = document.getElementsByClassName("cardcontainer")[0];
const addCard = document.getElementById("addCard");

let cardCount = 4;

function createClassElement(className, type) {
    let newElement = document.createElement(type);
    newElement.className = className;
    return newElement;
}

function createElement(type) {
    return document.createElement(type);
}

function createClassElementWithText(type, className, classText){
    let newElement = createClassElement(className, type);
    let newElementText = document.createTextNode(classText);
    newElement.appendChild(newElementText);

    return newElement;
}

function createNewCard() {
    let cardString = "Card " + cardCount;
    cardCount++;

    let newCard = createClassElement("card", "div");
    let newP = createClassElementWithText("p", "cardID", cardString);
    let btnBefore = createClassElementWithText("button", "btnAddBefore", "Add Before");
    let btnAfter = createClassElementWithText("button", "btnAddAfter", "Add After");
    let brElement = createElement("br");
    let btnDelete = createClassElementWithText("button", "btnDelete", "Delete");

    newCard.appendChild(newP);
    newCard.appendChild(btnBefore);
    newCard.appendChild(btnAfter);
    newCard.appendChild(brElement);
    newCard.appendChild(btnDelete);

    return(newCard);
}

function onAddBeforeClicked(event) {
    let newCardItem  = createNewCard();
    cardcontainer.insertBefore(newCardItem, event.target.parentNode);
}

function onAddAfterClicked(event) {

    let newCardItem = createNewCard();
    cardcontainer.insertBefore(newCardItem, event.target.parentNode.nextSibling);

}

function onDeleteClicked(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

function onAddCardClicked() {
    let newCardItem = createNewCard();
    cardcontainer.appendChild(newCardItem);
}

function onCardContainerClicked(event) {

    switch (event.target.className) {
        case "btnAddBefore": {
            onAddBeforeClicked(event);
            break;
        }
        case "btnAddAfter": {
            onAddAfterClicked(event);
            break;
        }
        case "btnDelete": {
            onDeleteClicked(event);
            break;
        }
        default:
        //no action needed for any other click event
    }
}

cardcontainer.addEventListener("click", onCardContainerClicked);
addCard.addEventListener("click", onAddCardClicked);