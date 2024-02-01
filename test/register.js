function store() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var userData = {
    username: username,
    email: email,
    password: password
  };

  localStorage.setItem('userData', JSON.stringify(userData));
  alert("Successfull Register!");
  window.location.href='login.html'

}