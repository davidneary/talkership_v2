// function removerHelp()
//     //remove friends helper function
//     Array.prototype.remove = function(value) {
//     var idx = this.indexOf(value);
//     if (idx != -1) {
//         return this.splice(idx, 1); // The second parameter is the number of elements to remove.
//     }
//     return false;
//     }
/*global array*/
var array = [];

function killFriend() {
    var removeFriend =  prompt("Who would you like to remove as a friend?", "Enter name here");
    var indexRemove = array.indexOf(removeFriend);
    if (indexRemove > -1) {
        array.splice(indexRemove, 1);
    }
    document.getElementById("demo").innerHTML = "";
    console.log(array)
    //refresh the page so that the friend is no longer displayed

}



function getLastInteraction() {
    //get and add the date of the last interaction between user and friend
}
/*global UNIXnumDays */
var UNIXnumDays;
var numDays;
function promptsForDays() {
    
    numDays = prompt("Please enter number of days before prompting", "Days...");
    UNIXnumDays = (24)*numDays;
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


    
