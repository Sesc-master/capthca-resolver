import browser from "webextension-polyfill";
import loadNumMasks from "./resolver/loadNumMasks";
import resolve from "./resolver/resolve";

fetch(browser.runtime.getURL("rawNumMasks.json"))
    .then(result => result.json())
    .then(loadNumMasks)
    .then(resolve)
    .then(captchaResult => {
        if (captchaResult) document.querySelectorAll("input").forEach(inputElement => {
            if (inputElement.id == "uCрt") inputElement.value = captchaResult;
        });
    });