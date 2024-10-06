window.onload = pageLoad;
function pageLoad() {
    var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    var form = document.forms["myRegister"];
    var fname = form["firstname"].value;
    var lname = form["lastname"].value;
    var genderElements = form["gender"];
    var gender = "";
    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
    }
    var bday = form["bday"].value;
    var email = form["email"].value;
    var username = form["username"].value;
    var passwordElements = form.querySelectorAll('input[name="password"]');
    var password = passwordElements[0].value;
    var retype_password = passwordElements[1].value;

    var existingErrorMsg = document.getElementById("errormsg");
    if (existingErrorMsg) {
        existingErrorMsg.parentNode.removeChild(existingErrorMsg);
    }

    var errorMsg = "";

    if (
        fname == "" || lname == "" || gender == "" || bday == "" ||
        email == "" || username == "" || password == "" || retype_password == ""
    ) {
        errorMsg = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
    } else if (password !== retype_password) {
        errorMsg = "password ไม่ตรงกัน";
        alert("password ไม่ตรงกัน");
    }

    if (errorMsg != "") {
        displayErrorMessage(errorMsg);
        return false;
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        displayErrorMessage("ลงทะเบียนสำเร็จ");
        alert("เข้าสู่ระบบสำเร็จ");
        return true;
    }
}

function displayErrorMessage(message) {
    var fieldset = document.getElementsByTagName("fieldset")[0];
    var spans = fieldset.getElementsByTagName("span");
    var requireSpan = null;
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].textContent.trim() === "* require") {
            requireSpan = spans[i];
            break;
        }
    }

    if (requireSpan) {
        var errorSpan = document.createElement("span");
        errorSpan.id = "errormsg";
        errorSpan.style.color = "red";
        errorSpan.textContent = message;

        requireSpan.parentNode.insertBefore(errorSpan, requireSpan.nextSibling);
    }
}