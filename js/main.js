// var inputs
var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")
var signupRePassword = document.getElementById("signupRePassword")
var result = document.getElementById("result")

var btn = document.querySelector('.btn')

// signup Data Array
var signupData
if(localStorage.getItem('users') === null){ // new user
    signupData = [];
}else{ // get signupData from localStorage
    signupData = JSON.parse(localStorage.getItem('users'))
}

btn.addEventListener("click", function(e){
    e.preventDefault()
})

// ============  Signup page (index) ============
// to accept signup data we have to check three check
    // 01 - check all inputs have values or empty
function checkEmpty(){
    if(signupName.value == "" || signupEmail.value == "" || signupPassword.value == "" || signupRePassword.value == ""){
            return false;
    }
}

    // 02 - check email exist
function checkEmails(){
    for(var i=0; i < signupData.length; i++){
        if(signupEmail.value === signupData[i].email){
            return false;
        }
    }
}

    // 03- Check validate emails
function validEmail(){
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(emailRegex.test(signupEmail.value)){
        return true;
    }
}

function signUp(){
    if(checkEmails() == false){
        result.innerHTML = '<span class="text-danger">email already exists</span>'
    }

    if(validEmail() != true){
        result.innerHTML = '<span class="text-danger">email is not valid</span>'
    }

    if(checkEmpty() == false){
        result.innerHTML = '<span class="text-danger">All inputs is required</span>'
    }

    // store data
    var signUp = {
        name : signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    }
    if(checkEmpty() != false && checkEmails() != false && validEmail() == true){
        signupData.push(signUp)
        localStorage.setItem('users', JSON.stringify(signupData))
        result.innerHTML = '<span class="text-success">Sign Up Success</span>'
    }
}

// ============  login page ============
var loginEmail = document.getElementById("loginEmail")
var loginPassword = document.getElementById("loginPassword")

// check all inputs have values or empty
function checkLoginEmpty(){
    if(loginEmail.value == "" || loginPassword.value == ""){
        return false;
    }
}

function login(){
    if(checkLoginEmpty() == false){
        result.innerHTML = '<span class="text-danger">All inputs is required</span>'
    }else{
        var email = loginEmail.value
        var password = loginPassword.value;
        for(var i =0; i<signupData.length; i++){
            if(signupData[i].email.toLowerCase() == email.toLowerCase() && signupData[i].password == password){
                sessionStorage.setItem('userName', signupData[i].name)
                location.replace('home.html')
            }else{
                result.innerHTML = '<span class="text-danger">incorrect email or password</span>'
            }
        }
    }
}

// ============  Home page ============
var userName = sessionStorage.getItem('userName')
if(userName){
    document.querySelector(".box p").innerHTML = "Welcome "+ userName
}

function logout(){
    sessionStorage.removeItem("userName")
    location.replace('index.html')
}