// ==UserScript==
// @name         Tumblr post re-direct
// @namespace    http://tampermonkey.net/
// @version      2025-05-15
// @description  Re-directs from a *blog.tumblr.com/post/* to tumblr.com/*blog/post/* for easier viewing
// @author       Tina Tran
// @match        https://*.tumblr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tumblr.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // the url length for tumblr.com/blog/post will be larger than 2
    // this is to avoid unwanted redirects like viewing blog.tumblr.com/tagged/*/page/
    if (document.querySelector('.tx-icon-button.open-in-peepr-button.non-essential').pathname.split('/').length > 2){
        if (document.querySelector('.tx-icon-button.open-in-peepr-button.non-essential')){
            // re-direct
            var t_dash_post = document.querySelector('.tx-icon-button.open-in-peepr-button.non-essential').href;
            window.top.location.replace(t_dash_post);
        }
    }
})();