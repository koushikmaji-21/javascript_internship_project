let inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Capture new product info via prompt and explicitly convert the price to a number
console.log("--- Initializing Inventory System ---");
let newProductName = prompt("Enter new product name:");
let rawPrice = prompt("Enter product price:");
let newProductPrice = Number(rawPrice);

// Push the newly initialized object into the inventory array
inventory.push({ name: newProductName, price: newProductPrice });
console.log(`[Prompt executed: User adds "${newProductName}" at "$${newProductPrice}"]`);


//  2. Control Flow & Conditional Evaluation ---
// Helper function to categorize items based on dynamic price thresholds using switch/if...else
function assignCategory(price) {
    let tier;
    if (price >= 500) {
        tier = "Premium";
    } else if (price >= 50 && price < 500) {
        tier = "Standard";
    } else {
        tier = "Budget";
    }

    switch (tier) {
        case "Premium":
            return "Premium";
        case "Standard":
            return "Standard";
        default:
            return "Budget";
    }
}


//  3. Loops & Flow Control ---
// Using a loop with conditional checks to process and validate records
console.log("\n--- Processing Inventory Roster (forEach) ---");

//  4. Functions & Scope (Inventory Analytics) ---
// Regular function to calculate total inventory value with secure local scope
function calculateTotalValue(items) {
    let totalValue = 0;
    for (let i = 0; i < items.length; i++) {
        // Skip invalid prices using continue if needed
        if (isNaN(items[i].price)) {
            continue;
        }
        totalValue += items[i].price;
    }
    return totalValue;
}

// Arrow function to filter items under a certain threshold
const getAffordableItems = (items, maxPrice) => {
    return items.filter(item => item.price < maxPrice);
};


// 5. Array Methods & Iteration ---
// Leverages forEach() to log final inventory roster with categories
inventory.forEach(item => {
    let category = assignCategory(item.price);
    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${category}`);
});

// Financial Analytics Outputs
console.log("\n--- Financial Analytics ---");
let totalValue = calculateTotalValue(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

// Isolate items under $200 using filter() and extract their names
let affordableItemsList = getAffordableItems(inventory, 200).map(item => item.name);
console.log(`Filtered Affordable Items (Under $200): ${JSON.stringify(affordableItemsList)}`);

// Produce a transformed report summary using map()
let formattedReportList = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log(`Formatted Report List: ${JSON.stringify(formattedReportList)}`);