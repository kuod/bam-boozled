'use strict';
const test = require('node:test');
const assert = require('node:assert');
const api = require('./load')();

test('parseInput accepts decimal and hex', () => {
  assert.strictEqual(api.parseInput('83'), 83);
  assert.strictEqual(api.parseInput(' 0x53 '), 83);
  assert.strictEqual(api.parseInput('0X3'), 3);
  assert.strictEqual(api.parseInput(''), 0);
});

test('parseInput rejects junk', () => {
  for (const s of ['abc', '0x', '1.5', '-1', '1e3', '0xZZ']) {
    assert.ok(Number.isNaN(api.parseInput(s)), s);
  }
});

test('mateValue swaps mate/read bits and is an involution', () => {
  assert.strictEqual(api.mateValue(0x4), 0x8);
  assert.strictEqual(api.mateValue(0x10), 0x20);
  assert.strictEqual(api.mateValue(0x40), 0x80);
  for (let v = 0; v <= 0xFFF; v++) assert.strictEqual(api.mateValue(api.mateValue(v)), v);
});
