// let loginBtn = document.querySelector("button")
// let userName = localStorage.getItem("user-name")
// loginBtn.innerHTML = `Logged in as ${userName}`


let shop = document.getElementById("shop");
let fetchdata = async function () {
    let res = await fetch("https://fakestoreapi.com/products")
    data = await res.json()
    return data;
}
fetchdata();
console.log(fetchdata());
fetchdata().then((d) => {
    console.log(d);

    let generateShop = () => {
        return (shop.innerHTML = d.map((item) => {
            return `<div id=product-id-${item.id} class="item">
            <div class="img-box"><img src="${item.image}" alt=""></div>
            <div class="details">
                <h3>${item.title}</h3>
                <p>${item.description.slice(0, 100)}</p>
                <p>Rating: ${item.rating.rate}/5 <i class="bi bi-star"></i></p>
                <div class="price-quantity">
                    <h2>&#8377; ${item.price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${item.id})" class="bi bi-dash-square"></i>
                        <div id=${item.id} class="quantity">0</div>
                        <i onclick="increment(${item.id})"  class="bi bi-plus-square"></i>
                    </div>
                </div>
            </div>
        </div>`
        }).join(""))
    }
    generateShop()
})


let basket = {
    id:"abb",
    item:1
}


let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    console.log(basket);
    update(selectedItem.id);
   
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    // console.log(basket);
    
};
let update = (id) => {
    console.log(id);

    let search = basket.find((x) => x.id === id);
    // console.log(search.item);

   
};



