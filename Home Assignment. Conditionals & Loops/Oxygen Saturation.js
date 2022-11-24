var pulseOximeter = 95

function oxygenSaturation(pulseOximeter){
    if (pulseOximeter >= 96){
        console.log("Normal reading");
    } else if ( (pulseOximeter >=93) && (pulseOximeter <= 94)) {
        console.log("Seek advice from health professionals.");
    } else if  (pulseOximeter <= 92) {
        console.log("Seek urgent medical advice.");
    } else if (pulseOximeter == 95){
        console.log("Acceptable to continue home monitoring.");
    } else {
        console.log("The value of the pulseOximeter variable is not numerical.");
    }
}
oxygenSaturation(pulseOximeter);