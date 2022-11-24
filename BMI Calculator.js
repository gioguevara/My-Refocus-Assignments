let height = 1.73
let weight = 68

function calculateBMI(){
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        console.log(bmi + " - Underweight");
      } else if (bmi < 25) {
        console.log(bmi + " - Normal weight");
      } else if (bmi < 30) {
        (bmi + " - Pre-obesity");
      } else if (bmi < 35) {
        console.log(bmi + " - Obesity class I");
      } else if (bmi < 40) {
        console.log(bmi + " - Obesity class II");
      } else {
        console.log( " - Obesity class III");
      }
}

calculateBMI()