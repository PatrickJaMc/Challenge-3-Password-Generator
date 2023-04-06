// Assignment Code

var upperCase;
var lowerCase;
var number;
var specChar;
var length;

// Variables that will be used to create arrays based on user selection.
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = ['1','2','3','4','5','6','7','8','9','0'];
var specChar = ['!','@','#','$','%','^','&','*','(',')','_','+'];

function generatePassword(){

  var length = parseInt(prompt('How many characters do you want for password, enter a number between 8 and 128.'));
  // parseInt is used to remove any decimal that the user may attempt to include.

  while (length < 8 || length > 128) {
    alert('Your password length must be between 8 and 128!');
    length = parseInt(prompt('Your password length must be between 8 and 128!'));
  }
   console.log(length);

   var upper = confirm('Would you like to include UPPERCASE letters?');
   console.log(upper);

   var lower = confirm('Would you like to include lowercase letters?');
   console.log(lower);

   var number = confirm('Would you like to include numbers?');
   console.log(number);

   var specChar = confirm('Would you like to include special characters?');
   console.log(specChar);

   if (!upperCase && !lowerCase && !number && !specChar) {
    var userChoice = alert('You must choose at least 1 character preference, cannot create password!');
    console.log(userChoice);

   } else if (upperCase && lowerCase && number && specChar) {  //////////////// Why are number and specChar returning as 'True' in console instead of what is in the array?
    var userChoice = upperCase.concat(lowerCase,number,specChar);
    console.log(userChoice);

   } else if (upperCase && lowerCase && number) {
    var userChoice = upperCase.concat(lowerCase, number);
    console.log(userChoice);

   } else if (upperCase && lowerCase && specChar) {
    var userChoice = upperCase.concat(lowerCase, specChar);
    console.log(userChoice);

   } else if (upperCase && number && specChar) {
    var userChoice = upperCase.concat(number, specChar);
    console.log(userChoice);

   } else if (lowerCase && number && specChar) {
    var userChoice = lowerCase.concat(number, specChar);
    console.log(userChoice);

   } else if (lowerCase && number) {
    var userChoice = lowerCase.concat(number);
    console.log(userChoice);

   } else if (lowerCase && specChar) {
    var userChoice = lowerCase.concat(specChar);
    console.log(userChoice);

   } else if (number && specChar) {
    var userChoice = number.concat(specChar);
    console.log(userChoice);

   } else if (upperCase) {
    var userChoice = upper;
    console.log(userChoice);

   } else if (lowerCase) {
    var userChoice = lower;
    console.log(userChoice);

   } else if (number) {
    var userChoice = number;
    console.log(userChoice);

   } else if (specChar) {
    var userChoice = specChar;
    console.log(userChoice);

   }

   var result = ""

   for (var i = 0; i < length; i+=1) {
    result += userChoice[Math.floor(Math.random() * userChoice.length)];

    return result;
   }
   
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
