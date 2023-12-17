const btn = document.querySelector(".btn-1");
const quantity = document.querySelector("#quantity");

btn.addEventListener("click",()=>{
    // const firstnameac = quantity.name;
    
    // localStorage.setItem('itemname',JSON.stringify({firstnameac:quantity.name,quantity:quantity.value}));
    localStorage.setItem("first-name",quantity.name);
    localStorage.setItem("quantity",quantity.value);
})