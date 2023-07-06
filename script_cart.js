// database name is db, the var name is reserved

// go back to index page

function homePage(){
    window.location.href="index.html";
}

// go to the payment page
function payPage(){
    window.location.href="#"
}

//create card for list of item
let cart = [["alat","barbel"],["alat","matras"],["suplemen","whey"]]
let count = 0;
for (let i of cart){
    let cardDiv = document.createElement("div")
    let cardBody1 = document.createElement("div")
    let cardName = document.createElement("h4")
    let cardPrice = document.createElement("p")
    let imgDiv = document.createElement("div")
    let imgCart = document.createElement("img")
    let cardBody2 = document.createElement("div")
    let spanText = document.createElement("span")
    let spanNum = document.createElement("span")
    let footDiv = document.createElement("div")
    let rowDiv = document.createElement("div")
    let minDiv = document.createElement("div")
    let butMin = document.createElement("button")
    let plusDiv = document.createElement("div")
    let butPlus = document.createElement("button")

    cardName.innerText = db[i[0]][i[1]]['nama'];
    cardPrice.innerText =`Rp. ${db[i[0]][i[1]]['harga']}`;
    imgCart.src = db[i[0]][i[1]]['foto']
    spanText.innerText = "Jumlah: "
    spanNum.innerText = 1; //mesti bisa diupdate dengan button
    butMin.innerText = "-";
    butPlus.innerText = "+";

    cardDiv.className="card"
    cardDiv.style.width="100px"
    cardBody1.className = "card-body"
    cardName.className = "card-title"
    cardPrice.className = "card-text"
    imgDiv.className = "bg-image hover-overlay ripple rounded-0"
    imgCart.className = "img-fluid"
    cardBody2.className = "card-body"
    spanNum.id = `jum-${count}`
    footDiv.className = "card-footer"
    rowDiv.className ="row"
    minDiv.className = "col-sm-6 pr-0"
    butMin.className = "btn btn-link btn-block"
    plusDiv.className = "col-sm-6 pl-0"
    butPlus.className = "btn btn-link btn-block"

    const base = document.getElementById('cart-container');
    minDiv.appendChild(butMin)
    plusDiv.appendChild(butPlus)
    rowDiv.appendChild(minDiv)
    rowDiv.appendChild(plusDiv)
    footDiv.appendChild(rowDiv)
    cardBody2.appendChild(spanText)
    cardBody2.appendChild(spanNum)
    imgDiv.appendChild(imgCart)
    cardBody1.appendChild(cardName)
    cardBody1.appendChild(cardPrice)
    cardDiv.appendChild(cardBody1)
    cardDiv.appendChild(imgDiv)
    cardDiv.appendChild(cardBody2)
    cardDiv.appendChild(footDiv)
    base.appendChild(cardDiv)
    count++
}
