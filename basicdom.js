const idH1 = document.getElementById("idH1");
const idH2 = document.getElementById("idH2");
const idH3 = document.getElementById("idH3");
const idH4 = document.getElementById("idH4");
const idBtnPush = document.getElementById("idBtnPush");

const listOfStuff = document.getElementById("listOfStuff");
const btnAddToList = document.getElementById("btnAddToList");
const listInput = document.getElementById("inputListItem");
const btnAddBefore = document.getElementById("btnAddBefore");
const inputPostion = document.getElementById("inputPosition");

// initialize button counter
let click = 0;

function onButtonPushed() {

    // counter
    click++;
    idBtnPush.textContent = click;

    // append the button to add a new element div h1 to the end of the body
    let elemDiv = document.createElement("h1");

    // defining text to add to the new h1 heading
    let y = document.createTextNode("Ancillary Element");

    // append text to h1
    elemDiv.appendChild(y);

    document.body.appendChild(elemDiv);

}

// function to change <h1> header from Hello World to Hello Universe on a click event
function onBtnPushed2() {

    if(idH1.textContent === "Hello World" ) {
        idH1.textContent = "Hello Universe";
    }	else {
        idH1.textContent = "Hello World";
    }
}

// change Hello Alberta to Hello Saskatchewan each time the mouse goes over it,
// with mouseover EventListener

function onBtnPushed3() {
    if(idH3.textContent === "Hello Alberta" ) {
        idH3.textContent = "Hello Saskatchewan";
    }	else {
        idH3.textContent = "Hello Alberta";
    }

}

// change Hello Calgary to Hello Saskatoon each time you leave it
// with mouseout eventlistner

function onBtnPushed4() {
    if(idH4.textContent === "Hello Calgary" ) {
        idH4.textContent = "Hello Saskatoon";
    }	else {
        idH4.textContent = "Hello Calgary";
    }

}

// change Hello Canada to Hello Banff
// with a touchmove eventlistner

function onBtnPushed5() {
    if(idH2.textContent === "Hello Canada" ) {
        idH2.textContent = "Hello Banff";
    }
    else {
        idH2.textContent = "Hello Canada";
    }
}

// create function onBodyClick
function onBodyClick(e) {
    // console log the target of event e, changes depending on where you click the screen
    //console.log("target of click: ", e.target);
    let targetplace = e.target.getAttribute("place");
    console.log("place attribute of target: ", targetplace);
}

function onAddToListPushed() {

    let newListItem = document.createElement("li");
    newListItem.textContent = listInput.value;
    listOfStuff.appendChild(newListItem);
}

function onAddBeforePushed() {
    let position = Number(inputPostion.value);
    let newListItem = document.createElement("li");

    newListItem.textContent = listInput.value;
    let listItemAfter = listOfStuff.children[position-1];
    listOfStuff.insertBefore(newListItem, listItemAfter);

}

// adding things to the div tag on basicDOM.html
// creating the element
let div2 = document.createElement("idH5");
//console.log("idH5: ", idH5);
// defining text to add to the new div
let y1 = document.createTextNode("This is the div element");
// append text to h1
div2.appendChild(y1);

document.getElementById(div2);
//console.log("div2 text: ", div2);

// create a click listener to the body of the document
// have specify the first location [0] of the body array
let bodyTag = document.getElementsByTagName("body")[0];
//console.log("bodyTag: ", bodyTag);

idBtnPush.addEventListener("click", onButtonPushed);
idH1.addEventListener("click", onBtnPushed2);
idH3.addEventListener("mouseover", onBtnPushed3);
idH4.addEventListener("mouseout", onBtnPushed4);
idH2.addEventListener("touchmove", onBtnPushed5);
bodyTag.addEventListener("click", onBodyClick);
btnAddToList.addEventListener("click", onAddToListPushed);
btnAddBefore.addEventListener("click", onAddBeforePushed);