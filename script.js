document.addEventListener("DOMContentLoaded", function () {

// Get reference to display elements
var scrNum = document.getElementById("scrNum");
var scrAns = document.getElementById("scrAns");

// Get reference to all calculator keys
var keys = document.querySelectorAll(".key");

// Initialize variables
var currentInput = "";
var ans = "";

// Add click event listener to all keys
keys.forEach(function (key) {
    key.addEventListener("click", function() {
        var keyValue = key.textContent;

        // Add click event listener to all keys
        switch (keyValue) {
            case "AC":
                currentInput = "";
                ans = "";
                break;
            case "del":
                currentInput = currentInput.slice(0, -1);
                break;
            case "=":
                try {
                    ans = evaluateExpression(currentInput);
                    currentInput = ans.toString();
                    currentInput = "";
                } catch (error) {
                    currentInput = "Error";
                }
                break;
            case "Ans":
                currentInput += ans;
                break;
            case "%":
                // Convert the current input to a percentage
                currentInput = (evaluateExpression(currentInput) / 100).toString();
                break;
            default:
                currentInput += keyValue;
        }

        // Update display
        scrNum.textContent = currentInput;
        scrAns.textContent = ans;
    });
});

// Function to evaluate the expression
function evaluateExpression(expression) {
    if (expression.includes("/0")) {
        throw new Error("Division by zero is not allowed.");
    }
    return eval(expression);
};

});