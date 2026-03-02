console.log("hello form js")
let homeBtn = document.querySelector("#home")
let cartBtn = document.querySelector("#cart")
let cartScreen = document.querySelector(".cartScreen")
let newCart = [];
let sum = ``

const products = [
    {
        productName: "Apple iPhone 14 Pro",
        newPrice: 1199,
        oldPrice: 1299,
        description: "6.1-inch display, A16 chip.",
        image: "https://picsum.photos/id/1/600/400"
    },
    {
        productName: "Apple iPhone 13",
        newPrice: 799,
        oldPrice: 899,
        description: "Super Retina display, A15 chip.",
        image: "https://picsum.photos/id/20/600/400"
    },
    {
        productName: "Samsung Galaxy S23",
        newPrice: 999,
        oldPrice: 1099,
        description: "Fast performance with Snapdragon.",
        image: "https://picsum.photos/id/30/600/400"
    },
    {
        productName: "Google Pixel 7 Pro",
        newPrice: 899,
        oldPrice: 999,
        description: "Smooth camera performance.",
        image: "https://picsum.photos/id/40/600/400"
    },
    {
        productName: "OnePlus 11",
        newPrice: 699,
        oldPrice: 799,
        description: "120Hz display & fast charging.",
        image: "https://picsum.photos/id/50/600/400"
    },
    {
        productName: "Xiaomi 13 Pro",
        newPrice: 849,
        oldPrice: 949,
        description: "Great camera phone.",
        image: "https://picsum.photos/id/60/600/400"
    },
    {
        productName: "iPhone 12 Mini",
        newPrice: 599,
        oldPrice: 699,
        description: "Compact performance phone.",
        image: "https://picsum.photos/id/70/600/400"
    },
    {
        productName: "Samsung Galaxy Z Flip 5",
        newPrice: 1099,
        oldPrice: 1199,
        description: "Foldable screen phone.",
        image: "https://picsum.photos/id/80/600/400"
    },
    {
        productName: "Nothing Phone (2)",
        newPrice: 649,
        oldPrice: 749,
        description: "Funky transparent design.",
        image: "https://picsum.photos/id/90/600/400"
    },
    {
        productName: "Realme GT Neo 3",
        newPrice: 499,
        oldPrice: 599,
        description: "Fast charging & smooth UI.",
        image: "https://picsum.photos/id/100/600/400"
    }
];

products.forEach(function (dets, idx) {
    // console.log("hii")
    sum = sum + `<div class="card">
                <img src="${dets.image}" alt="Apple iPhone 13">
                <div class="middle1">
                    <h2>${dets.productName}</h2>
                    <hr>
                    <p style="color: rgb(7, 223, 239); opacity: none; font-weight: 900;">${dets.description}</p>
                    <hr>
                    <p >New Price : <span style="color: rgb(7, 239, 15);">${dets.newPrice}</span></p>
                    <p class="oldPrice">Old Price : <span>${dets.oldPrice}</span></p>
                </div>
                <div class="bottom">
                    <button id="${idx}">Add to Cart</button>
                    <button id="remove">Remove</button>
                </div>
            </div>`

    return sum;
})
// console.log(sum)

let section = document.querySelector("section")
section.innerHTML = sum


section.addEventListener("click", function (dets) {

    if (!dets.target.id) {
        return;
    }
    alert(`Do to want to add`)

    let cartProd = products.find(function (elem, idx) {
        return dets.target.id == idx;
    })
   
    newCart.push(cartProd)
    renderUi()
})

cartBtn.addEventListener("click", function () {
    cartScreen.style.display = "block";
})
homeBtn.addEventListener("click", function () {
    cartScreen.style.display = "none"
})


function renderUi() {

    let newCartUi = ''
    newCart.forEach(function (dets, idx) {

        newCartUi += `<div class="card">
                <img src="${dets.image}" alt="Apple iPhone 13">
                <div class="middle1">
                    <h2>${dets.productName}</h2>
                    <hr>
                    <p style="color: rgb(7, 223, 239); opacity: none; font-weight: 900;">${dets.description}</p>
                    <hr>
                    <p >New Price : <span style="color: rgb(7, 239, 15);">${dets.newPrice}</span></p>
                    <p class="oldPrice">Old Price : <span>${dets.oldPrice}</span></p>
                </div>
                <div class="bottom">
                    <button onClick = 'deleCart(${idx})'>Remove</button>
                </div>
            </div>`
    })
    cartScreen.innerHTML = newCartUi;
    cartScreen.style.display = "flex"
    cartScreen.style.gap = "10px"
    cartScreen.style.flexWrap = "wrap"

}

function deleCart (id){
    let result= newCart.filter(function(elem,idx){
        return idx !== id
    })
    console.log(id)
    newCart= result;
    renderUi()
    console.log(newCart)
}

