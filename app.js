var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var calculate = document.querySelector("#submit-btn");
var result = document.querySelector("#output");

calculate.addEventListener("click", submitInput);

function submitInput() {
    var iprice = Number(initialPrice.value);
    var sqty = Number(stockQuantity.value);
    var cprice = Number(currentPrice.value);
    console.log(iprice,sqty,cprice);

    mainCalculator(iprice,sqty,cprice)
}

function mainCalculator(costPrice,quantity,sellingPrice) {
    if(sellingPrice > costPrice) {
        var profit = (sellingPrice - costPrice) * quantity;
        var profitPercentage = (profit/costPrice) * 100;

    showMessage(`WOWW!! Your profit is ${profit} and in percentage is ${profitPercentage}`);

    }else if(sellingPrice < costPrice) {
        var loss = (costPrice - sellingPrice) * quantity;
        var lossPercentage = (loss/costPrice) * 100;

    showMessage(`OOPS!! Your loss is ${loss} and in percentage is ${lossPercentage}`);

    } else {
        showMessage(`You earn what you invest`);
    }
}

function showMessage(message) {
    result.innerHTML = message;
}