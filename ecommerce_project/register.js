console.log(document.getElementById("register_form"));
const registerName = document.getElementById("register_name").value;
console.log(registerName)
const registerEmail = document.getElementById("register_email").value;
console.log(registerEmail)
const registerPass = document.getElementById("register_pass").value;
const registerConfirmPass = document.getElementById("registe_confirm_pass").value;
const registerBtn = document.getElementById("register_btn");

// const loginBtn = document.getElementById("login_btn");
// const loginEmail = document.getElementById("login-email").value;
// const loginPass = document.getElementById("login_pass").value;
// const checkPass = document.getElementById("checkpass");

registerBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(registerEmail)
    console.log("Yes")
    console.log(registerName, registerEmail , registerPass, registerConfirmPass);
  // localStorage.setItem("data", JSON.stringify({registerName, registerEmail, registerPass, registerConfirmPass}));
  var user = {
    name: registerName,
    email: registerEmail,
    password: registerPass,
    confirmPassword: registerConfirmPass
  };
  localStorage.setItem("user", JSON.stringify(user));
  // window.location.href="www.google.com";

});


// loginBtn.addEventListener("click", (e)=>{
//     e.preventDefault();
//   const userData=JSON.parse(localStorage.getItem("data"));
//   if(loginEmail == userData.registerEmail && loginPass == userData.registerPass){
//     window.location.href="www.google.com";
//   }
//   else{
//     checkPass.innerText = "Wrong Password";
//   }
// })