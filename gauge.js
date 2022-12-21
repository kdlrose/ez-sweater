// want user to choose between 4 inches or 10 cm to determine the rest of this math....

let stGauge = 37;
let bustMeasureIn = 47;
let bustMeasureCm = 120;

trueFitIn = (bustMeasureIn / 4) * stGauge;
trueFitCm = (bustMeasureCm / 10) * stGauge;

let ease = -2;
let easeGaugeIn = ease * 4;
let easeGaugeCm = ease * 10;

totalSts = Math.floor(trueFitIn + easeGaugeIn);

neckSts = 2 * Math.round((totalSts * .4) / 2);
chest = 2 * Math.round((neckSts * .3) / 2);
backHalf = 2 * Math.round((chest / 2) / 2);
raglanSleeve = 2 * Math.round((neckSts * .2) / 2);

tsIncreased = 2 * Math.round((neckSts * 1.4) / 2);

chestIncreased = 2 * Math.round((tsIncreased * .3) / 2);
backIncreased = 2 * Math.round((chestIncreased / 2) / 2);
sleeveIncreased = 2 * Math.round((tsIncreased * .2) / 2);

// top-down raglan

document.getElementById("top-down-raglan").innerHTML = (`
    <li>Cast on <strong>${neckSts} sts</strong>, join in round, pm for BOR.</li>
    <li>Setup: <strong>k${backHalf}</strong>, pm, <strong>k${raglanSleeve}</strong>, pm, <strong>k${backHalf}</strong>, pm for middle of chest, <strong>k${backHalf}</strong>, pm, <strong>k${raglanSleeve}</strong>, pm, <strong>k${backHalf}</strong>.</li>
    <li>Round 1: k to end of round.</li>
    <li>Round 2: <strong>*k to 1 st before m, m1R, sm, k1, m1L*</strong>, repeat from ** three more times, k to end of round. Continue these increases through short row shaping.</li>
    <li>German short rows:
        <ul>
            <li>k to 2 sts past the second right sleeve marker. Turn your work so WS is facing.</li>
            <li>sl1wyif to the right needle, pull up the stitch so your yarn is in back.</li>
            <li>p to 1 st before the next marker, m1Rp, sm, p1, m1Lp, p across sleeve, repeate increase, p2, repeat GSR.</li>
            <li>work until there are like, 2 inches to the middle of chest marker on either side, idk.</li>
        </ul>
    </li>
    <li>Repeat rounds 1-2 until total st count is <strong>${tsIncreased}</strong>. This should add up to <strong>${backIncreased} sts</strong> from BOR; <strong>${sleeveIncreased} sts</strong> for the right sleeve; <strong>${chestIncreased} sts</strong> for the chest; <strong>${sleeveIncreased} sts</strong> for the left sleeve; and  <strong>${backIncreased} sts</strong> to end of round.</li>
`)