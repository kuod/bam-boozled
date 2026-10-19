'use strict';
// Loads the inline <script> of index.html with a minimal stubbed DOM.
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const src = html.match(/<script>([\s\S]*)<\/script>/)[1];

module.exports = function load() {
  const els = {};
  const mk = () => ({
    classList: { add() {}, remove() {}, toggle() {} },
    style: {}, dataset: {}, textContent: '', innerHTML: '', value: '', disabled: false,
    append() {}, appendChild() {}, addEventListener() {}, setAttribute() {},
  });
  global.document = {
    getElementById: id => els[id] || (els[id] = mk()),
    createElement: mk,
    querySelectorAll: () => [],
    querySelector: () => null,
  };
  const fn = new Function(src + '\nreturn {parseInput, mateValue, VALIDATIONS, render, buildMainArt};');
  const api = fn();
  api.els = els;
  return api;
};
