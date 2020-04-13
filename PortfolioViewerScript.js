/**********************************************************************************
Riya Uppal
ICS4UR
This is the js for the portfolio viewer.
***********************************************************************************/

var amount = [];
var contact = [];
var companyName = [];
var equity = [];
var companyIndustry = [];
var result = ""

function readstorage() {
    amount = JSON.parse(localStorage.getItem("amount"));
    contact = JSON.parse(localStorage.getItem("contact"));
    companyName = JSON.parse(localStorage.getItem("companyName"));
    equity = JSON.parse(localStorage.getItem("equity"));
    companyIndustry = JSON.parse(localStorage.getItem("companyIndustry"));
}


function displayresult() {
    for (var r = 0; r < amount.length; r ++) {
    result += "<h3>" + amount[r] + "</h3>" + "<h3>" + contact[r] + "</h3>" + "<h3>" + companyName[r] + "</h3>" + "<h3>" + equity[r] + "</h3>" + "<h3>" + companyIndustry[r] + "</h3>";
    }
}
        
  document.getElementById("result").innerHTML = result;   
}

function go() {
    readstorage();
    displayresult();
}
 
