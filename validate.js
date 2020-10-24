function checkForm(){
   var name = forms.weddingform1.name;
   if(name == ""){
        window.alert("Please enter a name!");
        return false;
   }
    var email = forms.weddingform1.email;

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        window.alert("Please enter a valid email!");
        return false;
    }
    var phone = forms.weddingform1.phone;
    
    if(!(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone))){
        window.alert("Please enter a valid phone number");
        return false;
    }

    var guests= forms.weddingform1.guests;
    if(guests<1||guests>200||isNaN(guests)){
        window.alert("Please enter a number between 1 and 200");
        return false;
    }

    return true;
}