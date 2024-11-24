function isValidBinary(num) {
    return /^[01]+$/.test(num);
}

function isValidOctal(num) {
    return /^[0-7]+$/.test(num);
}

function isValidHexadecimal(num) {
    return /^[0-9A-Fa-f]+$/.test(num);
}

function isValidDecimal(num) {
    return /^\d+(\.\d+)?$/.test(num);
}

function convert() {
    const inputSystem = document.getElementById('fromSystem').value;
    const inputValue = document.getElementById('inputNumber').value.trim();
    
    // Clear previous results
    document.getElementById('binaryResult').value = '';
    document.getElementById('decimalResult').value = '';
    document.getElementById('octalResult').value = '';
    document.getElementById('hexResult').value = '';

    let decimal;

    // Input validation
    switch(inputSystem) {
        case 'binary':
            if (!isValidBinary(inputValue)) {
                alert('Please enter a valid binary number (0s and 1s only)');
                return;
            }
            decimal = parseInt(inputValue, 2);
            break;

        case 'decimal':
            if (!isValidDecimal(inputValue)) {
                alert('Please enter a valid decimal number');
                return;
            }
            decimal = parseFloat(inputValue);
            break;

        case 'octal':
            if (!isValidOctal(inputValue)) {
                alert('Please enter a valid octal number (0-7 only)');
                return;
            }
            decimal = parseInt(inputValue, 8);
            break;

        case 'hexadecimal':
            if (!isValidHexadecimal(inputValue)) {
                alert('Please enter a valid hexadecimal number (0-9 and A-F only)');
                return;
            }
            decimal = parseInt(inputValue, 16);
            break;
    }

    // Convert to all bases
    document.getElementById('binaryResult').value = decimal.toString(2);
    document.getElementById('decimalResult').value = decimal.toString(10);
    document.getElementById('octalResult').value = decimal.toString(8);
    document.getElementById('hexResult').value = decimal.toString(16).toUpperCase();
}