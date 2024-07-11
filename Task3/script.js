let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let currentOperation = '';
let previousOperation = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (buttonText === 'C') {
            currentOperation = '';
            previousOperation = '';
            result = '';
            display.value = '';
        } else if (buttonText === '=') {
            if (previousOperation!== '') {
                result = eval(previousOperation + currentOperation);
                display.value = result;
                currentOperation = '';
                previousOperation = '';
            }
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            if (currentOperation!== '') {
                previousOperation += currentOperation + buttonText;
                currentOperation = '';
                display.value = previousOperation;
            }
        } else {
            currentOperation += buttonText;
            display.value = currentOperation;
        }
    });
});