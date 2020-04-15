const submitBtn = document.querySelector('.button-login');
const registerBtn = document.querySelector('.button-register');
const usrName = document.querySelector('.usr-name');
const usrPass = document.querySelector('.usr-pass');

submitBtn.addEventListener('click', submitUsr);
registerBtn.addEventListener('click', registerUsr);

function submitUsr(e){
    e.preventDefault();
    if (usrName.value != '' && usrPass.value != ''){
        //check if there is a record in localstorage
        if (localStorage.getItem(usrName.value) !== null){
            console.log("already in db")
            clearForm();
        }
        //if no record in storage
        else {
            console.log("no user in database please register")
        }
    } else {
    }
}

function registerUsr(e){
    e.preventDefault();
    //checking fullfill form
    if (usrName.value != '' && usrPass.value != ''){
        localStorage.setItem(usrName.value, usrPass.value)
        console.log("data saved you can log in");
        clearForm();
    } else {
    }
}


function clearForm(){
    usrName.value = '';
    usrPass.value = '';
}