const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
    return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (_allLogins, login) {
    return !logins.includes(login);
};

const addLogin = function (allLogins, login) {
   

    if (!isLoginValid(login)) {
        return "Помилка! Логін повинен бути від 4 до 16 символів";
    } 

    if (!isLoginUnique(allLogins, login)) {
        return "Такий логін вже використовується!";
    }
    allLogins.push(login);
    return "Логін успішно доданий!"
        
};

console.log(addLogin(logins, "Alex")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'