// constants and variables
const numberButtons = document.querySelectorAll('.data-number');
const operationButtons = document.querySelectorAll('.data-operation');
const equalButton = document.querySelector('.data-equals');
const deleteButton = document.querySelector('.data-delete');
const clearButton = document.querySelector('.data-clear');

let firstNum = '';
let secondNum = '';
let operator = '';

//specific buttons

let oneBtn = document.querySelector('.one');
let twoBtn = document.querySelector('.two');
let thrBtn = document.querySelector('.thr');
let fouBtn = document.querySelector('.fou');
let fivBtn = document.querySelector('.fiv');
let sixBtn = document.querySelector('.six');
let sevBtn = document.querySelector('.sev');
let eigBtn = document.querySelector('.eig');
let ninBtn = document.querySelector('.nin');
let zerBtn = document.querySelector('.zer');



const currentOutput = document.querySelector('.currentOutput');
const previousOutput = document.querySelector('.previousOutput');


function output(digit) {
    currentOutput.innerText = digit;
}

function returnDigits() {
    oneBtn.addEventListener('click', () => {
        output(1);
    });

    twoBtn.addEventListener('click', () => {
        output(2);
    });

    thrBtn.addEventListener('click', () => {
        output(3);
    });

    fouBtn.addEventListener('click', () => {
        output(4);
    });

    fivBtn.addEventListener('click', () => {
        output(5);
    });

    sixBtn.addEventListener('click', () => {
        output(6);
    });

    sevBtn.addEventListener('click', () => {
        output(7);
    });

    eigBtn.addEventListener('click', () => {
        output(8);
    });

    ninBtn.addEventListener('click', () => {
        output(9);
    });

    zerBtn.addEventListener('click', () => {
        output(0);
    });

}

//create output divs
// const previousOutput = document.querySelector('.previousOutput');
// const previousOpTxt = document.createElement('div');
// previousOpTxt.classList.add('previousOp');

// previousOpTxt.appendChild(previousOutput);


// const currentOutput = document.querySelector('.currentOutput');
// const currentOpTxt = document.createElement('div');
// currentOpTxt.classList.add('currentOp');

// currentOpTxt.appendChild(currentOutput);



// operations
function add(a, b) {
    const answer = parseFloat(a) + parseFloat(b);

    return answer
}

function subtract(a, b) {
    const answer = parseFloat(a) - parseFloat(b);

    return answer
}

function multiply(a, b) {
    const answer = parseFloat(a) * parseFloat(b);

    return answer
}

function divide(a, b) {
    if (parseFloat(b) == 0) {
        return "error";
    }
    else {
        return parseFloat(a) / parseFloat(b);
    }
}



// final calculation function

function operate(operator, firstNum, secondNum) {
    switch(operator) {
        case '+':
            return add(firstNum, secondNum);
            break;
        case '-':
            return subtract(firstNum, secondNum);
            break;
        case '*':
            return multiply(firstNum, secondNum);
            break;
        case '/':
            return divide(firstNum, secondNum);
    }
}



// function digitPress() {
//     const currentOutput = document.querySelector('.currentOutput');
//     currentOutput.innerText = 'output';
// }

returnDigits();








