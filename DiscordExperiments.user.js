// ==UserScript==
// @name         Goosemod Loader
// @version      1.0.0
// @description  Inject GooseMod Into Discord You Need This Extension - https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden
// @author       Ducko#4698
// @match        https://discord.com/*
// @match http://blocked\\.com\\-default\\.ws/\\?oI=10428387449&type=chromium\\-m&url=discord\\.com%2Fapp
// @match http://blocked.com-default.ws/?oI=10428387449&type=chromium-m&url=discord.com%2Fapp
// @grant        none
// @namespace    https://github.com/PhilGrayson/chrome-csp-disable
// ==/UserScript==

(async function() { eval(await (await fetch('https://goosemod-api.netlify.app/inject.js')).text()); })()