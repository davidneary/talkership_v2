/*global array*/
var array = [];

/*global UNIXnumDays */
var UNIXnumDays;

/*global numDays */
var numDays;

function killFriend() {
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
}


function promptsForDays() {
    numDays = prompt("Please enter number of days before prompting", "Days...");
    UNIXnumDays = (24*60*60)*numDays;
    console.log("Send prompt in "+UNIXnumDays+" seconds");
    return numDays;
}
   
//math converter from UNIX
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month;
    return time;
}


    
