// Task 1 - Function Declaration: Customer Invoice Calculation 
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount; 
    return "Total Invoice: $" + total.toFixed(2);
}
// Test Cases 
console.log(calculateInvoice(100, 0.08, 5)); // Expected Output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected Output: "Total Invoice: $530.00"

