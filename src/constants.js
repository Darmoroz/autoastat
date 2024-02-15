export const URLLOGIN = 'https://autoastat.com/uk/login';

const URL =
  'https://autoastat.com/uk/form?type=1&make=2&model%5B%5D=3373&yearFrom=2008&yearTo=2008&auction%5B%5D=1&auction%5B%5D=2&auction%5B%5D=4&dateFrom=2023-11-22&dateTo=2024-02-12';

const URLMANYMODELS =
  'https://autoastat.com/uk/form?type=1&make=5550&model%5B%5D=15494&model%5B%5D=42624&yearFrom=1992&yearTo=2016&auction%5B%5D=1&auction%5B%5D=2&auction%5B%5D=4&dateFrom=2023-11-14&dateTo=2024-02-14';

const URLMODEL = `https://autoastat.com/uk/model/${manufactureId}`; // 2

const URLYEARFROMTOMODEL = `https://autoastat.com/uk/year/${modelId}`; // 3373
const URLYEARFROMTOMODELMAX = `https://autoastat.com/uk/year/0`; // 0

const URLYEARFROMTOMODELFEW = 'https://autoastat.com/uk/year/${modelId},${modelId},${modelId}'; //25084,24957,30370
