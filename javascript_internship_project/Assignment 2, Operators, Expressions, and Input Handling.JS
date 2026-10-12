let rawBill = prompt("Enter the subtotal bill amount:");
let rawTipPercent = prompt("Enter the tip percentage:");

// Perform explicit type conversion using Number()
let subtotal = Number(rawBill);
let tipPercentage = Number(rawTipPercent);

// Compute calculated tip and total amount using arithmetic and assignment operators
let calculatedTip = (subtotal * tipPercentage) / 100;
let totalAmount = subtotal;
totalAmount += calculatedTip; // Using assignment operator

// Log the formatted output
console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);