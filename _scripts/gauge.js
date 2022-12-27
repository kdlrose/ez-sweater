const gauge = 28;
const bust = 107;
const ease = 5;

// body and neck
finalMeasure = bust + ease;  
bodySts = 2 * Math.round((gauge * (finalMeasure / 10)) / 2);
neck = 0.4 * finalMeasure;
neckSts = 2 * Math.round((gauge * (neck / 10)) / 2);

// shoulder
shoulderSts = Math.trunc(0.2 * neckSts);

// chest and back
chestSts = 2 * Math.round(0.3 * neckSts) / 2;
halfBack = chestSts / 2;

// over shoulders
increased = Math.trunc(1.33 * bodySts);
sleeveSts = Math.trunc((increased - bodySts) / 2);
underarm = Math.floor(0.2 * sleeveSts);

console.log(`
Final measure: ${finalMeasure} cm
Body sts: ${bodySts}
Neck sts: ${neckSts} sts, from middle back ${halfBack} sts, ${shoulderSts} sts for R shoulder,  ${chestSts} sts across chest, ${shoulderSts} sts for L shoulder, and ${halfBack} sts to BOR.
After increases over the shoulders: ${increased} sts with ${sleeveSts} sts on hold for each sleeve, picking up ${underarm} sts when you pick them up again.
`)