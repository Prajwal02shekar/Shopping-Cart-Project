let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let uname = document.getElementById("Uname").value
    let uid = document.getElementById("Uid").value
    let upwd = document.getElementById("Upwd").value
    console.log(uid, upwd);

    if (uid == "" && upwd == "") {
        alert("Username and Password cannot be empty")
    }
    else if (uid == "") {
        alert("Username cannot be empty")
    }
    else if (upwd == "") {
        alert("password cannot be empty")
    }
    else if (uid !== "" && upwd !== "") {
        localStorage.setItem("user-name", uname)
        localStorage.setItem("user-id", uid)
        localStorage.setItem("user-password", upwd)
        alert("Registration done successfully")
    }
})
// --------SignUp ends here--------

let ele = document.getElementById("login-id")
ele.addEventListener("submit", (e) => {
    e.preventDefault()
    let uid = document.getElementById("userId").value
    let upwd = document.getElementById("userPwd").value
    let uName = localStorage.getItem("user-id")
    let upassword = localStorage.getItem("user-password")
    if (uid == "" || upwd == "") {
        alert("Username and Password cannot be empty")
    }
    else if (uid == "") {
        alert("Username cannot be empty")
    }
    else if (upwd == "") {
        alert("password cannot be empty")
    }
    else if (uid !== uName || upwd !== upassword) {
        alert("Wrong Crenentials")
    }
    else if (uid == uName && upwd == upassword) {
        alert("Successfully logged in")
        open("./index.html")
    }
})

// --------Login ends here---------