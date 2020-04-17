//Name: Anshul Gohel
//Group Members: Shreya, Riya, Diya and Rahul
//Course Code: ICS4UR-B
//Date: 15.4.2020
//Investinder Desktop App



//Declaring Variables to incorporate arrays for name, industry, capital and pitch
let NameInfo = [];
let IndustryInfo = [];
let CapitalInfo = [];
let PitchInfo = [];

let i = 0;
//stores and declares the value of the index which is used to reference specific data


    //Idea Screen Information and variables retrieving the data//

    NameInfo[i] = document.getElementById('NameI').value;
    IndustryInfo[i] = document.getElementById('IndustryI').value;
    CapitalInfo[i] = document.getElementById('CapitalI').value;
    PitchInfo[i] = document.getElementById('PitchI').value;


    //takes the value from the idea screen and stores them in the array


    console.log(NameInfo + IndustryInfo + CapitalInfo + PitchInfo);
    window.alert(JSON.stringify(PitchInfo[i]));
    if (JSON.stringify(NameInfo[i]) !== '""' && JSON.stringify(IndustryInfo[i]) !== '""' && JSON.stringify(CapitalInfo[i]) !== '""' && JSON.stringify(PitchInfo[i]) !== '""'  {
        i++;
        localStorage.setItem("NameInfo", JSON.stringify(NameInfo));
        localStorage.setItem("IndustryInfo", JSON.stringify(IndustryInfo));
        localStorage.setItem("CapitalInfo", JSON.stringify(CapitalInfo));
        localStorage.setItem("PitchInfo", JSON.stringify(PitchInfo));
        localStorage.setItem("i", i);
        //if all the options are filled in, the data from arrays gets stored in the local storage

    } else {
        window.alert('Please completely fill in all the blanks. Thank You.')
        //Else statement does not allow user to leave any blanks//
    }
}
