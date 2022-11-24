// Sam wants to save ₱10,000 and has already saved ₱7,500. 

// Store in a variable named savingsValue the value Sam saved.
let savingsValue = 7500;

// Store in a variable named goalValue the goal value Sam wants to save.
let goalValue = 10000;

// Compute the how much money Sam have already saved.
let percentValue = Math.abs(savingsValue/goalValue-1)*100;

console.log(`Thank you for your discipline and hardwork, Sam! You are now ${percentValue}% away from
your goal of saving ₱${goalValue}`)
