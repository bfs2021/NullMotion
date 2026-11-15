import test from 'node:test';
import assert from 'node:assert/strict';
import { luminance } from '../public/drafts.mjs';

test('three-digit and six-digit colours read the same', () => {
  assert.equal(luminance('#fff'), luminance('#ffffff'));
  assert.equal(luminance('#000'), luminance('#000000'));
  assert.equal(luminance('#08f'), luminance('#0088ff'));
});

test('#fff is light, not a dark background', () => {
  assert.ok(luminance('#fff') > .9);
  assert.ok(luminance('#eee') > .8);
  assert.ok(luminance('#000') < .1);
});

test('a value that is not a full hex colour falls back to the light default', () => {
  assert.equal(luminance('white'), 1);
  assert.equal(luminance('#ff'), 1);
  assert.equal(luminance('#ggg'), 1);
  assert.equal(luminance(''), 1);
  assert.equal(luminance(undefined), 1);
});
