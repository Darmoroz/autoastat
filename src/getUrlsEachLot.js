const DATEFROM = '2023-11-18';
const DATETO = '2024-02-14';
const ERROR = [];
const RESULT = [];
let page = null;

const nameAndModels = [
  {
    id: 2,
    name: 'Acura',
    models: [
      {
        id: 18,
        name: 'TL',
        yearFrom: 1996,
        yearTo: 2014,
      },
      {
        id: 19,
        name: 'TLX',
        yearFrom: 2015,
        yearTo: 2023,
      },
      {
        id: 20,
        name: 'TSX',
        yearFrom: 2004,
        yearTo: 2022,
      },
      {
        id: 56887,
        name: 'TSX Sport Wagon',
        yearFrom: 2011,
        yearTo: 2014,
      },
      {
        id: 21,
        name: 'Vigor',
        yearFrom: 1992,
        yearTo: 1994,
      },
      {
        id: 22,
        name: 'ZDX',
        yearFrom: 2010,
        yearTo: 2013,
      },
    ],
  },
];

async function getUrlsEachLot() {
  for (let i = 0; i < nameAndModels.length; i++) {
    const brandCar = nameAndModels[i];
    const modelsbrand = brandCar.models;
    const brandName = brandCar.name;
    console.log(brandName);

    for (let j = 0; j < modelsbrand.length; j++) {
      page = 37;
      const model = modelsbrand[j];
      const modelName = model.name;
      const yearFrom = model.yearFrom;
      const yearTo = model.yearTo;

      const url = `https://autoastat.com/uk/form?type=1&make=${brandCar.id}&model%5B%5D=${model.id}&yearFrom=${yearFrom}&yearTo=${yearTo}&auction%5B%5D=1&auction%5B%5D=2&auction%5B%5D=4&dateFrom=${DATEFROM}&dateTo=${DATETO}&page=`;

      try {
        const response = await fetch(url + page);
        await delay(8000);
        if (!response.ok) {
          ERROR.push(url + page);
          throw new Error('Network response was not ok');
        }

        const html = await response.text();

        const [totalResultLots, totalPages, urlsOfLots] = getUrlsFromHtmlPage(
          html,
          brandName,
          modelName
        );
        console.log('model->', modelName);
        console.log(totalResultLots);
        console.log('page->', page, 'from', totalPages);
        RESULT.push(...urlsOfLots);

        for (let page = 38; page <= totalPages; page++) {
          const urlNext = url + page;
          try {
            const response = await fetch(urlNext);
            await delay(8000);
            if (!response.ok) {
              ERROR.push(url + page);
              throw new Error('Network response was not ok');
            }
            const htmlNext = await response.text();
            const [_, __, urlsOfLotsNext] = getUrlsFromHtmlPage(htmlNext, brandName, modelName);
            RESULT.push(...urlsOfLotsNext);
          } catch (error) {
            console.log(error);
          }
          console.log('page->', page, 'from', totalPages);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}

function getUrlsFromHtmlPage(htmlStr, brandName, modelName) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlStr, 'text/html');
  const totalResultsEl = doc.querySelector('.content .result-header h4');
  if (!totalResultsEl) {
    return ['0 results:', 0, []];
  }
  const totalResults = totalResultsEl
    ? parseInt(totalResultsEl.textContent.replace(/[,.]/g, ''))
    : undefined;
  const totalPages = totalResults ? Math.ceil(totalResults / 25) : 0;
  const urlsOfLots = [...doc.querySelectorAll('.result-info-block-content>.block')].map(lot => ({
    urlLot: lot.querySelector('.full-size a').href.match(/^([^?]+)/)?.[0],
    brandName,
    modelName,
  }));
  const totalResultLots = totalResultsEl.textContent;
  return [totalResultLots, totalPages, urlsOfLots];
}

function delay(val = 500) {
  return new Promise(resolve => {
    setTimeout(resolve, val);
  });
}
