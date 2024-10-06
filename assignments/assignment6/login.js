window.onload = loginLoad;
function loginLoad() {
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin() {
    var form = document.forms["myLogin"];
    var username = form["username"].value;
    var password = form["password"].value;
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    var existingErrorMsg = document.getElementById("errormsg");
    if (existingErrorMsg) {
        existingErrorMsg.parentNode.removeChild(existingErrorMsg);
    }

    var errorMsg = "";

    if (username === storedUsername && password === storedPassword) {
        errorMsg = "เข้าสู่ระบบสำเร็จ";
        alert("เข้าสู่ระบบสำเร็จ");
        displayErrorMessage(errorMsg);
        return true;
    } else {
        errorMsg = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        displayErrorMessage(errorMsg);
        return false;
    }
}

function displayErrorMessage(message) {
    var fieldset = document.getElementsByTagName("fieldset")[0];
    var legend = fieldset.getElementsByTagName("legend")[0];

    var errorSpan = document.createElement("span");
    errorSpan.id = "errormsg";
    errorSpan.style.color = "red";
    errorSpan.textContent = message;

    legend.parentNode.insertBefore(errorSpan, legend.nextSibling);
}