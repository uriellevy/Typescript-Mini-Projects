const percentageInput = document.querySelector(".rangeInput");
const billInput = document.querySelector(".billInput") as HTMLInputElement;
const percentage = document.querySelector(".percentage") as Element;
const amountNumber = document.querySelector(".amountNumber") as Element;
const totalAmount = document.querySelector(".totalAmountNumber") as Element;


function updateTip(percentage:number, calcTotalAmount:boolean) {
    const billAmount = +billInput.value;
    const decimal = percentage / 100;
    const total = billAmount * (decimal + 1);
    const tipOnly = billAmount * decimal;
    if (!billAmount) return;

    if(calcTotalAmount) {
        totalAmount.innerHTML = numberFormatting(total); 
    }else {
        amountNumber.innerHTML = numberFormatting(tipOnly);
    };
};

function numberFormatting(number:number) {
    const formatted = number.toLocaleString();
    return formatted;
}

percentageInput?.addEventListener("change", (e:Event) => {
    const intValue = +(e.target as HTMLInputElement).value;
    percentage.innerHTML = intValue.toString();
    updateTip(intValue, false);
    updateTip(intValue, true);
}); 