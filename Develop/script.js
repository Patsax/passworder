// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(',')'];

// password generation function
var generatePassword = function() {
  var length = parseInt(prompt("Please input a number between 8 and 128 to determine password length"));
    if (isNaN(length) || length < 8 || length > 128){
      alert("Entry must be a number between 8 and 128");
      return;
    };

  var allowedCharacters = [];

  var numb = prompt("Would you like to use numbers? (y/n)").toLowerCase 
    if (numb = 'y') {
      allowedCharacters = allowedCharacters.concat(numbers);
      console.log(allowedCharacters)
    };

  var lower = prompt("Would you like to use lowercase letters? (y/n)").toLowerCase 
    if (lower = 'y') {
      allowedCharacters = allowedCharacters.concat(lowerLetters);
      console.log(allowedCharacters)
    };

  var upper = prompt("Would you like to use uppercase letters? (y/n)").toLowerCase 
    if (upper = 'y') {
      allowedCharacters = allowedCharacters.concat(upperLetters);
      console.log(allowedCharacters)
    };

  var special = prompt("Would you like to use special characters? (y/n)").toLowerCase 
    if (special = 'y') {
      allowedCharacters = allowedCharacters.concat(specialChar);
      console.log(allowedCharacters)
    };

  var password = "";

  for (var i = 0; i < length; i++) {
    var randomCharacters = Math.floor(Math.random() * length);
    var character = allowedCharacters[randomCharacters];
    password = password.concat(character);
  };
  return password;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
