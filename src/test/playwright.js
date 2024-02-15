import { chromium } from 'playwright';

const browserOptions = {
  ignoreHTTPSErrors: true,
  headless: false,
};

(async () => {
  const browser = await chromium.launch(browserOptions);
  const context = await browser.newContext({
    colorScheme: 'dark',
  });

  const page = await context.newPage();

  await context.addInitScript(`
    const jsonStringify = JSON.stringify;
    JSON.stringify = function() {
      console.log(arguments);
      return jsonStringify.apply(null, arguments);
    }
  `);

  await page.goto('https://autoastat.com/');
})();
