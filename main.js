
//todo ------------------------------------------------------
let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let fetchdata = async function () {
    let res = await fetch("https://fakestoreapi.com/products");
    // let res=await fetch("https://api.escuelajs.co/api/v1/products")
    let data = await res.json();
    return data;
};

fetchdata().then((d) => {
    console.log(d);

    let generateShop = () => {
        shop.innerHTML = d.map((item) => {
            let { id, image, title, price,description,ratings} = item;
            let search = basket.find((y) => y.id === id) || [];
            return `<div id=product-id-${id} class="item">
            <div class="img-box"><img src="${image}" alt=""></div>
            <div class="details">
                <h3>${title}</h3>
                <div class="price-quantity">
                    <h2>&#8377; ${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-square"></i>
                        <div id="${id}" class="quantity">${search.item === undefined ? 0 : search.item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-square"></i>
                    </div>
                </div>
            </div>
        </div>`;
        }).join("");
    };
    
    generateShop();
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

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();


