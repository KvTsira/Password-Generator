// Assignment code here


// Get references to the #generate  (button)
var generateBtn = document.querySelector("#generate");

//use ASCII codes to build the array of character codes
const lowerCaseCode = myArray(97, 122);
const upperCaseCode = myArray(65, 90);
const numericCode = myArray(48, 57);
const specialCode = myArray(33, 47).concat(
                  myArray(58,64)).concat(
                  myArray(91,96)).concat(
                  myArray(123,126));


//write functions to get random values by type
function getRandomNumber(){
  return String.fromCharCode(numericCode[Math.floor(Math.random() * numericCode.length)]); 
}

function getRandomLower(){
  return String.fromCharCode(lowerCaseCode[Math.floor(Math.random() * lowerCaseCode.length)]); 
}

function getRandomUpper(){
  return String.fromCharCode(upperCaseCode[Math.floor(Math.random() * upperCaseCode.length)]); 
}

function getRandomSpecial(){
  return String.fromCharCode(specialCode[Math.floor(Math.random() * specialCode.length)]); 
}


//validate the integer input
function getInteger(){
  while(true){   	  
    let input = prompt("Input number: ");
    input=parseInt(input);
    if (isNaN(input))
      {
      alert("The input cannot be parsed to a number");
      }
    else
      {
      if (input == 0)
        {
        alert("The number is zero");
        }
      else if (input < 8) {
        alert("The number cannot be less than 8");
      }
      else if (input > 128) {
        alert("The number cannot be more than 128");
      }
      else{
        break;
      }
      } 
    }       
}

//create generatePassowrd function
function generatePassword() {

  //get length and types
  var generatedPassword = '';
  var passwordlength= getInteger();
  var blUpper = confirm ("Would you like to include upper case characters?")
  var blLower = confirm ("Would you like to include lower case characters?")
  var blSpecial = confirm ("Would you like to include special case characters?")
  var blNumeric = confirm ("Would you like to include Numbers?")
  
  //get how many types are needed
  var iTypes = 0;
  if (blUpper) {iTypes++};
  if (blLower) {iTypes++};
  if (blSpecial) {iTypes++};
  if (blNumeric) {iTypes++};

  //if none of the types are selected, return empty string
  if(iTypes === 0) {
    return '';
  }

  //generate password
  for(var i=0; i < passwordlength; i += iTypes) {
    if (blUpper) {
      generatedPassword += getRandomUpper();
    }

    if (blLower) {
      generatedPassword += getRandomLower();
    }

    if (blNumeric) {
      generatedPassword += getRandomNumber();
    }

    if (blSpecial) {
      generatedPassword += getRandomSpecial();
    }
  }

  console.log(generatedPassword);

  return generatedPassword;
  
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
