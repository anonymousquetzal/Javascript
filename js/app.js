//36px o 44px // material // google

//SPA

let password = document.querySelector(".password-input");
let showPasswordBtn = document.querySelector(".show-password");
let isPasswordHidden = true;

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
}