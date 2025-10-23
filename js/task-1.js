const logItems = function (array) {
  
    for (const arr of array) {
        console.log(`${array.indexOf(arr) + 1} - ${arr}`);
    }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);