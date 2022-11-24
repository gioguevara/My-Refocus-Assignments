// 40 100 Normal reading.
// 101 109 Acceptable to continue home monitoring.
// 110 130 Seek advice from health professionals.
// ≥ 131 Seek urgent medical advice.

var BPM = 40

function pulseRate(BPM){
    if ( (BPM >=40) && (BPM <= 100)){
        console.log("Normal reading");
    } else if ( (BPM >101) && (BPM <= 109)) {
        console.log("Acceptable to continue home monitoring.");
    } else if ( (BPM >110) && (BPM <= 130)) {
        console.log("Seek advice from health professionals.");
    } else if (BPM >= 131){
        console.log("Seek urgent medical advice.");
    } else {
        console.log("Your BPM is below normal.");
    }
}
pulseRate(BPM);