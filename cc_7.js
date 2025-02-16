// Task 1 - Function Declaration: Customer Invoice Calculation 
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount; 
    return "Total Invoice: $" + total.toFixed(2);
}
// Test Data 
console.log(calculateInvoice(100, 0.08, 5)); // Expected Output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected Output: "Total Invoice: $530.00"

// Task 2 - Function Expression; Employee Hourly wage calulation
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
