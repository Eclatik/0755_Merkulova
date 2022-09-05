// ==UserScript==
// @name         Open_HomeWork
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to open the napli.ru
// @author       Elizaveta Merkulova
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let search = document.getElementsByName("search")[0];
let keywords = ["Взаимодействие PHP и MySQL", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];

if (search !== undefined) {
  document.getElementsByName("q")[0].value = keyword;
  search.click();
} else {

  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
      console.log("Нашел строку " +links[i]);
      let link = links[i];
      link.click();
      break;
    }
  }
}
function getRandom (min, max) {
  return Math.floor(Math.random()*(max-min)+min);
}
