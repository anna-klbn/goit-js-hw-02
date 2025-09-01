const formatString = function (string) {
    let newStr = "";
   
    if (string.length <= 40) {
        newStr = string;
    } else {
        newStr = string.slice(0, 40) + "...";
        
    }
    return newStr;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// повернеться оригінальний рядок
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// повернеться форматований рядок
console.log(formatString("Curabitur ligula sapien."));
// повернеться оригінальний рядок