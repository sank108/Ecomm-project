const btn = document.querySelector(".btn-1");
const quantity = document.querySelector("#quantity");

btn.addEventListener("click",()=>{
    sessionStorage.setItem("first-name-1",quantity.name);
    sessionStorage.setItem("quantity-1",quantity.value);
    // localStorage.setItem('itemname',JSON.stringify({firstnamehoney:quantity.name,quantity:quantity.value}));

})