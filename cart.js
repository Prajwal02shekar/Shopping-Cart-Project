let label = document.getElementById('label')
let ShoppingCart = document.getElementById("shopping-cart")

let basket = JSON.parse(localStorage.getItem("data")) || [];


let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();



let fetchdata = async function () {
    let res = await fetch("https://fakestoreapi.com/products");
    // let res=await fetch("https://api.escuelajs.co/api/v1/products")
    let data = await res.json();
    return data;
};

fetchdata().then((d) => {
    console.log(d);

    let generateCartItems = () => {
        if (basket.length !== 0) {
            return ShoppingCart.innerHTML = basket.map((x) => {
                let { id, item, title, price } = x
                let search = d.find((y) => y.id === id) || []
                return `
                <div class="cart-item">
                    <img width="100" src=${search.image} alt=""/>
                    <div class="details">
                        <div class="title-price-x">
                            <h4 class="title-price">
                            <p>${search.title.slice(0, 12)}</p>
                            <p class="cart-item-price">&#8377; ${search.price}</p>
                            <i class="bi bi-x-lg"></i>
                            </h4>
                            
                        </div> 

                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-square"></i>
                            <div id="${id}" class="quantity">${item}</div>
                            <i onclick="increment(${id})" class="bi bi-plus-square"></i>
                       </div>

                        <h3></h3>


                     </div>
                </div>
                `
            }).join("");
        }
        else {
            ShoppingCart.innerHTML = ``
            label.innerHTML = `
            <h2>Cart is Empty</h2>
            <a href="home.html">
            <button class="HomeBtn">Back to Home</button></a>
            `
        }
    }
    generateCartItems()
});
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    console.log(basket);
    update(selectedItem);
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(selectedItem);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems()
    console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    let quantityElement = document.getElementById(id);

    if (quantityElement) {
        quantityElement.innerHTML = search.item;
        calculation();
    } else {
        console.error(`Element with ID ${id} not found`);
    }
};