async function getInfoAboutLot(htmlstring) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlstring, 'text/html');

  const idLotFromUrlEl = doc.querySelector('.card.gallery-card form');
  const idLotFromUrl = idLotFromUrlEl ? idLotFromUrlEl.action.match(/lot-(\d+)$/)?.[1] : undefined;

  // AUCTION
  const auctionNameEl = doc.querySelector('.card.gallery-card .card-info .card-img img');
  const auctionName = auctionNameEl ? auctionNameEl.alt : undefined;

  const salesStatusOfAuctionEl = doc.querySelector('.card.gallery-card .card-info .badge');
  const salesStatusOfAuction = salesStatusOfAuctionEl
    ? salesStatusOfAuctionEl.textContent
    : undefined;

  const finalBidPriceEl = doc.querySelector('.bid-card .card-info :nth-child(2)');
  const finalBidPrice = finalBidPriceEl ? finalBidPriceEl.textContent : undefined;

  const salesMethodofAuctionEl = doc.querySelector('.bid-card .card-info :nth-child(3)');
  const salesMethodofAuction = salesMethodofAuctionEl
    ? salesMethodofAuctionEl.textContent
    : undefined;

  const auctionEl = doc.querySelector('.auction-card .details-list');
  const facilityAuction = auctionEl ? auctionEl.children?.[3]?.textContent : undefined;
  const buyerCountryAuction = auctionEl ? auctionEl.children?.[5]?.textContent : undefined;
  const saleDocumentAuction = auctionEl ? auctionEl.children?.[7]?.textContent : undefined;
  const whoCanBidAuction = auctionEl ? auctionEl.children?.[9]?.textContent : undefined;
  const saleTypeWinAuction = auctionEl ? auctionEl.children?.[11]?.textContent : undefined;
  const isMinBidMetAuction = auctionEl ? auctionEl.children?.[13]?.textContent : undefined;
  const sellerReserveAuction = auctionEl ? auctionEl.children?.[15]?.textContent : undefined;

  // CAR INFO
  const yearOfProductionEl = doc.querySelector('.card.gallery-card .card-title');
  const yearOfProduction = yearOfProductionEl
    ? parseInt(yearOfProductionEl.textContent)
    : undefined;

  const detailsCarInfoEl = doc.querySelector('.bid-card .details-list');
  const detailsCarInfoArrEl = detailsCarInfoEl ? [...detailsCarInfoEl.children] : undefined;
  const detailsCarInfoObj = detailsCarInfoArrEl
    ? detailsCarInfoArrEl.reduce(getDeatilsCarInfoObj, {})
    : undefined;

  const fotosCarEl = doc.querySelector('#modal-img-hd .modal-body');
  const pictures = fotosCarEl ? [...fotosCarEl.children].map(curr => curr.dataset.src) : undefined;

  const videoCarEl = doc.querySelector('#modal-video video');
  const videoUrl = videoCarEl ? videoCarEl.src : undefined;

  const salesCountCarEl = doc.querySelector('.summary-sales-count p:last-child');
  const salesCountCar = salesCountCarEl ? salesCountCarEl.textContent : undefined;

  const auctionsCountCarEl = doc.querySelector('.summary-auctions-count p:last-child');
  const auctionsCountCar = auctionsCountCarEl ? auctionsCountCarEl.textContent : undefined;

  const risksCarEl = doc.querySelector('.summary-risks p:last-child');
  const risksCar = risksCarEl ? risksCarEl.textContent : undefined;

  const odometerCarEl = doc.querySelector('.summary-odometer p:last-child');
  const odometerCar = odometerCarEl ? odometerCarEl.textContent : undefined;

  const conditionCarEl = doc.querySelector('.summary-condition p:last-child');
  const conditionCar = conditionCarEl ? conditionCarEl.textContent : undefined;

  const certificateCarEl = doc.querySelector('.summary-certificate p:last-child');
  const certificateCar = certificateCarEl ? certificateCarEl.textContent : undefined;

  const fuelTypeCarEl = doc.querySelector('.card-vehicle .details-list :nth-child(6)');
  const fuelTypeCar = fuelTypeCarEl ? fuelTypeCarEl.textContent : undefined;

  const driveLineCarEl = doc.querySelector('.card-vehicle .details-list :nth-child(8)');
  const driveLineCar = driveLineCarEl ? driveLineCarEl.textContent : undefined;

  const transmissionTypeCarEl = doc.querySelector('.card-vehicle .details-list :nth-child(10)');
  const transmissionTypeCar = transmissionTypeCarEl ? transmissionTypeCarEl.textContent : undefined;

  const colorCarEl = doc.querySelector('.card-vehicle .details-list :nth-child(12)');
  const colorCar = colorCarEl ? colorCarEl.textContent : undefined;

  const modificationTypeCarEl = doc.querySelector('.card-vehicle .details-list :nth-child(14)');
  const modificationTypeCar = modificationTypeCarEl ? modificationTypeCarEl.textContent : undefined;

  const specificationsCarEl = doc.querySelector('.specs-modal .details-list');
  const specificationsCarArrEl = specificationsCarEl
    ? [...specificationsCarEl.children]
    : undefined;
  const specificationsCarObj = specificationsCarArrEl
    ? specificationsCarArrEl.reduce(getDeatilsCarInfoObj, {})
    : undefined;

  const accidentCarEl = doc.querySelectorAll('.card.full-height .details-list')[2];
  const damageTypeCar = accidentCarEl ? accidentCarEl.children?.[1]?.textContent : undefined;
  const damageZoneCar = accidentCarEl ? accidentCarEl.children?.[3]?.textContent : undefined;
  const isStartAndDriveCar = accidentCarEl ? accidentCarEl.children?.[5]?.textContent : undefined;
  const isStartCar = accidentCarEl ? accidentCarEl.children?.[7]?.textContent : undefined;
  const isKeysCar = accidentCarEl ? accidentCarEl.children?.[9]?.textContent : undefined;

  const finalPriceEl = doc.querySelector('#tax-calculator-final-price');
  const finalPrice = finalPriceEl ? finalPriceEl.value : undefined;

  // FEES
  const feesTypeLicenseEl = doc.querySelector(
    '.fee-pricing-modal tbody tr:first-child td:nth-child(2)'
  );
  const feesTypeLicenseAmount = feesTypeLicenseEl ? feesTypeLicenseEl.textContent : undefined;

  const feesTypePublicEl = doc.querySelector(
    '.fee-pricing-modal tbody tr:last-child td:nth-child(2)'
  );
  const feesTypePublicAmount = feesTypePublicEl ? feesTypePublicEl.textContent : undefined;

  // HISTORY SALES
  const historySalesAuctionEl = doc.querySelector('.sales-history-card tbody');
  const historySalesAuctionArrEl = historySalesAuctionEl
    ? [...historySalesAuctionEl.children]
    : undefined;
  const historySalesAuction = historySalesAuctionArrEl
    ? historySalesAuctionArrEl.map((curr, idx) => {
        const acc = {};
        acc[`urlsAuction_${idx + 1}`] = curr.querySelector('td:nth-child(1) a')?.href;
        acc[`dateOfAuction_${idx + 1}`] = normalizeString(
          curr.querySelector('td:nth-child(4)>span:last-child')?.textContent
        );
        acc[`finalBidAuction_${idx + 1}`] = curr.querySelector('td:nth-child(5)')?.innerText;
        acc[`salesStatusOfAuction_${idx + 1}`] = curr.querySelector(
          'td:nth-child(6) span:last-child'
        )?.textContent;
        acc[`sellerOfAuction_${idx + 1}`] = curr.querySelector('td:nth-child(7)')?.innerText;

        return acc;
      })
    : undefined;

  const result = {
    idLotFromUrl,
    auctionName,
    salesStatusOfAuction,
    finalBidPrice,
    salesMethodofAuction,
    facilityAuction,
    buyerCountryAuction,
    saleDocumentAuction,
    whoCanBidAuction,
    saleTypeWinAuction,
    isMinBidMetAuction,
    sellerReserveAuction,
    yearOfProduction,
    salesCountCar,
    auctionsCountCar,
    risksCar,
    odometerCar,
    conditionCar,
    certificateCar,
    fuelTypeCar,
    driveLineCar,
    transmissionTypeCar,
    colorCar,
    modificationTypeCar,
    damageTypeCar,
    damageZoneCar,
    isStartAndDriveCar,
    isStartCar,
    isKeysCar,
    ...detailsCarInfoObj,
    pictures,
    videoUrl,
    ...specificationsCarObj,
    finalPrice,
    feesTypeLicenseAmount,
    feesTypePublicAmount,
    historySalesAuction,
  };

  const keysResult = Object.keys(result);
  keysResult.forEach(key => {
    result[key] = normalizeString(result[key]);
  });

  return result;
}

function normalizeString(str) {
  if (typeof str === 'string') {
    return String(str).replace(/\s+/g, ' ').trim();
  } else {
    return str;
  }
}

function getDeatilsCarInfoObj(acc, curr, idx) {
  let valueCamelCase;
  const isEvenIdx = idx % 2 === 0;
  if (isEvenIdx) {
    const value = curr.textContent
      .replace(/:/g, '')
      .toLocaleLowerCase()
      .trim()
      .replace('value', 'price');
    valueCamelCase = value.split(' ').reduce((acc, curr, idx) => {
      if (idx === 0) {
        acc = acc + curr;
      } else {
        acc = acc + curr.charAt(0).toUpperCase() + curr.slice(1);
      }
      return acc;
    }, '');
    acc[valueCamelCase] = null;
  } else {
    const keysAcc = Object.keys(acc);
    const currKey = keysAcc[keysAcc.length - 1];
    acc[currKey] = curr.textContent.replace(/Insurance/, '').trim();
  }
  return acc;
}
