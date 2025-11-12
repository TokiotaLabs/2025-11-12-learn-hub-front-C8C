import webdriver from 'selenium-webdriver';

export const serverUri = 'http://localhost:5173/';

export const browser = new webdriver.Builder()
  .usingServer()
  .withCapabilities({ browserName: 'chrome' })
  .build();
