const passwordBox=document.getElementById("password");
const length=10;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const symbols="!@#$%^&*()_/?";
const numbers="1234567890";
const allChars=upperCase + lowerCase +numbers + symbols;

function createPassword(){
  let password ="";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];

  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

  password += symbols[Math.floor(Math.random() * symbols.length)];

  password += numbers[Math.floor(Math.random() * numbers.length)];

  while(length >password.length){
      password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value=password;
}

function copyPassword(){
  passwordBox.select();
  document.execCommand("copy");
}