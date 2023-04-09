  //Following function gets values of the username and password fields and checks to see if they match a hard coded username and password 
  function authenticate(){
  var authorised;
    
  //get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //check to see if the password and username match
  if(username.toLowerCase() == "sander" && password == "1234"){
    authorised = true;
  }else{ // username or password do not match
    authorised = false;
    document.getElementById("incorrectPass").style.visibility = "visible";
  }
//return result
return authorised;
}