function check(){
    let fullName=document.getElementById('name').value;
    let phone=document.getElementById('phone').value;
    let mail = document.getElementById('mail').value;
    let zipcode = document.getElementById('zipcode').value;
    let password = document.getElementById('password').value;

    if(phone.length!=10 || isNaN(phone)){
        alert("Phone number should exactly be 10 digits");
        return false;
    }

    if(!mail.endsWith("vitstudent.ac.in")){
        alert("Please use vit email");
        return false;
    }

    if(zipcode.length!=5 || isNaN(zipcode)){
        alert("Zip Code should exactly be 5 digits");
        return false;
    }

    let count=0;

    if(/[~!@#$%^*-_+=\[\]{}\/;:,.?]/.test(password)){
        count++;
    }
    if(/[a-z]/.test(password)){
        count++;
    }
    if(/[A-Z]/.test(password)){
        count++;
    }
    if(/[0-9]/.test(password)){
        count++;
    }

    if(count<3){
        alert("At least 3 of the following: uppercase, lowercase, numeric, or special characters");
        return false;
    }

    if (password.length < 10 || password.length > 100) {
        alert('Password must be between 10 and 100 characters');
        return false;
    }

    let uniquechar=new Set(password);
    if(uniquechar.size<5){
        alert("Password must contain 5 or more unique characters");
        return false;
    }

    return true;

}