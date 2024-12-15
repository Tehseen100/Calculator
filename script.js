let outPutBox = document.querySelector("#outPutBox");


function display(num) {
    outPutBox.value += num;
}

function claculate() {
    try {
        if (outPutBox.value != "") {
            outPutBox.value = eval(outPutBox.value);
        } else {
            outPutBox.value = "";
        }
    }
    catch (err) {
        outPutBox.value = "Error"
    }
}

function clearAll() {
    outPutBox.value = "";
}

function del() {
    outPutBox.value = outPutBox.value.slice(0, -1);
}