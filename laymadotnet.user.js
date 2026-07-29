// ==UserScript==
// @name         Layma.net

// @namespace    http://tampermonkey.net/

// @version      2026.7.29

// @description  Auto solve layma.net: auto redirect "linkweb" -> solve captcha -> auto get token -> auto redirect layma.net -> auto fill code *success

// @author       mushr deptrai

// @match        *://layma.net/*
// @match        *://*.soldirect.in/*
// @match        *://*.cargoclutch.in/*
// @match        *://*.multimodalservices.in/*

// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle

// @connect      api.layma.net
// @connect      js.hcaptcha.com
// @connect      *.hcaptcha.com
// @connect      raw.githubusercontent.com

// @icon         https://quanly.layma.net/assets/images/logo3.png

// @require      https://raw.githubusercontent.com/xkahgignore/chillchill/refs/heads/main/main.js

// ==/UserScript==