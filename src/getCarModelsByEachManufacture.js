//* collection of car models by each manufacturer
const MAKE = [
  {
    id: 2,
    name: 'Acura',
  },
  {
    id: 3,
    name: 'Alfa Romeo',
  },
  {
    id: 5550,
    name: 'AM General',
  },
  {
    id: 6068,
    name: 'AMC',
  },
  {
    id: 4,
    name: 'Aston Martin',
  },
  {
    id: 5,
    name: 'Audi',
  },
  {
    id: 10512,
    name: 'Avanti',
  },
  {
    id: 6,
    name: 'Bentley',
  },
  {
    id: 17175,
    name: 'Bertone',
  },
  {
    id: 28224,
    name: 'Black',
  },
  {
    id: 7,
    name: 'BMW',
  },
  {
    id: 28212,
    name: 'Bounder',
  },
  {
    id: 8,
    name: 'Buick',
  },
  {
    id: 9,
    name: 'Cadillac',
  },
  {
    id: 15829,
    name: 'Carry-On Trailer',
  },
  {
    id: 10,
    name: 'Chevrolet',
  },
  {
    id: 11,
    name: 'Chrysler',
  },
  {
    id: 28298,
    name: 'CHUNFENG',
  },
  {
    id: 27422,
    name: 'Coachman',
  },
  {
    id: 15137,
    name: 'Coachmen',
  },
  {
    id: 5789,
    name: 'CODA',
  },
  {
    id: 13,
    name: 'Datsun',
  },
  {
    id: 7968,
    name: 'DeLorean',
  },
  {
    id: 14,
    name: 'Dodge',
  },
  {
    id: 15,
    name: 'Ferrari',
  },
  {
    id: 16,
    name: 'Fiat',
  },
  {
    id: 13436,
    name: 'Fisker',
  },
  {
    id: 18143,
    name: 'Fleetwood Enterprises',
  },
  {
    id: 17,
    name: 'Ford',
  },
  {
    id: 5597,
    name: 'Freightliner',
  },
  {
    id: 18,
    name: 'Genesis',
  },
  {
    id: 5548,
    name: 'Geo',
  },
  {
    id: 19,
    name: 'GMC',
  },
  {
    id: 16848,
    name: 'Great Dane Trailers',
  },
  {
    id: 20,
    name: 'Honda',
  },
  {
    id: 21,
    name: 'Hummer',
  },
  {
    id: 22,
    name: 'Hyundai',
  },
  {
    id: 23,
    name: 'Infiniti',
  },
  {
    id: 5577,
    name: 'International',
  },
  {
    id: 5542,
    name: 'Isuzu',
  },
  {
    id: 24,
    name: 'Jaguar',
  },
  {
    id: 6905,
    name: 'Jayco',
  },
  {
    id: 25,
    name: 'Jeep',
  },
  {
    id: 14872,
    name: 'Karma',
  },
  {
    id: 26,
    name: 'Kia',
  },
  {
    id: 17111,
    name: 'KZ RV',
  },
  {
    id: 27,
    name: 'Lamborghini',
  },
  {
    id: 28,
    name: 'Land Rover',
  },
  {
    id: 29,
    name: 'Lexus',
  },
  {
    id: 30,
    name: 'Lincoln',
  },
  {
    id: 31,
    name: 'Lotus',
  },
  {
    id: 25426,
    name: 'Lucid',
  },
  {
    id: 19589,
    name: 'MAC TRAILER MANUFACTURING',
  },
  {
    id: 32,
    name: 'Maserati',
  },
  {
    id: 5932,
    name: 'Maybach',
  },
  {
    id: 33,
    name: 'Mazda',
  },
  {
    id: 13401,
    name: 'McLaren',
  },
  {
    id: 35,
    name: 'Mercedes-Benz',
  },
  {
    id: 5541,
    name: 'Mercury',
  },
  {
    id: 36,
    name: 'MINI',
  },
  {
    id: 37,
    name: 'Mitsubishi',
  },
  {
    id: 9018,
    name: 'Mobility Ventures',
  },
  {
    id: 38,
    name: 'Nissan',
  },
  {
    id: 39,
    name: 'Oldsmobile',
  },
  {
    id: 5781,
    name: 'Other',
  },
  {
    id: 40,
    name: 'Plymouth',
  },
  {
    id: 19351,
    name: 'Polestar',
  },
  {
    id: 41,
    name: 'Pontiac',
  },
  {
    id: 42,
    name: 'Porsche',
  },
  {
    id: 5543,
    name: 'Ram',
  },
  {
    id: 25581,
    name: 'RIVIAN',
  },
  {
    id: 43,
    name: 'Rolls-Royce',
  },
  {
    id: 44,
    name: 'Saab',
  },
  {
    id: 45,
    name: 'Saturn',
  },
  {
    id: 46,
    name: 'Scion',
  },
  {
    id: 47,
    name: 'Smart',
  },
  {
    id: 7473,
    name: 'Sterling',
  },
  {
    id: 19721,
    name: 'STOUGHTON TRAILERS',
  },
  {
    id: 48,
    name: 'Subaru',
  },
  {
    id: 49,
    name: 'Suzuki',
  },
  {
    id: 50,
    name: 'Tesla',
  },
  {
    id: 27439,
    name: 'Timpte Inc',
  },
  {
    id: 51,
    name: 'Toyota',
  },
  {
    id: 17439,
    name: 'Utility Trailer Manufacturer',
  },
  {
    id: 52,
    name: 'Volkswagen',
  },
  {
    id: 53,
    name: 'Volvo',
  },
  {
    id: 18037,
    name: 'Workhorse',
  },
];
const result = [];

async function main() {
  console.log(MAKE.length);
  for (let i = 0; i < MAKE.length; i++) {
    const make = MAKE[i];
    console.log(make.name, '->', i + 1);
    const info = await getModelInfo(make);
    result.push(info);
  }
}

async function getModelInfo(makeInfo) {
  const makeId = makeInfo.id;
  try {
    const res = await fetch(`https://autoastat.com/uk/model/${makeId}`);
    await delay(1000);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const { results } = await res.json();
    const resultWithYear = [...results];
    console.log('кількість моделей', resultWithYear.length);
    const modelInfoFull = [];
    for (let j = 0; j < resultWithYear.length; j++) {
      const modelInfo = resultWithYear[j];
      const [yearFrom, yearTo] = await getYears(modelInfo.id);

      modelInfoFull.push({ ...modelInfo, yearFrom, yearTo });
    }

    return {
      ...makeInfo,
      models: modelInfoFull,
    };
  } catch (error) {
    console.log(error);
  }
}

async function getYears(modelId) {
  try {
    const res = await fetch(`https://autoastat.com/uk/year/${modelId}`);
    await delay(1000);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const { results } = await res.json();
    return [results[0], results[results.length - 1]];
  } catch (error) {
    console.log(error);
  }
}

function delay(val = 500) {
  return new Promise(resolve => {
    setTimeout(resolve, val);
  });
}
