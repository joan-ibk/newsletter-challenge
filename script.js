let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("email_error");
let mailRegex = /^[a-zA-Z][a-zA-z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;


function checker() {
    if (emailId.value.match(mailRegex)) {
        errorMsg.style.display = 'none'
        emailId.style.border = '2px solid #2ecc71'
        togglePopup()
    }

    else if (emailId.value == "") {
        errorMsg.style.display = 'none'
        emailId.style.border = '2px solid #d1d3d4'
    }
    else{
        errorMsg.style.display = 'block'
        emailId.style.border = '2px solid #ff2851'
    }
}
 function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
    }
    

