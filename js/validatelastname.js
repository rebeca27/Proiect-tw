function fname_validation(lname,mx,my)
{
var lname_len = uid.value.length;
if (lname_len == 0 || lname_len >= my || lname_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
lname.focus();
return false;
}
return true;
}