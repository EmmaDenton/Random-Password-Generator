
  function generatePassword() {

  var length = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));

  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid input! Enter a password length between 8 and 128 characters:"));
  }
  
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  var chars = "";
  if (includeLowercase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    chars += "1234567890";
  }
  if (includeSpecial) {
    chars += "!#$%&()*+-/:;<+>?@[/]^_{|}~";
  }
  
  if (chars === "") {
    alert("You must include at least one character type!");
    return "";
  }
  
  var password = "";
  
  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * chars.length);
    password += chars.charAt(random);
  }
  
  return password;
  }
  
  var generateBtn = document.querySelector("#generate");
  
 function writePassword() {
   var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  generateBtn.addEventListener("click", writePassword);