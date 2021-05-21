// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//const { each } = require("jquery");

// Write your JavaScript code.

document.addEventListener("click", (event) => {
    const elem = document.getElementById("temperature");
    let ret = "", val = Number(elem.value);
    if (event.target.value == "fahrenheit") {

        ret = roundFloat((val * 1.8 + 32), 1).toString();
    }
    else if (event.target.value == "celsius") {
        ret = roundFloat(((val - 32) / 1.8), 1).toString();
    }
    else if (event.target.value == "Submit") {
        checkTemp(event, val);
        ret = val;
    }
    elem.value = ret;
})

const roundFloat = (x, dec = 1) => {
    return Math.round(Math.pow(10, dec) * x) / 10;
}