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


//!  -------------------------

// let shop = document.getElementById("shop");
// let fetchdata = async function () {
//     let res = await fetch("https://fakestoreapi.com/products")
//     data = await res.json()
//     return data;
// }
// fetchdata();
// console.log(fetchdata());
// fetchdata().then((d) => {
//     console.log(d);

//     let generateShop = () => {
//         return (shop.innerHTML = d.map((item) => {
//             return `<div id=product-id-${item.id} class="item">
//             <div class="img-box"><img src="${item.image}" alt=""></div>
//             <div class="details">
//                 <h3>${item.title}</h3>
//                 <p>${item.description.slice(0, 100)}</p>
//                 <p>Rating: ${item.rating.rate}/5 <i class="bi bi-star"></i></p>
//                 <div class="price-quantity">
//                     <h2>&#8377; ${item.price}</h2>
//                     <div class="buttons">
//                         <i onclick="decrement(${item.id})" class="bi bi-dash-square"></i>
//                         <div id=${item.id} class="quantity">0</div>
//                         <i onclick="increment(${item.id})"  class="bi bi-plus-square"></i>
//                     </div>
//                 </div>
//             </div>
//         </div>`
//         }).join(""))
//     }
//     generateShop()
// })