// want user to choose between 4 inches or 10 cm to determine the rest of this math....

let stGauge = 24;
let bustMeasureIn = 47;
let bustMeasureCm = 120;

trueFitIn = (bustMeasureIn / 4) * stGauge;
trueFitCm = (bustMeasureCm / 10) * stGauge;

let ease = 0;
let easeGaugeIn = ease * 4;
let easeGaugeCm = ease * 10;

totalSts = Math.ceil(trueFitIn + easeGaugeIn);

neckSts = Math.ceil(totalSts * .4);
chest = Math.ceil(neckSts * .3);
backHalf = Math.ceil(chest / 2);
raglanSleeve = Math.ceil(neckSts * .2);

tsIncreased = Math.floor(totalSts * 1.33);
chestIncreased = Math.floor(tsIncreased * .3);
backIncreased = Math.floor(chestIncreased / 2);
sleeveIncreased = Math.floor(tsIncreased * .2);

// top-down raglan

document.getElementById("top-down-raglan").innerHTML = (`
    <li>Cast on ${neckSts} sts, join in round, pm for BOR.</li>
    <li>Setup: k${backHalf}, pm, k${raglanSleeve}, pm, k${chest}, pm, k${raglanSleeve}, pm, k${backHalf}.</li>
    <li>Rounds 1-4: k to end of round.</li>
    <li>Round 5: *k to 1 sts before marker, m1R, sm, k1, m1L*, repeat from ** three more times, k to end of round.</li>
    <li>Repeat rounds 1-5 until total st count is ${tsIncreased}. This should add up to ${backIncreased} sts from BOR; ${sleeveIncreased} sts for the right sleeve; ${chestIncreased} sts for the chest; ${sleeveIncreased} sts for the left sleeve; and ${backIncreased} sts to the BOR marker.</li>
`)