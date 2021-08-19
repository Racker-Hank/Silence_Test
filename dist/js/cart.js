if(localStorage.getItem('textValues') == null){
    var cart = [];
}else{
    cart =  JSON.parse(localStorage.getItem('textValues'));
}

function addHeadphonetoCart(){
    headphones.forEach(hp => {
        if(headphoneName.childNodes[0].data === hp.name) {
            cart.push(hp);
        }
    })
    localStorage.setItem('textValues', JSON.stringify(cart));
    itemsNumber.innerHTML = cart.length;
}

let headphoneName = document.getElementById('headphone_name');
let itemsNumber = document.querySelector('.items-number');

// console.log(headphoneName.childNodes[0].data);
itemsNumber.innerHTML = cart.length;

// function addHeadphonetoCart() {
//     headphones.forEach(hp => {
//         if(headphoneName.childNodes[0].data === hp.name) {
//             cart.push(hp);
//         }
//     })
//     console.log(cart);
//     itemsNumber.innerHTML = cart.length;

// }


// itemsNumber.style.background = "#E08E45";