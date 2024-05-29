let display = document.getElementById("display");

function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function backspace() {
    const display = document.getElementById("display");
    let curentv = display.value;
    display.value = curentv.slice(0, -1)
}

function calculateResult() {
    try {
        const display = document.getElementById("display");
        const result = eval(display.value);
        display.value = result;
    } catch (e) {
        clearDisplay();
        const errorContainer = document.getElementById('error-container');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger';
        errorDiv.innerText = e.message;
        errorContainer.appendChild(errorDiv);
    }
}

function DoIt() {
    for (let i = 1; i <= 1000; i++) {
        let String = i.toString();
        if (String.includes('5')) {
            console.log("Number with 5:", i, "lenght ", String.length);
        }
    }
}