
    //remove friends helper function
    Array.prototype.remove = function(value) {
    var idx = this.indexOf(value);
    if (idx != -1) {
        return this.splice(idx, 1); // The second parameter is the number of elements to remove.
    }
    return false;
    }

function killFriend() {
    var removeFriend =  prompt("Who would you like to remove as a friend?", "Jane Doe");
    array.remove(removeFriend);
    
    
    //refresh the page so that the friend is no longer displayed

}


function setPromptTime() {
    //prompt the user for the number of days they would like
    //before getting a notification 
}

function getLastInteraction() {
    //get and add the date of the last interaction between user and friend
}

function promptsForDays() {
    var numDays = prompt("Please enter number of days before prompting", "Days...");
    }
    //convert numDays into MJD
    //assign promptTime to friend

/*global array*/
var array = [];

    
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
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
}
    
