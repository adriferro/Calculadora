// Adrián Fernández Rodríguez
//

let result = "";
let expresion = "";
let newOp = true;

const operation = document.getElementById("operation");
const screen = document.getElementById("screen");

const keyoper = document.querySelectorAll(".kOpe");
const keynum = document.querySelectorAll(".kNum");

const percentage = document.getElementById("percentage");
const pi = document.getElementById("pi"); 
const c = document.getElementById("c");
const del = document.getElementById("del");

const fraction = document.getElementById("fraction");
const exp = document.getElementById("exp");
const sqr = document.getElementById("sqr");

const equal = document.getElementById("equal");
const sign = document.getElementById("sign");

keyoper.forEach((keyoper) => {
    keyoper.addEventListener("click", () => {
        expresion += keyoper.textContent;
        operation.textContent = expresion;
        newOp = false;
    });
});

keynum.forEach(keynum => {
    keynum.addEventListener("click", () => {
        if (screen.textContent !== "0" && newOp) {
            expresion = "";
        }
        result = "0";
        expresion += keynum.textContent;
        operation.textContent = expresion;
    });
});

percentage.addEventListener("click", () => {
    let result;
    if (isFinite(eval(expresion))) {
        result = Number(eval(expresion) / 100);
        expresion = result.toString();
        screen.textContent = result;
    } else {
        screen.textContent = "Error";
    }
});

pi.addEventListener("click", () => {
    expresion += "3.14";
    operation.textContent = expresion;
});

c.addEventListener("click", () => {
    screen.textContent = "0";
    expresion = ""; 
    operation.textContent = ""; 
    result = "";
});

del.addEventListener("click", () => {
    if (expresion.length > 0) {
        expresion = expresion.slice(0, -1);
        operation.textContent = expresion;
    }
});

fraction.addEventListener("click", () => {
        result = Number(1 / expresion);
        operation.textContent = "1/(" + expresion + ")";
        expresion = result.toString();
        screen.textContent = result;
});

exp.addEventListener("click", () => {
        result = Math.pow(expresion, 2);
        operation.textContent = "sqr(" + expresion + ")";
        expresion = result.toString();
        screen.textContent = result;
});

sqr.addEventListener("click", () => {
        result = Number(Math.sqrt(expresion).toFixed(2));
        operation.textContent = "√(" + expresion + ")";
        expresion = result.toString();
        screen.textContent = result;

});

sign.addEventListener("click", () => {
        result = -1 * expresion;
        expresion = result.toString();
        screen.textContent = result;

});

equal.addEventListener("click", () => {
        result = Number(eval(expresion).toFixed(2));
        screen.textContent = result;
        expresion = result.toString();
        newOp = true;
});


