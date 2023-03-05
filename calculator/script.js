let result = document.getElementById("result");

function addToResult(val) {
    result.value += val;
}

function clearResult() {
    result.value = "";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    let expression = result.value;
    try {
        let resultValue = eval(expression);
        result.value = resultValue;
    } catch (err) {
        alert("Invalid Expression!");
    }
}