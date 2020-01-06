function phonenumber(uphone)
{
  var phoneno = /^\d{10}$/;
  if(uphone.value.match(phoneno))
  {
      return true;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }