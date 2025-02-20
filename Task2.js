
/*
Problem 2: Check for Spam
Write a function checkSpam(str) that checks if a string contains the words "viagra" or "XXX"
(case insensitive). If the string contains either word, return true; otherwise, return false.
*/

function checkSpam(str) {
    var lowerStr = str.toLowerCase();
    return lowerStr.includes("viagra") || lowerStr.includes("xxx");
  }

  console.log(checkSpam("This is a cheap viagra"));  
  console.log(checkSpam("Check out this website"));  
