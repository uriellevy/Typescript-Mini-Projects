// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const equalsButton = document.querySelector('[data-equals]');
// const deleteButton = document.querySelector('[data-delete]');
// const allClearButton = document.querySelector('[data-all-clear]');
// const previousOperandTextElement = document.querySelector('[data-previous-operand]');
// const currentOperandTextElement = document.querySelector('[data-current-operand]') as Element;

// class Calculator {
//     previousOperandTextElement: any;
//     currentOperandTextElement: Element;
//     currentNumber: string;
//     previousNumber: string;
//     operation: string;

//     constructor(previousOperandTextElement: any, currentOperandTextElement: Element) {
//         this.previousOperandTextElement = previousOperandTextElement;
//         this.currentOperandTextElement = currentOperandTextElement;
//         this.currentNumber = '';
//         this.previousNumber = '';
//         this.operation = "";
//         // this.clear();
//     };

//     clear() {
//         this.currentNumber = '';
//         this.previousNumber = '';
//         this.operation = "";
//     };

//     delete() {
//         this.currentNumber = this.currentNumber.toString().slice(0, -1);
//     };

//     appendNumber(number: string) {
//         if (number === '.' && this.currentNumber.includes('.')) return;
//         this.currentNumber = this.currentNumber.toString() + number.toString();
//     };

//     chooseOperation(operation: any) {
//         if (this.currentNumber === '') return;
//         if (this.previousNumber !== '') {
//             this.compute();
//         };
//         this.operation = operation;
//         this.previousNumber = this.currentNumber;
//         this.currentNumber = '';
//     };

//     compute() {
//         let computation;
//         const prevNum = parseFloat(this.previousNumber);
//         const currentNum = parseFloat(this.currentNumber);
//         if (isNaN(prevNum) || isNaN(currentNum)) return;
//         switch (this.operation) {
//             case '+':
//                 computation = prevNum + currentNum;
//                 break
//             case '-':
//                 computation = prevNum - currentNum;
//                 break
//             case '*':
//                 computation = prevNum * currentNum;
//                 break
//             case '/':
//                 computation = prevNum / currentNum;
//                 break
//             default:
//                 return;
//         }
//         this.currentNumber = computation.toString();
//         this.operation = "";
//         this.previousNumber = '';
//     };

//     getDisplayNumber(number: any) {
//         const stringNumber = number.toString();
//         const integerDigits = parseFloat(stringNumber.split('.')[0]);
//         const decimalDigits = stringNumber.split('.')[1];
//         let integerDisplay;
//         if (isNaN(integerDigits)) {
//             integerDisplay = '';
//         } else {
//             integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
//         }
//         if (decimalDigits != null) {
//             return `${integerDisplay}.${decimalDigits}`;
//         } else {
//             return integerDisplay;
//         }
//     };

//     updateDisplay() {
//         this.currentOperandTextElement.innerHTML = this.getDisplayNumber(this.currentNumber);
//         if (this.operation != null) {
//             this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousNumber)} ${this.operation}`;
//         } else {
//             this.previousOperandTextElement.innerText = '';
//         };
//     };
// };

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// numberButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerHTML);
//         calculator.updateDisplay();
//     });
// });

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerHTML);
//         calculator.updateDisplay();
//     });
// });

// equalsButton?.addEventListener('click', () => {
//     calculator.compute();
//     calculator.updateDisplay();
// });

// allClearButton?.addEventListener('click', () => {
//     calculator.clear();
//     calculator.updateDisplay();
// });

// deleteButton?.addEventListener('click', () => {
//     calculator.delete();
//     calculator.updateDisplay();
// });


////////////functional option:

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = <Element>document.querySelector('[data-previous-operand]');
const currentOperandTextElement = <Element>document.querySelector('[data-current-operand]');
let currentNumber = "", previousNumber = "", operation = "";

function allClear() {
    currentNumber = "";
    previousNumber = "";
    operation = "";
};

function onDelete() {
    currentNumber = currentNumber.slice(0, -1);
}

function onUpdateDisplay() {
    currentOperandTextElement.innerHTML = displayFormat(currentNumber);
    previousOperandTextElement.innerHTML = `${displayFormat(previousNumber) + operation}`;
};

function displayFormat(num:string) {
    const number = +num;
    return new Intl.NumberFormat().format(number);
}

function onAppendNumber(num: string) {
    if (num === "." && currentNumber.includes(".")) return;
    currentNumber += num;
}

function onOperationSelect(operator: string) {
    if (!currentNumber) return;
    if (previousNumber) calculate();

    operation = operator;
    previousNumber = currentNumber;
    currentNumber = "";
}

function calculate() {
    let calculation: any;
    const currNumber = parseFloat(currentNumber);
    const prevNumber = parseFloat(previousNumber);
    if (!currNumber || !prevNumber) return;

    switch (operation) {
        case "+":
            calculation = prevNumber + currNumber;
            break;
        case "-":
            calculation = prevNumber - currNumber;
            break;
        case "*":
            calculation = prevNumber * currNumber;
            break;
        case "/":
            calculation = prevNumber / currNumber;
            break;
        default: break;
    };

    currentNumber = calculation;
    operation = "";
    previousNumber = "";
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        onAppendNumber(button.innerHTML);
        onUpdateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        onOperationSelect(button.innerHTML);
        onUpdateDisplay();
    });
});

equalsButton?.addEventListener('click', () => {
    calculate();
    onUpdateDisplay();
});

allClearButton?.addEventListener('click', () => {
    allClear();
    onUpdateDisplay();
});

deleteButton?.addEventListener('click', () => {
    onDelete();
    onUpdateDisplay();
});




