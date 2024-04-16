document.addEventListener("submit", function (event) {
    event.preventDefault();

    var incomeInput = document.getElementById("income");
    var expenseInput = document.getElementById("exp");
    var debtInput = document.getElementById("debt");

    var income = parseFloat(incomeInput.value);
    var expenses = parseFloat(expenseInput.value);
    var debt = parseFloat(debtInput.value);

    if (isNaN(income) || isNaN(expenses)) {
        alert("Please enter valid numbers for income and expenses.");
        return;
    }

    var remainingAmount = income - expenses - debt;

    var group1 = 0;
    var group2 = 0;
    var group3 = 0;

    if (remainingAmount < 15000) {
        var savings = remainingAmount * 0.35;
        var emergency = remainingAmount * 0.30;
        var investment = remainingAmount * 0.35;

        group1 = remainingAmount;
    } else if (remainingAmount >= 15000 && remainingAmount <= 30000) {
        savings = remainingAmount * 0.30;
        emergency = remainingAmount * 0.30;
        investment = remainingAmount * 0.40;

        group2 = remainingAmount;
    } else {
        savings = remainingAmount * 0.25;
        emergency = remainingAmount * 0.25;
        investment = remainingAmount * 0.50;

        group3 = remainingAmount;
    }
    var lowRiskInvestment = investment * 0.50;
    var midRiskInvestment = investment * 0.30;
    var highRiskInvestment = investment * 0.20;
    
    localStorage.setItem('savings', savings.toFixed(2));
    localStorage.setItem('emergency', emergency.toFixed(2));
    localStorage.setItem('investment', investment.toFixed(2));
    localStorage.setItem('lowRiskInvestment', lowRiskInvestment.toFixed(2));
    localStorage.setItem('midRiskInvestment', midRiskInvestment.toFixed(2));
    localStorage.setItem('highRiskInvestment', highRiskInvestment.toFixed(2));

    // Redirect to new page
    window.location.href = "page5.html";
});