function checkemail() {
    let email = document.getElementById("email").value;
    let etxt = document.getElementById("emailtxt");

  
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        etxt.textContent = "Invalid email format";
    } else {
        etxt.textContent = "";
    }
}

function checkpass() {
    let password = document.getElementById("password").value;
    let ptxt = document.getElementById("passtxt");

    let upper = /[A-Z]/.test(password);
    let lower = /[a-z]/.test(password);
    let number = /[0-9]/.test(password);
    let special = /[~!@#$%^&*()]/.test(password);

    if (!upper || !lower || !number || !special || password.length < 8) {
        ptxt.textContent = "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.";
    } else {
        ptxt.textContent = "";
    }
}

function checkphn() {
    let phone = document.getElementById("phone").value;
    let ptxt = document.getElementById("phntxt");

    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
        ptxt.textContent = "Phone number must be 10 digits";
    } else {
        ptxt.textContent = "";
    }
}