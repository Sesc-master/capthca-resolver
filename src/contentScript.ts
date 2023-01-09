import browser from "webextension-polyfill";
import loadNumMasks from "./resolver/loadNumMasks";
import resolve from "./resolver/resolve";

fetch(browser.runtime.getURL("rawNumMasks.json"))
    .then(result => result.json())
    .then(loadNumMasks)
    .then(numMasks => {
        const img = document.querySelector("img");
        const input = Array.from(document.querySelectorAll("input"))
            .find(inputElement => inputElement.id == "uCрt");

        if (img && input) {
            const solve = () => resolve(numMasks, img).then(captchaSolve => {if (captchaSolve) input.value = captchaSolve});
            img.onload = solve;
            solve();
        }
    });