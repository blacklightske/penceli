const name = document.getElementById("usename");
const psw = document.getElementById("psword");
const ver1=localStorage.getItem("3")
const ver2=localStorage.getItem("6")
const ver3=localStorage.getItem("7")

function login() {
  console.log(ver1, ver2, ver3);
  name.value == ver1 && psw.value == ver2 ? allow() : Deny();
}
function allow() {
    document.getElementById('nnn').style.color='green'
  document.getElementById("nnn").textContent = `Welcome Back MR. ${ver1}`;
  window.location.href="profile.html"
}

function Deny() {
    document.getElementById('nnn').style.color='red'
  document.getElementById("nnn").textContent = `Wrong username or password!`;
  psw.value=''
  psw.focus()
}

