// ==UserScript==
// @name         Kloud51 Stop Youtube from being a bitch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make faster traffic exchange shit . Disabling this will cause suspension of your account.
// @author       Francis, Kloud51
// @match        https://*youtube.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var STATUS_PAUSED = "Pause";

function stopAutoPlay() {
    var playButton;
    playButton = document.getElementsByClassName('ytp-play-button');
    playButton = playButton[0];
    
    if (playButton.getAttributeNode('aria-label').value == STATUS_PAUSED) {
        playButton.click();
    }
}

setInterval(stopAutoPlay, 1000);
