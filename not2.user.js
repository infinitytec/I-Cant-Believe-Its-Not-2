
// ==UserScript==
// @name         I can't believe it's not 2
// @namespace    infinitytec.github.io
// @version      2.0
// @description  Making 3.0 look like 2.
// @author       infinitytec
// @match        https://llk.github.io/scratch-gui/*
// @match        https://beta.scratch.mit.edu/*
// @match        https://scratch.mit.edu/projects/editor/*
// @match        https://scratch.mit.edu/projects/*
// @grant        GM_addStyle
// @updateURL    https://github.com/infinitytec/I-Cant-Beleive-Its-Not-2/raw/master/not2.user.js
// ==/UserScript==

(function() {
    'use strict';
    //Add 2.0-style gradient
    GM_addStyle(".stage-header_stage-header-wrapper_1F4gT, .sprite-info_sprite-info_3EyZh, .stage-selector_header_2GVr1, .gui_tab_27Unf.gui_is-selected_sHAiu, .backpack_backpack-header_6ltCS{background: linear-gradient(to bottom, #fefefe 0%,#e7e9e9 98%);}");
    //Make the stage have square corners
    GM_addStyle(".stage_stage_1fD7k {border-radius: 0px;}");
    //Stage on left
    GM_addStyle(".gui_stage-and-target-wrapper_69KBf.gui_large_yTJBa {position: absolute; left: 0;} .gui_editor-wrapper_2DYcj {position: absolute; right: 0;}");
})();
