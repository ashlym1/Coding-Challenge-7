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
return `Hourly Wage: $${ hourlyWage.toFixed(2)}`;
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
   return `Discounted Price :$${discountedPrice.toFixed(2)}`; //returning the final price 
};
//  Test data 
console.log(calculateLoyaltyDiscount(100, 6)); // Expected Output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected Output: "Discounted Price: $190.00"

//Task 4 -  Parameters and Arguments 
function calculateShippingCost  (weight, location, expedited = false) { 
    // The cost depends on where the order is shipped to 
    let baseCost = 0; 
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

//Task 5- Returning Values 
 function calculateLoanInterest (principal,rate,years) { 
    //calculating the total interest by multiplying the principal with the rate and yrs
    let interest = principal * rate*years;
    // Returning the interest and formating it to the 2nd decimal place
    return `Total Interest: $${ interets.toFixed (2)}`;
 };
// Test Data : 
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"


// Task 6 : Higher-order Functions 
 // array of transaction given 
 let transactions= [ 500, 1200, 3000, 800, 2200]
  const filterHighValueTransactions=( transactions,filterFunction) => {
    return transactions.filter(filterFunction); // this will filter transactions based on the condition
  };
    // Test data : making sure it filters greater than 1000
console.log (filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected output: [1200, 3000, 2200]

//Task 7 : Closure 
function createBudgetTracker() { 
    let balance= 0 ; // the initial balence will start at 0 
    return function (expense) {  
        balance-= expense ; // subtracting the expenses from the balance 
        return `Current Balance : $${ balance.toFized(2)}`; 
    };
}
// A new budget tracker, which will hopefully will keep  track of the  expenses 
let budget = createBudgetTracker();

// Test Data: 
console.log(budget(300));// Expected output: "Current Balance: -$300"
console.log(budget(200));// Expected output: "Current Balance: -$500"

// Task 8 : Recursion in Java script 
function calculateGrowth(years, revenue) {
    // Each year it will increase revenue by 5 % until it reaching 10yr
    if (years >= 10) {
        return `Projected Revenue: $${revenue.toFixed(2)}`;
    }
    // Increase revenue by 5% each year
    return calculateGrowth(years + 1, revenue * 1.05);
}
// Test Data 
console.log(calculateGrowth(8, 1000)); // Expected output: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000)); // Expected output: "Projected Revenue: $6381.41")
