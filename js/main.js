var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")
var signupRePassword = document.getElementById("signupRePassword")
var result = document.getElementById("result")
var btn = document.querySelector('.btn')

btn.addEventListener("click", function(e){
    e.preventDefault()
})

btn.addEventListener("click", signUp)
var signupData = []





function signUp(){
    var signUp = {
        name : signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    }
    // check all inputs have values or empty
    if(signupName.value == "" || signupEmail.value == "" || signupPassword.value == "" || signupRePassword.value == ""){
        result.innerHTML = '<span class="text-danger">All inputs is required</span>'
    }

    console.log(signUp)
}