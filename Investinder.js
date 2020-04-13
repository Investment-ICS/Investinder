//Rahul Puri
//ICS4UR
//Mr.Brown
//2019-2020
//JavaScript for registration screen 

//Defining all the variables

var investor = [];
var idea = []
var option1 = []
var i = 0;

// storing data in variable, alert and local storage function for teacher screen

function getdata() {
    
    // storing data in variable   
    
    alert(i);
        option1[i] = document.getElementById("OPT").value;
        idea[i] = document.getElementById("IDE").value;
        investor[i] = document.getElementById("INV").value;
        i++;

    
    //alert or notification of option selected
    
    alert("OPT: " + option1 + "n\IDE:" + investor + "n/IDE" + idea);
    
     //selected option will be stored in local storage 
    
    localStorage.setItem("OPT", JSON.stringify (option1));
    localStorage.setItem("IDE", JSON.stringify (idea));
    localStorage.setItem("INV", JSON.stringify (investor));
}

//displays the data selected 

function displaydata() {
    var option1 = JSON.parse(localStorage.getItem("OPT"));
    var idea = JSON.parse(localStorage.getItem("IDE"));
    var investor = JSON.parse(localStorage.getItem("INV"));
    
    data += "<p>" idea[i] + "<p>" + "<br>" + "<p>" investor[i] + "<p>" + "<br>" + "<p>" + option1[i] "<p>" + "<br>"
    
    document.getElementById("data").innerHTML = data;
}

//reads storage and displays the data// 

function start() {
    readstorage ();
    displaydata();
}
