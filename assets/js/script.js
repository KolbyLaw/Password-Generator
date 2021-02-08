// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Standard Variables
var length = "";
var lCase;
var uCase;
var numeric;
var specialChar;

// Potential Character Arrays
var uLetterSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lLetterSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialSet = ['!', '"', '#', '$', '%', '&', '(', ')', '*', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '=', '<', '?', '@', '[', ']', '^', '_', '{', '}', '~', '`', '|'];



// Main Function
function generatePassword() {

  // Question Prompts - Length
  var length = prompt("How many characters would you like your password to be? Enter a number between 8 and 128.")

    // Failure/Restart
    while(length < 8 || length > 128) {
      alert("Please enter a valid number.")
      var length = prompt("How many characters would you like your password to be? Enter a number between 8 and 128.")
    }

  // Question Prompts - Characters
  var lCase = confirm("Would you like to include lowercase letters?");
  var uCase = confirm("Would you like to include uppercase letters?");
  var numeric = confirm("Would you like to include numbers?");
  var specialChar = confirm("Would you like to include special characters?");

    //Failure/Restart
    while(!lCase && !uCase && !numeric && !specialChar) {
      alert("You must select at least one option!");
      var lCase = confirm("Would you like to include lowercase letters?");
      var uCase = confirm("Would you like to include uppercase letters?");
      var numeric = confirm("Would you like to include numbers?");
      var specialChar = confirm("Would you like to include special characters?");
    };


  // Build Password
  var passwordBuilder = []

  if (lCase) {
    passwordBuilder = passwordBuilder.concat(lLetterSet)
  } 
  
  if (uCase) {
    passwordBuilder = passwordBuilder.concat(uLetterSet)
  }
    
  if (numeric) {
    passwordBuilder = passwordBuilder.concat(numberSet)
  }

  if (specialChar) {
    passwordBuilder = passwordBuilder.concat(specialSet)
  }


  // New Password Container/Build Loop
  var newPassword = "";
    
    for (var i = 0; i < length; i++) {
      newPassword = newPassword + passwordBuilder[Math.floor(Math.random() * passwordBuilder.length)];
    }
    return newPassword;

};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

























// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);