const btn = document.querySelector(".btn-1");
const quantity = document.querySelector("#quantity");
const hiddentab = document.querySelector(".hidden");

hiddentab.classList.add("inactive");

btn.addEventListener("click",()=>{
    // const firstnameac = quantity.name;
    
    // localStorage.setItem('itemname',JSON.stringify({firstnameac:quantity.name,quantity:quantity.value}));
    localStorage.setItem("assortedcofeee",quantity.name);
    localStorage.setItem("assortedcoffeequantity",quantity.value);
    localStorage.setItem("clickedassortedcoffee",true);
    hiddentab.classList.remove("inactive");
})