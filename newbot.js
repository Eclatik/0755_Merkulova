// ==UserScript==
// @name         BingBot 26092022
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Bing
// @author       Merkulova Elizaveta
// @match        https://www.bing.com/*
// @match        https://napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let search = document.getElementsByName("search")[0];
let keywords = ["Взаимодействие PHP и MySQL", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Плагины VC Code"];
let keyword = keywords[getRandom(0, keywords.length)];
let bingInput = document.getElementsByName("q")[0];

if (search !== undefined) {
  let i = 0;

  let timerId = setInterval(function() {
    bingInput.value += keyword[i];
    i++;
    if(i == keyword.length) {
    clearInterval(timerId);
    setTimeout(()=>{search.click();}, getRandom(1000, 2500));
}

},500);

} else if (location.hostname == "napli.ru") {
  console.log("Мы на целевом сайте!");

  setInterval(()=>{
    let index = getRandom(0, links.length);

    if (getRandom(0, 101) > 70) {
    location.href = "https://www.bing.com/";
    }

    if (links[index].href.indexOf("napli.ru") !== -1) {
        links[index].click();
    }

  }, getRandom(4000, 5000));


} else {
  let nextBingPage = true;

  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
      console.log("Нашел строку " + links[i]);
      let link = links[i];
      nextBingPage = false;
      setTimeout(()=>{
        link.click();
      }, getRandom(3500, 4500));
      break;
    }
  }
  if (document.querySelector(".sb_pagS").innerText == "4") {
  nextBingPage = false;
    location.href = "https://www.bing.com/";
  }
  if (nextBingPage) {
  setTimeout (()=>{
    let sb_pagN = document.querySelector(".sb_pagN");
    sb_pagN.click();
  }, getRandom(3000, 5000));
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}
