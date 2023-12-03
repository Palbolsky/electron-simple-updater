'use strict';

const { describe, expect, it } = require('humile');
const path = require('path');
const file = require('../file');

describe('file', () => {
  it('calcSha256Hash', async () => {
    const filePath = path.resolve(__dirname, 'fixtures/package.json');
    const hash = await file.calcSha256Hash(filePath);

    expect(hash)
      .toBe('c04efa4b2c86a487c2bceeb7a89f3a6bcdd2e0b1f907831e598cbede4e67f676');
  });
});
