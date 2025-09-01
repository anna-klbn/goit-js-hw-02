const checkForSpam = function (message) {
    const newMassage = message.toLowerCase();
    if (newMassage.includes("sale") || newMassage.includes("spam")) {
        return true;
    } else {
        return false;
    }
};


console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true