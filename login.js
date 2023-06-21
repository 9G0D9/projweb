let err = document.getElementById("error");
function erreur() {
  alert("You need to sign in First");
}

let checked2 = false;
function store() {
  let name = document.getElementById("Username");
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let pw = document.getElementById("psw");
  let mail = document.getElementById("email");
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;
  let emailpattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (lname.value.length == 0) {
    alert("Please fill in Last name");
  } else if (fname.value.length == 0) {
    alert("Please fill in First name");
  } else if (name.value.length == 0) {
    alert("Please fill in username");
  } else if (mail.value.length == 0) {
    alert("Please fill in email ");
  } else if (!emailpattern.test(mail.value)) {
    alert("wrong email format");
  } else if (pw.value.length == 0) {
    alert("Please fill in password");
  } else if (pw.value.length < 8) {
    alert("Min of 8");
  } else if (!pw.value.match(numbers)) {
    alert("please add 1 number");
  } else if (!pw.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!pw.value.match(lowerCaseLetters)) {
    alert("please add 1 lovercase letter");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("psw", pw.value);
    localStorage.setItem("fname", fname.value);
    localStorage.setItem("lname", lname.value);
    localStorage.setItem("mail", mail.value);
    localStorage.setItem("games", 0);
    localStorage.setItem("w", 0);
    localStorage.setItem("l", 0);

    checked2 = true;
    alert("Your account has been created");
  }
}

let checked = false;

//checking
function check() {
  let storedName = localStorage.getItem("name");
  let storedPw = localStorage.getItem("psw");

  let userName = document.getElementById("userName");
  let userPw = document.getElementById("userPw");
  let userRemember = document.getElementById("rememberMe");

  if (userName.value == storedName && userPw.value == storedPw) {
    alert("You are logged in  " + storedName);
    checked = true;
  } else {
    alert("Error on login");
  }
}

function OnSubmitForm() {
  if (checked === true) {
    document.myform.action = "home.html";
  }
  return true;
}

function signup() {
  if (checked2 === true) {
    document.myform.action = "login.html";
  }
  return true;
}
