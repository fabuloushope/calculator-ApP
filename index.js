const display = document.getElementById('display');

function appendValue(input) {
    if (display.value === "" && ['+', '-', '*', '/'].includes(input)) {
        return;
    }
    display.value += input;
}