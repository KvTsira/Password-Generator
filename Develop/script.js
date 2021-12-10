// Assignment code here


// Get references to the #generate  (button)
var generateBtn = document.querySelector("#generate");
const lowerCaseCode = myArray(65, 90);
const upperCaseCode = myArray(97, 122);
const numericCode = myArray(48, 57);
const specialCode = myArray(33, 47).concat(
                  myArray(58,64)).concat(
                  myArray(91,96)).concat(
                  myArray(123,126));




//create generatePassowrd function
function generatePassword() {

  //console.log("button is clicked");
  //console.log(specialCode);

  //prompt the user for the length of the password between 8 & 128
  var passwordCharacters = []
  var passwordlength=8
  var blUpper = true
  var blLower = true
  var blSpecial = true
  var blNumeric = true
  //Include Lower case, upper case, numeric & special characters

  //validate the input length and at least one character type is selected
  //generate the password
  var RandCharacters=[];
  //concatinate all the asci codes for the characters
  if (blUpper) {RandCharacters=RandCharacters.concat(upperCaseCode)};
  if (blLower) {RandCharacters=RandCharacters.concat(lowerCaseCode)};
  if (blNumeric) {RandCharacters=RandCharacters.concat(numericCode)};
  if (blSpecial) {RandCharacters=RandCharacters.concat(specialCode)};

  //console.log(RandCharacters);
  //loop through the concatinated characters and create a temp character
  for (var i = 0; i < passwordlength; i++){
    var aCharacter = RandCharacters[Math.floor(Math.random() * RandCharacters.length)]; 
    passwordCharacters.push(aCharacter);
  }

  console.log(passwordCharacters.join());
  console.log(String.fromCharCode(passwordCharacters.join()));

  //console.log(String.fromCharCode(passwordCharacters.join()));
  //var str=String.fromCharCode(passwordCharacters.join());
  //console.log(str);
  //console.log(str.join(''));
  
  //return password

  //return passwordCharacters.join('');
}


//function that creates an array
function myArray(startNo, endNo){
  //create a balnk array
  const tempArray=[]
  //loop from start to end number and add to temp array
  for (var i = startNo; i <= endNo; i++) {
    tempArray.push(i);
  }
  return tempArray
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //writes the password into a screen
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
