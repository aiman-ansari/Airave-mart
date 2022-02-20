const email = document.querySelector('#email');
const btnLogin =document.querySelector('#btn-login');
const error = document.querySelector('#error');
const checkbox =document.querySelector('#checkbox');
const password = document.querySelector('#password');
btnLogin.addEventListener('click',()=>{
    if(email.value=='' || password.value=='' || checkbox.value=='' ){
        error.innerText = "Please fill all the field";
        error.style.color = "var(--danger-text-color)";
        error.style.marginBottom = "1rem";
        error.style.fontSize = "0.7rem"
    }
    else if(password.value.length <6){
        error.innerText = "Password should be greater than 6 character."
        error.style.color = "var(--danger-text-color)"
    }
    else {
        error.style.display = "none"
    }
})