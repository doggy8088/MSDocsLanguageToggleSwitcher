// ==UserScript==
// @name         Microsoft Docs Language Toggle Switcher (Alt+s)
// @namespace    https://blog.miniasp.com/
// @version      0.1
// @description  Use Alt+s to click on Language Toggle for Microsoft Docs site.
// @license      MIT
// @homepage     https://blog.miniasp.com/
// @homepageURL  https://blog.miniasp.com/
// @website      https://www.facebook.com/will.fans
// @source       https://github.com/doggy8088/MSDocsLanguageToggleSwitcher
// @namespace    https://github.com/doggy8088/MSDocsLanguageToggleSwitcher
// @author       Will Huang
// @match        *://docs.microsoft.com/*
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('keydown', (ev) => {
        if (ev.altKey && ev.key === 's' && !/^(?:input|select|textarea|button)$/i.test(ev.target.nodeName)) {
            let toggle = document.querySelector("#language-toggle");
            if (toggle) {
                toggle.click();
            }
        }
    });
})();