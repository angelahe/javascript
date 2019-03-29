console.log("Hello from exercises");

const array1 = [3,1];

// write the function that will make this work


function orderArray(toOrder) {
    //approach 1
    // return toOrder.sort();
    //approach 2
    /*
    if (toOrder[1] < toOrder[0])
        return([toOrder[1], toOrder[0]]);
    else
        return(toOrder);
    */
    //approach 3
    return (toOrder[1] < toOrder[0]) ? ([toOrder[1], toOrder[0]]) : (toOrder);
}


console.log("Should Be: 1, 3:",
    orderArray(array1));

console.log("Should Be: 1, 5:",
    orderArray([1, 5]));


console.log("Should Be: 10, 20:",
    orderArray([20, 10]));
