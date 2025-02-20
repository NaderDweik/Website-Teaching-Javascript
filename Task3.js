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