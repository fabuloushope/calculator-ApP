const display = document.getElementById('display');

function appendValue(input) {
    if (display.value === "" && ['+', '-', '*', '/'].includes(input)) {
        return;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        if (display.value) {
            const result =  new Function(`return ${display.value}`)();

            if (result === Infinity || isNaN(result)) {
                display.value = "Error";
            } else {
                display.value = result;
            }
        }
    } catch (error) {
        display.value = 'Error';
    }
}