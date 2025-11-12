import assert from 'assert/strict';
import { serverUri, browser } from './util-test.js';

describe('Home Page Test:', function () {
  it('should load the home page and verify the title from h1', function () {
    const expectedTitle = 'Unlock Your Potential';

    return new Promise((resolve, reject) => {
      browser
        .get(serverUri)
        .then(() => browser.findElement({ css: 'h1' }))
        .then((h1Element) => h1Element.getText())
        .then((actualTitle) => {
          assert.strictEqual(actualTitle, expectedTitle);
          resolve();
        })
        .catch((err) => reject(err));
    });
  });

  it('should load the home page and verify the text from a <p> element', function () {
    const expectedText =
      'Empowering you with diverse courses for every passion and skill level.';

    return new Promise((resolve, reject) => {
      browser
        .get(serverUri)
        .then(() => browser.findElement({ className: 'self-stretch' }))
        .then((pElement) => pElement.getText())
        .then((actualText) => {
          assert.strictEqual(actualText, expectedText);
          resolve();
        })
        .catch((err) => reject(err));
    });
  });
});
