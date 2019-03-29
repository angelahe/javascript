"use strict";

(function() {
    const cardcontainer = document.getElementsByClassName("cardcontainer")[0];


    const data =
        {
            clients:
                [
                    {name: "Larry", balance: 10},
                    {name: "Liam", balance: 1000},
                    {name: "Emma", balance: 1330},
                    {name: "Olivia", balance: 310},
                    {name: "Noah", balance: 503},
                    {name: "William", balance: 520},
                    {name: "Benjamin", balance: 150},
                ]
        };


    function createClassElement(className, type) {
        const newElement = document.createElement(type);
        newElement.className = className;
        return newElement;
    }

    function createElement(type) {
        return document.createElement(type);
    }

    function createClassElementWithText(type, className, classText) {
        const newElement = createClassElement(className, type);
        const newElementText = document.createTextNode(classText);
        newElement.appendChild(newElementText);

        return newElement;
    }

    function createNewCard(name, balance) {

        const cardString = name + " " + balance.toString(10);

        const newCard = createClassElement("card", "div");
        const newP = createClassElementWithText("p", "cardID", cardString);
        const btnDelete = createClassElementWithText("button", "btnDelete", "Delete");

        newCard.appendChild(newP);
        newCard.appendChild(btnDelete);

        return (newCard);
    }

    function onDeleteClicked(event) {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }

    function onContainerClicked(event) {
        if (event.target.className == "btnDelete") {
            onDeleteClicked(event);
        }
    }

    function AddNewCard(name, balance) {
        const newCardItem = createNewCard(name, balance);
        cardcontainer.appendChild(newCardItem);
    }

    /*
    console.log("data clients", data.clients);
    console.log("first data client", data.clients[1]);
    console.log("first client", data.clients[1].name, data.clients[1].balance);
    console.log("number of elements", data.clients.length);
    */

    for (let i = 0; i < data.clients.length; i++) {
        AddNewCard(data.clients[i].name, data.clients[i].balance);
    }

    cardcontainer.addEventListener("click", onContainerClicked);
}) ();