

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    console.log("valid")
    return (true)
  }
    console.log("You have entered an invalid email address!")
    return (false)
}

function CheckPassword(inputtxt) 
{ 
if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(inputtxt)) 
{ 
console.log('Vaild')
return true;
}
else
{ 
console.log('Enter Correct Password ')
return false;
}
}







function CheckPhoneNumber(inputtxt) 
{ 
if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(inputtxt)) 
{ 
console.log('Vaild')
return true;
}
else
{ 
console.log('Enter Correct Phone Number')
return false;
}
}


export{CheckPassword,CheckPhoneNumber,ValidateEmail}