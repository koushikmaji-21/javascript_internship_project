console.log("-- Multiplication Table of 5 --");
for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 2. While loop with a break statement to find the first number > 10 divisible by 6
console.log("\n-- First number > 10 divisible by 6 --");
let currentNumber = 11;
let foundNumber;

while (true) {
    if (currentNumber % 6 === 0) {
        foundNumber = currentNumber;
        break; 
    }
    currentNumber++;
}
console.log(`Found: ${foundNumber}`);

// 3. Do...while loop demonstrating the use of continue to skip numbers
console.log("\n-- Skipping numbers using continue (1 to 5, skipping 3) --");
let num = 0;
do {
    num++;
    if (num === 3) {
        continue; 
    }
    console.log(`Number: ${num}`);
} while (num < 5);