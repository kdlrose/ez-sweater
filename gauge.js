const gauge = 28;
const bust = 120;
const ease = 5;

// by cm

finalMeasure = bust + ease;  

neck = Math.round(finalMeasure * .4);
sleeve = Math.round(finalMeasure * .2);
underarm = Math.round(finalMeasure * .08);
cuff = Math.round(finalMeasure * .25);

shoulder = Math.round(neck * .2);
chest = Math.round(neck * .3);

// by gauge
trueSts = 2 * Math.ceil(gauge * (bust / 10) / 2);
easeSts = 2 * Math.ceil(gauge * (ease / 10) / 2);
bodySts = trueSts + easeSts;

neckSts = 2 * Math.ceil(gauge * (neck / 10) / 2);
sleeveSts = 2 * Math.ceil(gauge * (sleeve / 10) / 2);
pitSts = 2 * Math.ceil(gauge * (underarm / 10) / 2);
cuffSts = 2 * Math.ceil(gauge * (cuff / 10) / 2);

shoulderSts = 2 * Math.ceil(gauge * (shoulder / 10) / 2);
chestSts = 2 * Math.ceil(gauge * (chest / 10) / 2);

// print
console.log(`For a ${finalMeasure} cm sweater with 10 cm = ${gauge} sts, the body stitch count should be ${bodySts} sts.
The neck should measure ${neck} cm at about ${neckSts} sts.
Each shoulder should start at ${shoulder} cm wide = ${shoulderSts} sts, and increase to at about ${sleeve} cm around = ${sleeveSts} sts.`)