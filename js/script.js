//Login button Event Handeler/Create 
const loginSubmitBtn = document.getElementById("submit-btn"); //login button id
loginSubmitBtn.addEventListener("click", function() { //create a addEventListener and a Function 
    const loginArea = document.getElementById("login-area"); // login-area id for hide the window
    loginArea.style.display = "none"; // css apply for hide the window
    const transactionArea = document.getElementById("transaction-area"); //transactionArea id for display the transaction window 
    transactionArea.style.display = "block"; // css apply for display the window
});

//Deposit Button Event create
const depositBtn = document.getElementById("add-deposit-submit-btn"); // Deposit add Button id
depositBtn.addEventListener("click", function() { // create a addEventListener and a Function 
    const amountNumber = getNumber("deposit-amount");
    //despoist 
    updateAmount("carrent-deposit", amountNumber)
        //current balance
    updateAmount("current-balance", amountNumber)
    document.getElementById("deposit-amount").value = ""; //this is for clear the input
});


//Withdraw Button Event Create
const withdrawBtn = document.getElementById("get-withdraw-submit-btn");
withdrawBtn.addEventListener("click", function() {
    const amountNumber = getNumber("withdrawAmount");
    updateAmount("currentWithdraw", amountNumber)
    updateAmount("current-balance", -1 * amountNumber)

    document.getElementById("withdrawAmount").value = ""; //this is for clear the input
});










function getNumber(id) {
    const addDepositAmount = document.getElementById(id).value; //  addDepositAmount select input id and value
    const amountNumber = parseFloat(addDepositAmount); // convert string value to number
    return amountNumber;
}


function updateAmount(id, amountNumber) {
    const addCurrentBalance = document.getElementById(id).innerText; //read show in deposit total amount id and inner text
    const currentBalanceNumber = parseFloat(addCurrentBalance); // Show in Deposit convert string value to number
    const totalBalance = amountNumber + currentBalanceNumber; // depositNumber + currentDepositNumber for show in frontend 
    document.getElementById(id).innerText = totalBalance; //write this is for show total amount of Deposit
}







































/* 
 */