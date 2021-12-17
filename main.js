//login button Event Handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function (event) {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const tranjectionArea = document.getElementById("tranjection-area");
    tranjectionArea.style.display = "block";
});

//deposite button event Handler
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function () {
    const depositNumber = getInputNumber("depositAmount");
    UpdateSpanText("currentDepo", depositNumber);
    UpdateSpanText('currentBalance', depositNumber);
    document.getElementById("depositAmount").value = 0;
});
//Withdraw button Event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmmount");
    UpdateSpanText("currentWithdraw", withdrawNumber);
    UpdateSpanText('currentBalance', -1 * withdrawNumber);
    document.getElementById("withdrawAmmount").value = 0;

})
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
};
function UpdateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    document.getElementById(id).innerText = total;
}