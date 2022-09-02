// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Google
// @author       Elizaveta Merkulova
// @match        https://www.google.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let btnk = document.getElementByName("btnk")[0];
let keywords = ["вывод произвольных полей wordpress", "10 самых популярных шрифтов от Google", "Отключение редаций и ревизий в WordPress"];
let keyword = keywords[getRandom (0, keywords.lenght)];


if (btnk !== underfined) {
  document.getElementByName ("q")[0].value = keywords;
btnk.click();
} else {

for (let i=0; i<length; i++) {
  if (links[i].href.indexOf("napli.ru")!== -1) {
      console.log("Нашел строку" +links[i]);
  let link = links[i];
  link.click();
  break;
}
}
}
function getRandom (min, max) {
return Math.floor(Math.rendom()*(max-min)+min);
}
