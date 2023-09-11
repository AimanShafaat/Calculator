
function getNumber (num) {
    var results = document.getElementById("result");
    results.value += num;
}


function getResult () {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}


function clearResult() {
    var getClear = document.getElementById("result");
    getClear.value = "";
}