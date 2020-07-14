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
    const addDepositAmount = document.getElementById("deposit-amount").value; //  addDepositAmount select input id and value
    const depositNumber = parseFloat(addDepositAmount); // convert string value to number
    //despoist 
    const addCurrentDeposit = document.getElementById("carrent-deposit").innerText; //read show in deposit total amount id and inner text
    const currentDepositNumber = parseFloat(addCurrentDeposit); // Show in Deposit convert string value to number
    const totalDeposit = depositNumber + currentDepositNumber; // depositNumber + currentDepositNumber for show in frontend 
    document.getElementById("carrent-deposit").innerText = totalDeposit; //write this is for show total amount of Deposit
    //current balance
    const addCurrentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNumber = parseFloat(addCurrentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("current-balance").innerText = totalBalance;


    document.getElementById("deposit-amount").value = ""; //this is for clear the input
});


































/* 
 */