// 1. Standard function to calculate rectangle area with default parameters (5 x 4)
function calculateStandardArea(length = 5, width = 4) {
    return length * width;
}

// 2. Arrow function to calculate rectangle area with custom parameters (10 x 3)
const calculateArrowArea = (length = 5, width = 4) => length * width;

// Execute and log function results
console.log(`Standard Function Area (Default 5x4): ${calculateStandardArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${calculateArrowArea(10, 3)}`);

// 3. Demonstrating Block Scope vs Function Scope
try {
    if (true) {
        // blockVar is block-scoped using 'let'
        let blockVar = "I am inside the block";
        console.log(blockVar); // Accessible inside the block
    }
    
    // Attempting to access blockVar outside its block will throw a ReferenceError
    console.log(blockVar);
} catch (error) {
    console.log(`Scope Test Error: ${error.name}: ${error.message} (when accessed outside block)`);
}