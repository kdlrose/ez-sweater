const gauge = 28;
const bust = 120;
const ease = -5;

finalMeasure = bust + ease;  

// by stitches
trueSts = 2 * Math.ceil(gauge * (bust / 10) / 2);
easeSts = 2 * Math.ceil(gauge * (ease / 10) / 2);
bodySts = trueSts + easeSts;

console.log(`For a ${finalMeasure} cm sweater with ${gauge} sts per 10 cm, the body stitch count should be ${bodySts} sts.`)