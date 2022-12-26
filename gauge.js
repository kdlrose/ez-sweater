const gauge = 28;
const bust = 107;
const ease = 5;

// by cm

finalMeasure = bust + ease;  

neck = finalMeasure * 0.4;
sleeve = finalMeasure * 0.2;
underarm = finalMeasure * 0.08;
cuff = finalMeasure * 0.25;
shoulder = neck * 0.2;
chest = neck * 0.3;

// by gauge
bodySts = trueSts + easeSts;
neckSts = gauge * (neck / 10);
sleeveSts = gauge * (sleeve / 10);
pitSts = gauge * (underarm / 10);
cuffSts = gauge * (cuff / 10);

shoulderSts = gauge * (shoulder / 10);
chestSts = gauge * (chest / 10);
halfBack = chestSts / 2;

// print
console.log(`
For a ${finalMeasure} cm sweater with 10 cm = ${gauge} sts, the body stitch count should be ${bodySts} sts.
Top down: ${neckSts} neck sts = ${halfBack} sts from middle of back + ${shoulderSts} L shoulder sts + ${chestSts} chest sts + ${shoulderSts} R shoulder sts + ${halfBack} sts.
`)