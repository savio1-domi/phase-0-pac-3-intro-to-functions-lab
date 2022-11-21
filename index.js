function shout(string) {
    return string.toUpperCase();
}

  function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    return string.toLowerCase();
}

// function logWhisper(string){
//     return string.toLowerCase()
// }

  function logWhisper(string) {
    console.log(string.toLowerCase());
    }
    function sayHiToHeadphonedRoommate(string) {
        var cantHear = "I can't hear you!";
        var yes = "YES INDEED!";
        var love = "I would love to!";
        if (string.toLowerCase(string) === string) {
          return cantHear;
        }
        else if (string.toUpperCase(string) === string) {
          return yes;
        }
        else if ("Let\'s have dinner together!" === string) {
          return love;
        }
    }