// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// Potential Character Sets
var uLetterSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lLetterSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialSet = ['!', '"', '#', '$', '%', '&', '(', ')', '*', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '=', '<', '?', '@', '[', ']', '^', '_', '{', '}', '~', '`', '|'];








// Main Function
function generatePassword() {


    // Prompts
    var length = prompt("How many characters would you like your password to be? Enter a number between 8 and 128.")
      if(length < 8 || length > 128) {
        alert("Please enter a valid number.")
        prompt("How many characters would you like your password to be? Enter a number between 8 and 128.")
      }


    var lCase = confirm("Would you like to include lowercase letters?");
    var uCase = confirm("Would you like to include uppercase letters?");
    var numeric = confirm("Would you like to include numbers?");
    var specialChar = confirm("Would you like to include special characters?");
      if(!lCase && !uCase && !numeric && !specialChar)
        alert("You must select at least one option!");
        var lCase = confirm("Would you like to include lowercase letters?");
        var uCase = confirm("Would you like to include uppercase letters?");
        var numeric = confirm("Would you like to include numbers?");
        var specialChar = confirm("Would you like to include special characters?");

    console.log (length + lCase + uCase + numeric + specialChar);


}





