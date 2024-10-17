let screenValue = '';

function append(value) {
    screenValue += value;
    document.getElementById('result').value = screenValue;
}

function clearScreen() {
    screenValue = '';
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        let result = eval(screenValue);
        document.getElementById('result').value = result;
        screenValue = result; // Set hasil ke layar untuk kalkulasi berikutnya
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Fungsi untuk menangani input dari keyboard
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        append(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        append(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // Untuk mencegah form submit saat tekan Enter
        calculate();
    } else if (key === 'Backspace') {
        screenValue = screenValue.slice(0, -1);
        document.getElementById('result').value = screenValue;
    } else if (key === 'Escape') {
        clearScreen();
    }
});
