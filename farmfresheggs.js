const btn = document.querySelector(".btn-1");
const quantity = document.querySelector("#quantity");
const hiddentab = document.querySelector(".hidden");

hiddentab.classList.add("inactive");
btn.addEventListener("click",()=>{
    // const firstnameac = quantity.name;
    
    // localStorage.setItem('itemname',JSON.stringify({firstnameac:quantity.name,quantity:quantity.value}));
    localStorage.setItem("freshegg",quantity.name);
    localStorage.setItem("fresheggquantity",quantity.value);
    localStorage.setItem("clickfresheggquantity",true);
    hiddentab.classList.remove("inactive");
})