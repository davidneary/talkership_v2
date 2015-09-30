/*global newFriend*/
var newFriend;

/*global newTime */
var newTime = [];

/* global lastTime */
var lastTime = [];

/*global array*/
var array = [];

/*global string */
var string;

/* global numDays */
var numDays;

/*global time*/
var time = []

/*global array*/
var array = [];

/*global numSeconds */
var numSeconds;

/*global numDays */
var numDays;

/* global deadFriend */
var deadFriend;

/* function killFriend() {
    var removeFriend =  prompt("Who would you like to remove as a friend?", "Enter name here");
    var indexRemove = array.indexOf(removeFriend);
    if (indexRemove > -1) {
        array.splice(indexRemove, 1);
    }
    for (var i = -1; i < array.length; i++) {
       newHTML.push('<li>' + array[i] + '</li>');
    }
    writeList(array, "demo");
    console.log(array);
    console.log(array)
} */
 
/* global spot */
var spot; 

function killFriend() {
    var newHTML = [];
    deadFriend = prompt("Enter the Facebook id of the person you would like to remove, usually firstname.lastname.#, and found at the end of the url of their profile.", "Their Facebook id...");
   	spot = array.indexOf(deadFriend);
   	array[spot] = "";
   	time[spot] = "";
   	lastTime[spot] = "";
   	console.log(array);
   	
    // for (var i = -1; i < array.length; i++) {
    //   newHTML.push('<li>' + array[i] + '</li>');
    // }
    writeList(array, "demo");
    writeList(time, "time");
    writeList(lastTime, "timeBefore");
    
    return deadFriend;
}

function promptsForDays() {
    numDays = prompt("Please enter number of days before prompting", "Days...");
    numSeconds = (1000*60*60*25)*numDays;
    console.log("Send prompt in "+numSeconds+" milliseconds");
    return numSeconds;
}
   
//math converter from UNIX
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var UNIXtime = date + ' ' + month;
    return UNIXtime;
}


    
