let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.querySelector('.display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.querySelector('.display').innerText = '0';
}

function calculate() {
    try {
        const result = eval(displayValue);
        document.querySelector('.display').innerText = result;
        displayValue = result.toString();
    } catch (error) {
        document.querySelector('.display').innerText = 'Error';
        displayValue = '';
    }
}

// Event listeners for buttons
const buttons = document.querySelectorAll('.key');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;
        if (buttonText === '=' || buttonText === 'C') {
            if (buttonText === '=') {
                calculate();
            } else {
                clearDisplay();
            }
        } else {
            appendToDisplay(buttonText);
        }
    });
});