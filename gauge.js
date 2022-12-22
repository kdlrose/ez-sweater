const gauge = 28;
const bust = 120;
const ease = 5;

finalMeasure = bust + ease;

increasedMeasure = Math.ceil(finalMeasure * 1.33);

// by stitches
trueSts = 2 * Math.ceil(gauge * (bust / 10) / 2);
easeSts = 2 * Math.ceil(gauge * (ease / 10) / 2);
bodySts = trueSts + easeSts;
increasedSts = 2 * Math.ceil(gauge * (increasedMeasure / 10) / 2);

// neck by cm
neckC = finalMeasure * .4;
shoulderWidth = neckC * .2;
chestWidth = neckC * .3;

// neck by stitches
neckSts = 2 * Math.ceil(gauge * (neckC / 10) / 2);
shoulderSts = 2 * Math.ceil(gauge * (shoulderWidth / 10) / 2);
chestSts = 2 * Math.ceil(gauge * (chestWidth / 10) / 2);
backSts = chestSts / 2;

console.log(`For a ${finalMeasure} cm sweater with ${gauge} sts per 10 cm, the body stitch count should be ${bodySts} sts.

Neck: ${neckC} cm = ${neckSts} sts
Shoulder: ${shoulderWidth} cm = ${shoulderSts} sts
Chest and Back: ${chestWidth} = ${chestSts} sts
Widest circumference: ${increasedMeasure} cm = ${increasedSts} sts`)