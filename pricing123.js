function convertCurrency() {
    var selectedCurrency = document.getElementById("currency").value;
    var amounts = document.querySelectorAll(".amount");

    amounts.forEach(function(amount) {
        var currentAmount = amount.getAttribute("data-original").trim();
        var currencySymbol = currentAmount.charAt(0);

        var conversionRates = {
            "₹": 1,
            "$": 0.014,
            "£": 0.010,
            "₽": 1.12,
            "¥": 0.086,
            "CN¥": 0.088,
            "৳": 1.19,
            "€": 0.012,
            "R$": 0.072
        };

        if (conversionRates[selectedCurrency]) {
            var newAmount = (parseFloat(currentAmount.slice(1)) * conversionRates[selectedCurrency]).toFixed(2);
            amount.textContent = selectedCurrency + " " + newAmount;
        }
    });
}