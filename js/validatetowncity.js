function alphanumeric(tcity)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(tcity.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
tcity.focus();
return false;
}
}