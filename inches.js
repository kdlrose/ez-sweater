let bustMeasure = 47;
let stGauge = 24;
let trueFit = (bustMeasure / 4) * stGauge;

let ease = 2;
let easeGauge = ease * 4

totalSts = Math.ceil(trueFit + easeGauge);

console.log(`Your total stitch count after you join at the armpits should be ${totalSts} for ${ease} inches of ease.`);
console.log(`Without ease, this is ${trueFit}.`)

sleeveSts = totalSts *= .2;
chestSts = totalSts *= .3;
backBOR = totalSts *= 1.5;
backEOR = totalSts *= 1.5;