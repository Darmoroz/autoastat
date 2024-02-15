import axios from 'axios';
import puppeteer from 'puppeteer';
import chalk from 'chalk';
import fs from 'fs';
import { JSDOM } from 'jsdom';
import { loginToSite } from '../utils/loginToSite.js';

const savePath = `../data/`;
const saveFileName = '.json'; //!
const browserOptions = {
  ignoreHTTPSErrors: true,
  headless: false,
  defaultViewport: { width: 1920, height: 1080 },
};

async function main() {
  try {
    const browser = await puppeteer.launch(browserOptions);
    const [page] = await browser.pages();
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', {
        get: () => false,
      });
      const jsonStringify = JSON.stringify;
      JSON.stringify = function () {
        console.log(arguments);
        return jsonStringify.apply(null, arguments);
      };
    });
    await loginToSite(page);
  } catch (error) {
    console.log(chalk.red(error));
  }
}

main();
