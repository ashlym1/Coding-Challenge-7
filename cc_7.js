// Task 1 - Function Declaration:
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount; 
    return "Total Invoice: $" + total.toFixed(2);
}
// Test Data 
console.log(calculateInvoice(100, 0.08, 5)); // Expected Output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected Output: "Total Invoice: $530.00"

// Task 2 - Function Expression: 
const calculateHourlyWage = function (salary, hoursPerWeek) { 
// Calculating the total hrs working per yr (Instruction said 52)
 let totalHoursPaperYear = hoursPerWeek * 52;
//divide by the total of hrs to find hourly wage 
let hourlyWage= salary / totalHoursPaperYear;
// returning the formatted hr wage 
return `Hourly Wage: $$ { hourlyWage.toFixed(2)}`;
};
// Test Data
console.log(calculateHourlyWage(52000, 40)); // Expected Output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected Output: "Hourly Wage: $41.21"

// Task 3- Arrow Function : 
const calculateLoyaltyDiscount = (amount,years)=>{ 
    // Discount depends on the customer loyalty %
    let discountRate= years >= 5 ? 0.15: years >= 3? 0.10 : 0.05;
    //applying the discount to the original amount 
    let discountedPrice=amount * (1-discountRate);
    //returning the final price after dicount; the "tofixed" is to format to the 2nds decimal place )
};
//  Test data 
console.log(calculateLoyaltyDiscount(100, 6)); // Expected Output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected Output: "Discounted Price: $190.00"

//Task 4 -  Parameters and Arguments 
function calculateShippingCost  (weight, location, expedited = false) { 
    // The cost depends on where the order is shipped to 
    if (location === "USA") {
        baseCost = 5 + (0.5 * weight); // USA shipping fees 
    } else if (location === "Canada") {
        baseCost = 10 + (0.7 * weight); // Canada shipping fees 
    } else {
        return "Invalid location"; // If another location is entered it will result with no calculation 
    }
    // Adding  the  expedited shipping fee if applicable
    if (expedited) {
        baseCost += 10;
    }
    // Returning  the total shipping cost and formatting it  to 2 decimal places
    return `Shipping Cost: $${baseCost.toFixed(2)}`;
}

// Test Data 
console.log(calculateShippingCost(10, "USA", true)); // Expected Output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected Output: "Shipping Cost: $13.50"
console.log(calculateShippingCost(8, "Mexico", true)); // Expected Output: "Invalid location"