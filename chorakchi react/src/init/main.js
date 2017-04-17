/* global window, document */
import React from 'react'
import { render } from 'react-dom';

import { AppRouter } from './router';

import grid from './../style/grid.css';
import main_style from './../style/style.css';

import $ from 'jquery';

function init() {
  render(AppRouter,document.querySelector("#app"));
}
/* eslint-enable max-statements */

document.addEventListener('DOMContentLoaded', function() {
  try {
    window.localStorage.test = 'You appear to be unable to write to localStorage';
  } catch (e) {
    document.body.innerHTML = `
      <div class="mobile-incompatibility">
        <h4>Your browser is not able to write to local storage.</h4>
        <p>If you are using private mode please disable it.</p>
        <p>Otherwise your browser is not supported or you have local storage turned off in your browser preferences.</p>
      </div>
    `;
  }
  init();
});
