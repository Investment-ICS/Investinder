/************************************************
    Diya Amin
    ICS4UR
    Date: April 15 2020
    This is the Investor Registration JavaScript 
**************************************************/


/****This defines all the variables*****/

var investorName = [];
var investorEmail = [];
var investorIndustry = [];
var investedAmount = [];
var investmentType = [];
var i = 0;


/************This function gets the data by its id************/

function getData() {
    investorName[i] = document.getElementById("investorName").value;
    investorEmail[i] = document.getElementById("investorEmail").value;
    investorIndustry[i] = document.getElementById("investorIndustry").value;
    investedAmount[i] = document.getElementById("investedAmount").value;
    investmentType[i] = document.getElementById("investmentType").value;
    
    i += 1;
    
/************* alert:checks if local storage is working and gives investor further instructions*************/
/***********The JSON.stringify() method converts a JavaScript object or value to a JSON string******/
/************localStorage.setItem: lets you store values in the localstorage object***********/

    
    alert("You may know view your investments by clicking the button below");
    localStorage.setItem("investorName", JSON.stringify(investorName));
    localStorage.setItem("investorEmail", JSON.stringify(investorEmail));
    localStorage.setItem("investorIndustry", JSON.stringify(investorIndustry));
    localStorage.setItem("investedAmount", JSON.stringify(investedAmount))
    localStorage.setItem("investmentType", JSON.stringify(investmentType));
    
}

/**************The code below reads the options selected by the investor in the lcoal storage************/
/***********The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string *******/
/*******The getItem() method allows you to access the data stored in the browser’s localStorage object********/

function readstorage() {
    investorName = JSON.parse(localStorage.getItem("investorName"));
    investorEmail = JSON.parse(localStorage.getItem("investorEmail"));
    investorIndustry = JSON.parse(localStorage.getItem("investorIndustry"));
    investedAmount = JSON.parse(localStorage.getItem("investedAmount"));
    investmentType = JSON.parse(localStorage.getItem("investmentType"));
    
    i += 1;
}