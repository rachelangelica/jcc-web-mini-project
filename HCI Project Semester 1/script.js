function validateForm(event){
    event.preventDefault()
    regisForm = document.getElementById("regisForm")
    username = document.getElementById("username")
    email = document.getElementById("email")
    password = document.getElementById("password")
    confirmPassword = document.getElementById("confirm")
    age = document.getElementById("age")
    male = document.getElementById("male")
    female = document.getElementById("female")
    agree = document.getElementById("agree")
    error = document.getElementById("error")

    if(username.value.length < 5){
        error.innerHTML = "Username must be at least 5 characters!"
        alert("Username must be at least 5 characters!")
    }
    else if(!email.value.endsWith("@gmail.com")){
        error.innerHTML = "Email must ends with @gmail.com"
        alert("Email must ends with @gmail.com")
    }
    else if(password.value != confirmPassword.value){
        error.innerHTML = "Password does'nt match!"
        alert("Password does'nt match!")
    }
    else if(age.value < 18){
        error.innerHTML = "You must be at least 18 years old to register!"
        alert("You must be at least 18 years old to register!")
    }
    else if(!(male.checked || female.checked)){
        error.innerHTML = "Gender must be picked!"
        alert("Gender must be picked!")
    }
    else if(!agree.checked){
        error.innerHTML = "You must agree with Terms & Conditions"
        alert("You must agree with Terms & Conditions")
    }
    else if(!isAlphanumeric(password.value)){
        error.innerHTML = "Password must be alphanumeric"
        alert("Password must be alphanumeric")
    }
    else{
        alert("Successful!") 
        regisForm.submit()
    }

    function isAlphanumeric(pw){
        var num = false
        var alpha = false
        for(let i = 0; i < pw.length; i++){
            if(!isNaN(pw[i])){
                //isNaN = not a number
                num = true
            }
            else{
                alpha = true
            }
            if(num && alpha ){
                return true
            }
        }
        return false
    }
}