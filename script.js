// Assignment code here
// Function to generate a secure password
function generatePassword() {
  // Prompt for password length
  var passwordLength = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));

  // Validate password length
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    passwordLength = parseInt(prompt("Enter the password length (between 8 and 128 characters):"));
  }

  // Confirm inclusion of character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("Please select at least one character type.");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  // Define character sets based on selected criteria
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericChars = '0123456789';
  var specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?/';

  // Combine character sets based on selected criteria
  var allChars = '';
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numericChars;
  if (includeSpecial) allChars += specialChars;

  // Generate the password
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  // Display or write the password
  return password;
  //alert("Your generated password is:\n" + password);
  // Alternatively, you can write the password to the page or use any other desired method.
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Call the function when the button is clicked (you can use this in an HTML button click event)
// Example: <button onclick="generatePassword()">Generate Password</button>
// Write password to the #password input
function  writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


