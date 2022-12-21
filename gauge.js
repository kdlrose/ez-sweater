// for 4in or 10cm
let stGauge = 28;
let ease = -2;

// inches
let bustMeasureIn = 47;
noEaseIn = (bustMeasureIn / 4) * stGauge;
let easeGaugeIn = ease * 4;

// centimeters
let bustMeasureCm = 120;
noEaseCm = (bustMeasureCm / 10) * stGauge;
let easeGaugeCm = ease * 10;

// can I make totalSts use either unit!!!
totalSts = 2 * Math.round((noEaseIn + easeGaugeIn) / 2);
neckSts = 2 * Math.round((totalSts * .4) / 2);
chest = 2 * Math.round((neckSts * .3) / 2);
backHalf = 2 * Math.round((chest / 2) / 2);

// EPs magic, same numbers for raglan and yoke but the increase fashion is all that differs!
sleeveStart = 2 * Math.round((neckSts * .2) / 2);
tsIncreased = 2 * Math.round((neckSts * 1.4) / 2);
chestIncreased = 2 * Math.round((tsIncreased * .3) / 2);
backIncreased = 2 * Math.round((chestIncreased / 2) / 2);
sleeveIncreased = 2 * Math.round((tsIncreased * .2) / 2);
armpit =  sleeveStart / 2;

document.getElementById("top-down-raglan").innerHTML = (`
<h1>Top-down raglan</h1>
<ol>
    <li>Cast on <strong>${neckSts} sts</strong>, join in round, pm for BOR.</li>
    <li>Setup: <strong>k${backHalf}</strong>, pm, <strong>k${sleeveStart}</strong>, pm, <strong>k${backHalf}</strong>, pm for middle of chest, <strong>k${backHalf}</strong>, pm, <strong>k${sleeveStart}</strong>, pm, <strong>k${backHalf}</strong>.</li>
</ol>

<h2>Raglan increases</h2>
<ol>
    <li>Round 1: k to end of round.</li>
    <li>Round 2: <strong>*k to 1 st before m, m1R, sm, k1, m1L*</strong>, repeat from ** three more times, k to end of round. Continue these increases through short row shaping.</li>
    <li>German short rows:
        <ul>
            <li>k to 2 sts past the second right sleeve marker. Turn your work so WS is facing.</li>
            <li>sl1wyif to the right needle, pull up the stitch so your yarn is in back.</li>
            <li>p to 1 st before the next marker, m1Rp, sm, p1, m1Lp, p across sleeve, repeate increase, p2, repeat GSR.</li>
            <li>work until there are like, 2 inches to the middle of chest marker on either side, idk.</li>
            <li>Remove the middle of chest sm.
        </ul>
    </li>
    <li>Repeat rounds 1-2 until total st count is <strong>${tsIncreased}</strong>. This should add up to <strong>${backIncreased} sts</strong> from BOR; <strong>${sleeveIncreased} sts</strong> for the right sleeve; <strong>${chestIncreased} sts</strong> for the chest; <strong>${sleeveIncreased} sts</strong> for the left sleeve; and  <strong>${backIncreased} sts</strong> to end of round.</li>
    <li>Split for sleeves: k to first marker, thread your right sleeve sts onto waste yarn, CO <strong>${armpit} sts</strong> using the backwards loop cast-on. Repeat for left sleeve.</li>
</ol>

<h2>Finishing</h2>
<ol>
    <li>Knit body to your desired length and finish with 1x1 rib.</li>
    <li>Picking up sleeves: Starting in the middle of your armpit cast on, pick up half of your backwards loop CO sts, replace held sleeve sts onto your needle, pick up the back half of your backward loop CO, pm for BOR.</li>
    <li>Collar: Pick up <strong>${neckSts} sts</strong> from your cast on edge, k1 p1 to your heart's content, bind off with a stretchy bind-off.</li>
</ol>
`)