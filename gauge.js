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

castOnSts = Math.ceil(totalSts * .4);

document.getElementById("cast-on").innerHTML = (`${castOnSts} sts`);