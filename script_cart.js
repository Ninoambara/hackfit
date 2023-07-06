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

function createCardCart(cnt,input){
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

    cardName.innerText = db[input[0]][input[1]]['nama'];
    cardPrice.innerText =`Rp. ${db[input[0]][input[1]]['harga']}`;
    imgCart.src = db[input[0]][input[1]]['foto']
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
    spanNum.id = `jum-${cnt}`
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

}

function createCardIklan(input){
    let cardDiv = document.createElement("div")
    let cardBody1 = document.createElement("div")
    let cardName = document.createElement("h4")
    let cardPrice = document.createElement("p")
    let imgDiv = document.createElement("div")
    let imgCart = document.createElement("img")
    let footDiv = document.createElement("div")
    let butCol = document.createElement("div")
    let addBut = document.createElement("button")
    

    cardName.innerText = db[input[0]][input[1]]['nama'];
    cardPrice.innerText =`Rp. ${db[input[0]][input[1]]['harga']}`;
    imgCart.src = db[input[0]][input[1]]['foto']
    addBut.innerText = "Tambah"
    addBut.addEventListener("click",function(){homePage()})
    
    cardDiv.className="card iklan"
    cardDiv.style.width="100px"
    cardBody1.className = "card-body"
    cardName.className = "card-title"
    cardPrice.className = "card-text"
    imgDiv.className = "bg-image hover-overlay ripple rounded-0"
    imgCart.className = "img-fluid"
    footDiv.className = "card-footer"
    butCol.className = "col"
    addBut.className = "btn btn-link btn-block"

   
    const base = document.getElementById('iklan-container');
    butCol.appendChild(addBut)
    footDiv.appendChild(butCol)
    imgDiv.appendChild(imgCart)
    cardBody1.appendChild(cardName)
    cardBody1.appendChild(cardPrice)
    cardDiv.appendChild(cardBody1)
    cardDiv.appendChild(imgDiv)
    cardDiv.appendChild(footDiv)
    base.appendChild(cardDiv)
}

let cart = {"suplemen":{"creatine":1},"alat":{"barbel":1,"matras":0,"skipping":1}} //tes
let count = 0;
//generate cart item
for (let i in cart){
    for (let j in cart[i]){
        if (cart[i][j] >=1 ){
            createCardCart(count,[i,j])
            count++;
        }
    }
    
}

//generate iklan
for (let i of Object.keys(db)){
    for (let j of Object.keys(db[i])){
        if (!cart[i][j] || cart[i][j] <=0 ){
            createCardIklan([i,j])
        }
    }
}
