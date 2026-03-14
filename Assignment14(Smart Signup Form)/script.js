document.getElementById("signupForm").addEventListener("submit", function(e){

  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  let successMessage = document.getElementById("successMessage");

  nameError.textContent="";
  emailError.textContent="";
  passwordError.textContent="";
  successMessage.textContent="";

  let valid = true;

  if(name.length < 3){
    nameError.textContent="Name must be at least 3 characters";
    valid=false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(!email.match(emailPattern)){
    emailError.textContent="Enter a valid email";
    valid=false;
  }

  if(password.length < 6){
    passwordError.textContent="Password must be at least 6 characters";
    valid=false;
  }

  if(valid){
    successMessage.textContent="Signup successful!";
  }

});