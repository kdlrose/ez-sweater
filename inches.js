// want user to choose between 4 inches or 10 cm to determine the rest of this math....

let stGauge = 24;
let bustMeasureIn = 40;

trueFitIn = (bustMeasureIn / 4) * stGauge;

let ease = 0;
let easeGaugeIn = ease * 4;

totalSts = Math.ceil(trueFitIn + easeGaugeIn);
neckSts = Math.ceil(totalSts * .4);
backHalf = Math.ceil(neckSts * .15);
chest = Math.ceil(neckSts * .3);
raglanSleeve = Math.ceil(neckSts * .2);
afterIncreases = Math.ceil(totalSts * 1.4);

// top-down raglan

document.getElementById("cast-on").innerHTML = (`
    <li>Cast on ${neckSts} stitches, join the round, and pm for BOR.</li>
    <li>Raglan setup round: k${backHalf}, pm, k${raglanSleeve}, pm, k${chest}, pm, k${raglanSleeve}, pm, k${backHalf}.</li>
    <li>Rounds 1-4: k to end of round.</li>
    <li>Round 5: k to 1 sts before marker, m1R, sm, k1, m1L.</li>
    <li>Repeat rounds 1-5 until total st count is ${afterIncreases}.</li>
`)