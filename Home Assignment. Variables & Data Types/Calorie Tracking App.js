// Cycling for 30 minutes burns 225 calories.
// Sam decides to cycle for 60 minutes (1 hour) everyday in a week.

// Store in a variable named caloriesPerHour the number of calories burned per hour.
let caloriesPerHour = 450; // cycling for 60 minutes burns 450 calories.

// Count the number of times Sam will cycle in a week and store in a variable name numTimeSamCycle.
let numTimeSamCycles = 15;

// Store in a variable named cycleHoursPerDay the number of hours Sam has decided to cycle.
let cycleHoursPerDay = .5;

// Compute the total number of hours of cycking in a week using numTimeSamCycles and cycleHoursPerDay.
// and store the result in a variable named totalHoursCycling.
let totalHoursCycling = numTimeSamCycles * cycleHoursPerDay;

// Compute the total calories burned using caloriesPerHour and totalHoursCycling.
let totalCaloriesBurned = caloriesPerHour * totalHoursCycling;

// Display the message using console.log.

console.log(`Great work, Sam! After ${cycleHoursPerDay} hour/s of cycling everyday in a week, you may lose a total of ${totalCaloriesBurned} calories.`);
// template literals