//36px o 44px // material // google

//SPA

//dd / MM / yyyy - hh:mm p.m.


let user = document.querySelector(".user-input");
let password = document.querySelector(".password-input");

//this will be for show / hide password button on login page
let showPasswordBtn = document.querySelector(".show-password");
let isPasswordHidden = true;

// 
let userList = [];
let userExist = false;


function User(userName, password, amount){
    this.userName = userName;
    this.password = password;
    this.amount = amount;
    this.transactionList = [];
    this.userId = userList.length++;
};

function TransactionWrapper(userAmount, serviceType, serviceDate, description, userId){
    this.amount = userAmount;
    this.type = serviceType;
    this.transactionDate = serviceDate;
    this.description = description;
    this.userId = userId;
};


// This code is for login
let user = document.querySelector(".user-input");
let password = document.querySelector(".password-input");

let loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", login);

function login() {
    let userValue = user.value;
    let passwordValue = password.value;
    if(userValue=="" || passwordValue =="" ){
        user.style.border = "solid 1px red";
        password.style.border = "solid 1px red";
    }else{
        userList.forEach(user => {
            if(user.userName == userValue && user.password == passwordValue ){
                alert("Bienvenido " + user.userName);
                //userExist = true;
            }
        });
        /*
        if(userExist==false){
            alert("Datos incorrectos");
        }else{
            userExist = false;
        }
        */
        !userExist ? alert("Datos incorrectos"): userExist = false;
    }
};




// this code is to sign up or register
let signUpBtn = document.querySelector("#sign-up");
let amount = document.querySelector(".amount-input");
signUpBtn.addEventListener("click",signUp);


function signUp(){
    let userValue = user.value;
    let userUnique = true;

    userList.forEach(user => {
        if(user.userName == userValue){
            alert("Usuario no valido ");            
            userUnique = false;
        }
    });

    let passwordValue = password.value;
    let amountValue = amount.value;
    
    let user = new User(userValue, passwordValue, amountValue);
    userUnique ? userList.push(user) : alert("crear otro nombre de usuario");//.unshift(user);
};





//this code is to show and hide password on form
showPasswordBtn.addEventListener("click", changePasswordType);

function changePasswordType() {
    if (isPasswordHidden) {
        password.type = "text";
        showPasswordBtn.textContent = "Ocultar";
        isPasswordHidden = false;
    } else {
        password.type = "password";
        showPasswordBtn.textContent = "Mostrar";
        isPasswordHidden = true;
    }
};


//This is the code to add a transaction
let serviceType = document.querySelector(".user-input");
let serviceAmount = document.querySelector(".service-amount-input");
let serviceDescription = document.querySelector(".description-input");

let transactionBtn = document.querySelector("#login");
transactionBtn.addEventListener("click", transact);

function transact() {
    let transactUserValue = user.value;
    let transactPasswordValue = password.value;
    let transactServiceType = serviceType.value;
    let transactServiceAmount = serviceAmount.value;
    let transactServiceDescription = serviceDescription.value;
    let transactDate = new Date();
    let successful = true;
    

    
    userList.forEach(user => {
        if(user.userName == transactUserValue && user.password == transactPasswordValue ){            
            successful = user.amount >= transactServiceAmount ? true : false;
            if (successful) {
                let transactionWrapper = new TransactionWrapper(transactServiceAmount, transactServiceType, transactDate, transactServiceDescription, user.userId);
                user.transactionList.push(transactionWrapper);
                alert("Transaccion exitosa");
            } else {
                alert("Transaccion no realizado");
            }            
            
        }
    });

};



