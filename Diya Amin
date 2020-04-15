//**********************************************//
//    Diya Amin                                 //
//    ICS4UR                                    //
//    Date: April 15 2020                       //
//    This is the Investment Viewer Script      //
//**********************************************//


var investorName = [];
var investorEmail =[];
var investorIndustry = [];
var investedAmount = [];
var investmentType = [];
var result = ""

/*******The code below reads the registration information that was inputted by the investor********/
/* local storage = data stored in the browser will persist even after the browser window has been closed */    


function readstorage() {
    investorName = JSON.parse(localStorage.getItem("investorName"));
    investorEmail = JSON.parse(localStorage.getItem("investorEmail"));
    investorIndustry = JSON.parse(localStorage.getItem("investorIndustry"));
    investedAmount = JSON.parse(localStorage.getItem("investedAmount"));
    investmentType = JSON.parse(localStorage.getItem("investmentType"));
   }

/*****The code below displays the registration information of the investor*******/

function displayresult() {
    for (var i = 0; i < investorName.length; i ++) {
    result += "<h3>" + investorName[i] + "</h3>" + "<h3>" + investmentEmail[i] + "</h3>" +"<h3>"+ investorIndustry[i] + "</h3>" + "<h3>" + investedAmount[i] + "</h3>" + "<h3>" + investmentType[i] + "</h3>" +"<h3>" ;
    }

document.getElementById("result").innerHTML= result;

}

/********** once the function starts it reads the storage and displays the investors information **********/

function start() {
    readstorage();
    displayresult();
}
