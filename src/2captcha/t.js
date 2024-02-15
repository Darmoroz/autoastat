import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
  });

  const [page] = await browser.pages();
  const preloadFile = fs.readFileSync('./inject.js', 'utf8');
  await page.evaluateOnNewDocument(preloadFile);
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => false,
    });
  });

  page.on('console', async msg => {
    const txt = msg.text();
    if (txt.includes('intercepted-params:')) {
      const params = JSON.parse(txt.replace('intercepted-params:', ''));
      console.log(params);

      try {
        console.log(`Solving the captcha...`);
        const res = await solver.cloudflareTurnstile(params);
        console.log(`Solved the captcha ${res.id}`);
        console.log(res);
        await page.evaluate(token => {
          cfCallback(token);
        }, res.data);
      } catch (e) {
        console.log(e.err);
        return process.exit();
      }
    } else {
      return;
    }
  });
  await page.goto('https://autoastat.com/uk/login');

  // await page.screenshot({ path: 'cointracker.png' });
  // await browser.close();
})();
