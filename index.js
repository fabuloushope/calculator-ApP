const display = document.getElementById('display');

// This section  receives inputs from the browser 
function values(input) {
    if (display.value === "" && ['+', '-', '*', '/'].includes(input)) {
        return;
    }
    display.value += input;
}

function clearValues() {
    display.value = '';
}

function delValues() {
    display.value = display.value.toString().slice(0,-1);
}

function equalValues() {
    try {
        if (display.value) {
            const result =  new Function(`return ${display.value}`)();

            if (result === Infinity || isNaN(result)) {
                display.value = "eRror";
            } else {
                display.value = result;
            }
        }
    } catch (error) {
        display.value = 'Error';
    }
}