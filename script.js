// Class
const user = document.querySelector('.input');
const useroE = document.querySelector('.oE');
const usercT = document.querySelector('.cT');
const usersN = document.querySelector('.sN');
const btnSubmit = document.querySelector('.btn');
const ans = document.querySelector('.result');

// Button
btnSubmit.addEventListener('click', function () {
    let userInput = user.value;

    let userInput2 = function (str) {
        return str.split(',').map(Number);
    };

    // Filter Method
    if (useroE.checked === true) {
        const result = userInput2(userInput).filter((arr) => arr % 2 === 0);
        console.log(result);
        ans.textContent = `The even numbers are: ${result}`;
    }
    // Reduce Method
    if (usercT.checked === true) {
        const result = userInput2(userInput).reduce((a, b) => a + b);
        console.log(result);
        ans.textContent = `The total is: ${result}`;
    }
    if (usersN.checked === true) {
        const result = userInput2(userInput).sort((a, b) => a - b);
        console.log(result);
        ans.textContent = `${result}`;
    }
});
