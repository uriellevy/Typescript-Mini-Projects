"use strict";
const percentageInput = document.querySelector(".rangeInput");
const billInput = document.querySelector(".billInput");
const percentage = document.querySelector(".percentage");
const amountNumber = document.querySelector(".amountNumber");
const totalAmount = document.querySelector(".totalAmountNumber");
function updateTip(percentage, calcTotalAmount) {
    const billAmount = +billInput.value;
    const decimal = percentage / 100;
    const total = billAmount * (decimal + 1);
    const tipOnly = billAmount * decimal;
    if (!billAmount)
        return;
    if (calcTotalAmount) {
        totalAmount.innerHTML = numberFormatting(total);
    }
    else {
        amountNumber.innerHTML = numberFormatting(tipOnly);
    }
    ;
}
;
function numberFormatting(number) {
    const formatted = number.toLocaleString();
    return formatted;
}
percentageInput === null || percentageInput === void 0 ? void 0 : percentageInput.addEventListener("change", (e) => {
    const intValue = +e.target.value;
    percentage.innerHTML = intValue.toString();
    updateTip(intValue, false);
    updateTip(intValue, true);
});
