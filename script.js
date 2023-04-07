// Assignment Code

var upperCase;
var lowerCase;
var number;
var specChars;
var length;

// Variables that will be used to create arrays based on user selection.
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specChars = ['!','@','#','$','%','^','&','*','(',')','_','+'];

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

   var specs = confirm('Would you like to include special characters?');
   console.log(specs);

   if (!upper && !lower && !number && !specChars) {
    var userChoice = alert('You must choose at least 1 character preference, cannot create password!');
    console.log(userChoice);

   } else if (upper && lower && number && specs) {  //////////////// Why are number and specChar returning as 'True' in console instead of what is in the array? - Because I was using the same variable name as my array above.
    var userChoice = upperCase.concat(lowerCase,numbers,specChars);
    console.log(userChoice);

   } else if (upper && lower && number) {
    var userChoice = upperCase.concat(lowerCase, numbers);
    console.log(userChoice);

   } else if (upper && lower && specs) {
    var userChoice = upperCase.concat(lowerCase, specChars);
    console.log(userChoice);

   } else if (upper && number && specs) {
    var userChoice = upperCase.concat(numbers, specChars);
    console.log(userChoice);

   } else if (lower && number && specs) {
    var userChoice = lowerCase.concat(numbers, specChars);
    console.log(userChoice);

   } else if (lower && number) {
    var userChoice = lowerCase.concat(numbers);
    console.log(userChoice);
    

   } else if (lower && specs) {
    var userChoice = lowerCase.concat(specChars);
    console.log(userChoice);

   } else if (number && specs) {
    var userChoice = numbers.concat(specChars);
    console.log(userChoice);

   } else if (upper) {
    var userChoice = upper;
    console.log(userChoice);

   } else if (lower) {
    var userChoice = lower;
    console.log(userChoice);

   } else if (number) {
    var userChoice = number;
    console.log(userChoice);

   } else if (specs) {
    var userChoice = specChars;
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
