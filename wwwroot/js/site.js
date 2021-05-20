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

const roundFloat = (x, dec=1) => {
    return Math.round(Math.pow(10,dec) * x) / 10;
}

const checkTemp = async (event, temp) => {
    alert("checkTemp");
    const base = new URL("https://localhost:44335");
    const scale = getScale();
    const checkOut = document.getElementById("response");
    let formData = new FormData(tempForm);
    let url = new URL('https://localhost:44335/FeverCheck/Calculate');
    url.searchParams.set("temp", temp);
    url.searchParams.set("scale", scale);
    try {
        console.log(`b4 fetch`);
        let promise = await fetch('https://127.0.0.1:44335/FeverCheck/Calculate');
        console.log(`after fetch`);
        if (!promise.ok) throw new Error(promise.statusText);
        let response = await promise.text();
    }
    catch (err) {
        console.log(`checkTemp in site.js error: ${err.message}`);
    }
    checkOut.value = response;
    checkOut.style.visibility = "visible";
}

const getScale = () => {
    const items = document.getElementsByName('scale');
    let ret = "";
    items.forEach((item) => {
        if (item.checked) {
            ret = item.value;
        }
    });

    return ret;
}