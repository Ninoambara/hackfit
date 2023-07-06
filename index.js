let show = 0;
let body = document.getElementById('body');
var modal = document.querySelector("#ModalCart");
let total = 0;
let db = [{
    category: [{
            id: 1,
            name: "alat",
        },
        {
            id: 2,
            name: "suplement"
        }
    ],
    product: [{
            id: "1",
            category_id: 1,
            name: "Barbel",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 100000,
            image: "pic/barbel.webp",
        },
        {
            id: "2",
            category_id: 1,
            name: "Matras",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 200000,
            image: "pic/matras.webp",
        },
        {
            id: "3",
            category_id: 1,
            name: "Skipping",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 300000,
            image: "pic/skipping.webp",
        },
        {
            id: "4",
            category_id: 1,
            name: "Treadmil",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 700000,
            image: "pic/treadmil.webp",
        },
        {
            id: "5",
            category_id: 1,
            name: "Static bicycle",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 100000,
            image: "pic/sepeda.webp",
        },
        {
            id: "6",
            category_id: 1,
            name: "Gym ball",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 100000,
            image: "pic/gymball.jpg",
        },
        {
            id: "7",
            category_id: 2,
            name: "Evomass",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 100000,
            image: "pic/f7d55b7c0b6d4431e67477312f4e0f85.png",
        },
        {
            id: "8",
            category_id: 2,
            name: "Whey",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 100000,
            image: "pic/suplemen.jpg",
        },
        {
            id: "9",
            category_id: 2,
            name: "Creatine",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 100000,
            image: "pic/creatine.jpg",
        },
        {
            id: "10",
            category_id: 2,
            name: "Met-rx",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 100000,
            image: "pic/metrx.jpg",
        },
        {
            id: "11",
            category_id: 2,
            name: "Banana",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 100000,
            image: "pic/pisang3.jpg",
        },
        {
            id: "12",
            category_id: 2,
            name: "Chicken",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor elit",
            price: 100000,
            image: "pic/dada.jpg",
        },

    ]
}];
let cart = new Array;


window.onload = function () {
    // let container = document.getElementsByClassName("product");
    let container_alat = document.querySelector(".list_alat");
    let container_suplement = document.querySelector(".list_suplement");
    let product = db[0]['product'];
    for (let i in product) {
        let data = product[i];
        if (data.category_id == 1) {
            container_alat.innerHTML +=
                `<div class="col-md-6 col-sm-6 col-xl-2 p-0">
                    <div class="card content-item kategori1">
                        <img src="` + data.image + `" class="card-img-top" alt="Card Image">
                        <div class="card-body">
                            <h5 class="card-title">` + data.name + `</h5>
                            <p class="card-text">` + data.description + `</p>
                            <p class="card-text">Rp ` + data.price + `</p>
                            <button class="btn_add_cart" onclick="add_cart(` + data.id + `)">Add to Cart</button>
                        </div>
                    </div>
                </div>`
        } else if (data.category_id == 2) {
            container_suplement.innerHTML +=
                `<div class="col-md-6 col-sm-6 col-xl-2 p-0">
                    <div class="card content-item kategori2">
                        <img src="` + data.image + `" class="card-img-top" alt="Card Image">
                        <div class="card-body">
                            <h5 class="card-title">` + data.name + `</h5>
                            <p class="card-text">` + data.description + `</p>
                            <p class="card-text">Rp ` + data.price + `</p>
                            <button class="btn_add_cart btn2" onclick="add_cart(` + data.id + `)">Add to Cart</button>
                        </div>
                    </div>
                </div>`
        }
    }
    
}

document.getElementById("btn_all").onclick = function() {
    const filterBtns = this;
    console.log(filterBtns)
    const contentItems = document.querySelectorAll(".content-item");
    const filter = filterBtns.getAttribute("data-filter");


    filterBtns.classList.remove("active");

    filterBtns.classList.add("active");

    contentItems.forEach(function (item) {
        if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

document.getElementById("btn_sup").onclick = function() {
    const filterBtns = this;
    console.log(filterBtns)
    const contentItems = document.querySelectorAll(".content-item");
    const filter = filterBtns.getAttribute("data-filter");


    filterBtns.classList.remove("active");

    filterBtns.classList.add("active");

    contentItems.forEach(function (item) {
        if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

document.getElementById("btn_alat").onclick = function() {
    const filterBtns = this;
    console.log(filterBtns)
    const contentItems = document.querySelectorAll(".content-item");
    const filter = filterBtns.getAttribute("data-filter");


    filterBtns.classList.remove("active");

    filterBtns.classList.add("active");

    contentItems.forEach(function (item) {
        if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


function runPopup() {
    window.alert("ANDA BELUM MEMESAN BARANG!");

};

function add_cart(id) {
    let product = db[0]['product'];
    let getProduct = product.find(key => key.id == id);
    let img = document.getElementById("img-modal-cart");
    img.setAttribute("src", getProduct.image);
    document.getElementById('nameProduct').innerText = getProduct.name
    document.getElementById('ModalCartTitle').innerText = getProduct.name
    document.getElementById('desProduct').innerText = getProduct.description
    document.getElementById('priceProduct').innerText = "Rp." + getProduct.price
    document.querySelector('.btn-submit-cart').setAttribute('dataid', getProduct.id)
    console.log(getProduct);
    modal.classList.add('content-active')
    modal.style.display = "block";
}

function close_modal() {
    document.querySelector(".stock").value = 0;
    modal.style.display = "none";
}

function addToCart() {
    let product = db[0]['product'];
    let id = document.querySelector('.btn-submit-cart').getAttribute('dataid');
    let stock = document.querySelector(".stock");
    if (stock.value == 0 || stock.value == null || stock.value == "" || stock.value < 0) {
        alert("Quantity tidak boleh kosong atau 0");
        return;
    }
    let getProduct = product.find(key => key.id == id);
    let exist = cart.find((val, index) => {
        if (val.id_product == id) {
            cart[index] = {
                id: cart[index].id,
                id_product: cart[index].id_product,
                stock: parseInt(stock.value.replace(/^0+/, '')) + parseInt(cart[index].stock)
            };
            return true;
        }
    });

    if (typeof exist == "undefined") {
        cart.push({
            id: cart.length + 1,
            id_product: getProduct.id,
            stock: stock.value.replace(/^0+/, '')
        });
    }
    console.log(cart);

    close_modal()
}

function minus() {
    let value = document.querySelector(".stock");
    if (value.value == 0) {
        return;
    }
    value.value--;
}

function plus() {
    let value = document.querySelector(".stock");
    value.value++;
}

function minus_qty(id_cart) {
    let value = document.querySelector("#qty_cart_id_" + id_cart);
    if (value.value == 1) {
        alert('Quantity tidak bisa kurang dari 1')
        return;
    }

    value.value--;
    let getproduct = db[0]['product'];
    let minus = 0;
    cart.find((val, index) => {
        minus = getproduct.find(key => key.id == cart[index].id_product).price;
        if (val.id == id_cart) {
            cart[index] = {
                id: id_cart,
                id_product: cart[index].id_product,
                stock: value.value.replace(/^0+/, '')
            };
            return true;
        }
    });
    total = parseInt(total) - parseInt(minus);
    console.log(total);
    document.querySelector(".total").innerText = "Total : Rp." + total;
}

function plus_qty(id_cart) {
    let value = document.querySelector("#qty_cart_id_" + id_cart);
    value.value++;

    let getproduct = db[0]['product'];
    let plus = 0;
    cart.find((val, index) => {
        plus = getproduct.find(key => key.id == cart[index].id_product).price;
        if (val.id == id_cart) {
            cart[index] = {
                id: id_cart,
                id_product: cart[index].id_product,
                stock: value.value.replace(/^0+/, '')
            };
            return true;
        }
    });
    total = parseInt(total) + parseInt(plus);
    console.log(total);
    document.querySelector(".total").innerText = "Total : Rp." + total;
}

function delete_cart(id_cart) {
    cart.find((val, index) => {
        if (val.id == id_cart) {
            cart.splice(index, 1)
            return true;
        }
    });
    document.getElementById('cart_id_' + id_cart).remove();

}

document.querySelector('.modalCheckout').onclick = function () {
    if (cart.length < 1) {
        alert('Anda belum memesan apapun');
        document.getElementById("modalCheckout").style.display = "none";
        return;
    }
    document.querySelector('.side_close').click();
    document.getElementById("modalCheckout").style.display = "block";
}

document.querySelector(".checkout_close").onclick = function() {
    document.getElementById("modalCheckout").style.display = "none";

}


document.querySelector('.side_modal').onclick = function (event) {
    total = 0;
    let side = document.getElementById("exampleModal");
    side.classList.add('content-active')
    side.style.display = "block";
    let getproduct = db[0]['product'];
    for (let i in cart) {
        let product = getproduct.find(key => key.id == cart[i].id_product);
        total = total + (product.price * cart[i].stock);
        document.querySelector(".product-list").innerHTML += `
            <div class="col-md-12 mt-3" id="cart_id_` + cart[i].id + `">
                <div class="content-item kategori1">
                    <a type="button" class="float-right" onclick="delete_cart(` + cart[i].id + `)"><i class="fa fa-times"></i></a>
                    <div class="d-flex">
                        <img src="` + product.image + `" width="150" alt="Card Image">
                        <div class="card-body mt-5">
                            <h5 class="card-title">` + product.name + `</h5>
                            <p class="card-text">Rp ` + product.price + `</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mx-auto">
                            <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary" onclick="minus_qty(` + cart[i].id + `)" type="button" id="button-addon1">-</button>
                                </div>
                                <input type="number" class="form-control qty" id="qty_cart_id_` + cart[i].id + `" placeholder="Quantity" value="` + cart[i].stock + `" aria-label="Example text with button addon" aria-describedby="button-addon1">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" onclick="plus_qty(` + cart[i].id + `)" type="button" id="button-addon2">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    document.querySelector(".total").innerText = "Total : Rp." + total;
}

document.querySelector('.side_close').onclick = function () {
    let side = document.getElementById("exampleModal");
    document.querySelector(".product-list").innerHTML = ""
    side.style.display = "none";
}

function on() {
    document.getElementById("overlay-front").style.display = "block";
}

function off() {
    document.getElementById("overlay-front").style.display = "none";
}

function submitForm(form)
{
    alert("Terima kasih sudah membeli product kami");
    document.querySelector('.checkout_close').click();

}