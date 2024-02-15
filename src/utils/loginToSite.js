import { URLLOGIN } from '../constants.js';
import { delay } from './delay.js';

export async function loginToSite(page) {
  try {
    await page.goto(URLLOGIN, {
      useHeaderGenerator: false,
      http2: true,
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'uk-UA,uk;q=0.9,ru-UA;q=0.8,ru;q=0.7,en;q=0.6,en-US;q=0.5',
        'cache-control': 'no-cache',
        // cookie:
        //   '__cf_bm=38D34blL2etU5fxjyZDnxM5Q2wyhH7aG6fhsN.O01HA-1707754861-1-Ac/ojwcvk8/C9LqKZ00OQb+PEWBgBydjkdjiCPs6EeCnBugqYQXJHRC+gT26MvhOFu9V0cPvY3WqZuwtmAANZuM=; path=/; expires=Mon, 12-Feb-24 16:51:01 GMT; domain=.autoastat.com; HttpOnly; Secure; SameSite=None',
        pragma: 'no-cache',
        'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
      },
    });
    await delay(10000);
  } catch (error) {
    console.log('login error');
    throw error;
  }
}
