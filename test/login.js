function check() {
  var loginUsername = document.getElementById('loginUsername').value; 
  var loginPassword = document.getElementById('loginPassword').value; 
  var storedUserData = localStorage.getItem('userData');


if (storedUserData) {
  var userData = JSON.parse(storedUserData);
  
  if (loginUsername ===userData.username && loginPassword=== userData.password) {
    alert ("Login Successfull " + userData.username);
  }else {
    alert ("Invalid Username or Password");
  }
  
}else {
  alert("No UserData Found, Pleas Register");
}





}