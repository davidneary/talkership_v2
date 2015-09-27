var friend = {name, lastContact, promptTime};
var i = 0;
var lovedFriends = friendReader();
//friendReader() should return lovedFriends;
//lovedFriends is a 

//for each loved friend, initialize a friend with their variables
for(i = 0; i < lovedFriends.length; i++) {
    this.name = friendReader()[i].name();
    this.lastContact = f  riendReader()[i].lastContact();
    this.promptTime = friendReader()[i].promptTime();
    
    
function friendReader() {
    //parses the friend's facebook profile for their name, 
    //and the time of the last message between them and
    //the user
}

}

Object.defineProperty(friend, 'name', {
    get: function() {
        return friend.name;
    }
    
});

Object.defineProperty(friend, 'lastContact', {
    get: function() {
        return friend.lastContact;
    }
});

Object.defineProperty(friend, 'promptTime', {
    get: function() {
        return friend.promptTime;
    },
    set: function(timeBefore) {
        // var timeBeforePrompt = parse(timeBefore);
        // this.promptTime = timeBeforePrompt;
      
    }
});
