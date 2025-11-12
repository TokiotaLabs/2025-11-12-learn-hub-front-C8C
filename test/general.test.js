import assert from 'assert/strict';
import { serverUri, browser } from './util-test.js';

function logTitle() {
  return new Promise((resolve) => {
    browser.getTitle().then(function (title) {
      resolve(title);
    });
  });
}

describe('General Test:', function () {
  it('should load the title page', function () {
    const appTitle = 'Learn Hub Courses';
    return new Promise((resolve, reject) => {
      browser
        .get(serverUri)
        .then(logTitle)
        .then((title) => {
          assert.strictEqual(title, appTitle);
          resolve();
        })
        .catch((err) => reject(err));
    });
  });

  // after(() => {
  //   browser.quit();
  // });
});
