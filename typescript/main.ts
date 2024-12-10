let currentInput: string = '';
let previousInput: string | null = null;
let operation: string | null = null;
let isScientificMode: boolean = false;

function appendToDisplay(value: string) {
    currentInput += value;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = currentInput;
}

function setOperation(op: string) {
    if (currentInput === '') return;
    if (previousInput === null) {
        previousInput = currentInput;
    } else {
        calculate();
    }
    operation = op;
    currentInput = '';
}

function calculate() {
    if (previousInput === null || currentInput === '' || operation === null) return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result: number;

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
    const scientificButtons = document.querySelector('.scientific-buttons');
    if (scientificButtons) {
        scientificButtons.classList.remove('hidden');
    }
}

function switchToNormalMode() {
    isScientificMode = false;
    const scientificButtons = document.querySelector('.scientific-buttons');
    if (scientificButtons) {
        scientificButtons.classList.add('hidden');
    }
}

function power() {
    const value = parseFloat(currentInput);
    currentInput = Math.pow(value, 2).toString();
    updateDisplay();
}

function factorial() {
    const num = parseInt(currentInput);
    if (num < 0) {
        alert("Erreur: Factorielle non définie pour les nombres négatifs.");
        clearDisplay();
        return;
    }
    currentInput = factorialHelper(num).toString();
    updateDisplay();
}

function factorialHelper(n: number): number {
    return n <= 1 ? 1 : n * factorialHelper(n - 1);
}

function squareRoot() {
    const num = parseFloat(currentInput);
    if (num < 0) {
        alert("Erreur: Racine carrée non définie pour les nombres négatifs.");
        clearDisplay();
        return;
    }
    currentInput = Math.sqrt(num).toString();
    updateDisplay();
}

function convertBase() {
    const num = parseInt(currentInput);
    if (isNaN(num)) {
        alert("Entrée invalide pour la conversion.");
        return;
    }
    const binary = num.toString(2);
    const hex = num.toString(16);
    currentInput = `Binaire: ${binary}, Hex: ${hex}`;
    updateDisplay();
}

function exponential() {
    const num = parseFloat(currentInput);
    currentInput = Math.exp(num).toString();
    updateDisplay();
}

function logarithm() {
    const num = parseFloat(currentInput);
    if (num <= 0) {
        alert("Erreur: Logarithme non défini pour les nombres ≤ 0.");
        clearDisplay();
        return;
    }
    currentInput = Math.log(num).toString();
    updateDisplay();
}

function cosinus() {
    const num = parseFloat(currentInput);
    currentInput = Math.cos(num).toString();
    updateDisplay();
}

function sinus() {
    const num = parseFloat(currentInput);
    currentInput = Math.sin(num).toString();
    updateDisplay();
}

function tangente() {
    const num = parseFloat(currentInput);
    currentInput = Math.tan(num).toString();
    updateDisplay();
}

function modulo() {
    const [dividend, divisor] = currentInput.split(',').map(Number);
    if (divisor === 0) {
        alert("Erreur: Division par zéro dans le modulo.");
        clearDisplay();
        return;
    }
    currentInput = (dividend % divisor).toString();
    updateDisplay();
}


function afficherHeure(): void {
    const maintenant = new Date();

    
    const heures: number = new Date().getHours();
    const minutes: number = new Date().getMinutes();
    const secondes: number = new Date().getSeconds();
    
    console.log(`Heure actuelle : ${heures}:${minutes}:${secondes}`);
}


afficherHeure();