//Write a function ucFirst(str) that takes a string as input and returns 
//a new string with the first character capitalized and the rest unchanged. 
//The string can be of any length, and the first character could be lowercase, 
// uppercase, or non-alphabetic.
// Step 1: Define the ucFirst function


function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst("hello world"));  
console.log(ucFirst("123 abc"));      

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






  function filteringm (str){

var lowstr = str.toLowerCase();

return lowstr.includes ("Vivi") || lowstr.includes ("Lili");

  }

  console.log (filteringm ("Vivi"))
  


// Check for TRUNCATE 

  function truncate(str, maxlength) {
    if (str.length > maxlength) {

      let truncated = str.slice(0, maxlength);
      let lastSpace = truncated.lastIndexOf(' ');
  
      if (lastSpace !== -1) {
        truncated = truncated.slice(0, lastSpace);
      }
  
 
      return truncated + '...';
    } else {
      return str;
    }
  }
  
  // Test cases
  console.log(truncate("This is a really long sentence", 10));  // should return "This is..."
  console.log(truncate("Short text", 10));  // should return "Short text"
  

