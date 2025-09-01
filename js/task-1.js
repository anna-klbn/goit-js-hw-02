const logItems = function (array) {
   
    for (const arr of array) {
        let numberItems = array.indexOf(arr) + 1;

        console.log(`${numberItems} - ${arr}`);
    }
}

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);