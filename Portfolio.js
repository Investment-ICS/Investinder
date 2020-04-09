/*******************************************
Riya Uppal & Shreya Joshi
ICS4UR
This is the js to add to the investment portfolio.
********************************************/

var amount = [];
var contact = [];
var companyName = [];
var equity = [];
var companyIndustry = [];
var r = 0;


/************This function gets the data by its id************/

function getData() {
    amount[r] = document.getElementById("amount").value;
    contact[r] = document.getElementById("contact").value;
    companyName[r] = document.getElementById("companyName").value;
    equity[r] = document.getElementById("equity").value;
    companyIndustry[r] = document.getElementById("companyIndustry").value;
    r += 1;
    alert("You may now view your investments by clicking the button below");
    localStorage.setItem("amount", JSON.stringify(amount));
    localStorage.setItem("contact", JSON.stringify(contact));
    localStorage.setItem("companyName", JSON.stringify(companyName));
    localStorage.setItem("equity", JSON.stringify(equity));
    localStorage.setItem("companyIndustry", JSON.stringify(companyIndustry));
}


function readstorage() {
    amount = JSON.parse(localStorage.getItem("amount"));
    contact = JSON.parse(localStorage.getItem("contact"));
    companyName = JSON.parse(localStorage.getItem("companyName"));
    equity = JSON.parse(localStorage.getItem("equity"));
    companyIndustry = JSON.parse(localStorage.getItem("companyIndustry"));
    r += 1;
}


