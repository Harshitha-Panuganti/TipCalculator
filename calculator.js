let billAmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount");
let errorMessageEl = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input.";

function calculate() {
    let billAmountInputValue = billAmountEl.value;
    let percentageTipValue = percentageTipEl.value;
    if (billAmountInputValue === "") {
        errorMessageEl.textContent = errorMessage;
    } else if (percentageTipValue === "") {
        errorMessageEl.textContent = errorMessage;
    } else {
        errorMessageEl.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipValue);

        let calculatedTip = (percentageTip / 100) * billAmount;
        let tipAmount = billAmount + percentageTip;

        tipAmountEl.value = calculatedTip;
        totalAmountEl.value = tipAmount;
    }
}