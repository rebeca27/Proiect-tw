function fname_validation(fname,mx,my)
{
var fname_len = uid.value.length;
if (fname_len == 0 || fname_len >= my || fname_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
fname.focus();
return false;
}
return true;
}