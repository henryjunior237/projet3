var currentInput = '';
var previousInput = null;
var operation = null;
var isScientificMode = false;
function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}
function updateDisplay() {
    var display = document.getElementById('display');
    display.value = currentInput;
}
function setOperation(op) {
    if (currentInput === '')
        return;
    if (previousInput === null) {
        previousInput = currentInput;
    }
    else {
        calculate();
    }
    operation = op;
    currentInput = '';
}
function calculate() {
    if (previousInput === null || currentInput === '' || operation === null)
        return;
    var prev = parseFloat(previousInput);
    var current = parseFloat(currentInput);
    var result;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Erreur: Division par zéro");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    previousInput = null;
    updateDisplay();
}
function clearDisplay() {
    currentInput = '';
    previousInput = null;
    operation = null;
    updateDisplay();
}
function switchToScientificMode() {
    isScientificMode = true;
    var scientificButtons = document.querySelector('.scientific-buttons');
    if (scientificButtons) {
        scientificButtons.classList.remove('hidden');
    }
}
function switchToNormalMode() {
    isScientificMode = false;
    var scientificButtons = document.querySelector('.scientific-buttons');
    if (scientificButtons) {
        scientificButtons.classList.add('hidden');
    }
}
function power() {
    var value = parseFloat(currentInput);
    currentInput = Math.pow(value, 2).toString();
    updateDisplay();
}
function factorial() {
    var num = parseInt(currentInput);
    if (num < 0) {
        alert("Erreur: Factorielle non définie pour les nombres négatifs.");
        clearDisplay();
        return;
    }
    currentInput = factorialHelper(num).toString();
    updateDisplay();
}
function factorialHelper(n) {
    return n <= 1 ? 1 : n * factorialHelper(n - 1);
}
function squareRoot() {
    var num = parseFloat(currentInput);
    if (num < 0) {
        alert("Erreur: Racine carrée non définie pour les nombres négatifs.");
        clearDisplay();
        return;
    }
    currentInput = Math.sqrt(num).toString();
    updateDisplay();
}
function convertBase() {
    var num = parseInt(currentInput);
    if (isNaN(num)) {
        alert("Entrée invalide pour la conversion.");
        return;
    }
    var binary = num.toString(2);
    var hex = num.toString(16);
    currentInput = "Binaire: ".concat(binary, ", Hex: ").concat(hex);
    updateDisplay();
}
function exponential() {
    var num = parseFloat(currentInput);
    currentInput = Math.exp(num).toString();
    updateDisplay();
}
function logarithm() {
    var num = parseFloat(currentInput);
    if (num <= 0) {
        alert("Erreur: Logarithme non défini pour les nombres ≤ 0.");
        clearDisplay();
        return;
    }
    currentInput = Math.log(num).toString();
    updateDisplay();
}
function cosinus() {
    var num = parseFloat(currentInput);
    currentInput = Math.cos(num).toString();
    updateDisplay();
}
function sinus() {
    var num = parseFloat(currentInput);
    currentInput = Math.sin(num).toString();
    updateDisplay();
}
function tangente() {
    var num = parseFloat(currentInput);
    currentInput = Math.tan(num).toString();
    updateDisplay();
}
function modulo() {
    var _a = currentInput.split(',').map(Number), dividend = _a[0], divisor = _a[1];
    if (divisor === 0) {
        alert("Erreur: Division par zéro dans le modulo.");
        clearDisplay();
        return;
    }
    currentInput = (dividend % divisor).toString();
    updateDisplay();
}
function updateTime() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    currentInput = time;
    updateDisplay();
}
