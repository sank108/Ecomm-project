const rangeInput = document.querySelectorAll(".range-input input");
const progress = document.querySelector(".slider .progress1");
const progress1 = document.querySelector(".slider .progress2");
const minmax = document.getElementById("#minmax");
const slider = document.getElementsByClassName('.slider');
const priceInput = document.querySelectorAll(".price-range input");
const activeFilter = document.querySelector(".active-filter");
const pricepara = document.querySelector(".specific-price-para");
const clear = document.querySelector(".clr-btn");
const extractedoil = document.querySelector(".shop-list-items-img-Natural-Extracted-Edible-Oil");
const Assortedcoffee = document.querySelector(".shop-list-items-img-Assorted-coffee");
const CashewButter = document.querySelector(".shop-list-items-img-Cashew-Butter");
const DiabeticCookies = document.querySelector(".shop-list-items-img-Diabetic-Cookies");
const FarmFreshEggs = document.querySelector(".shop-list-items-img-Farm-Fresh-Eggs");
const FreshOrangeJuice = document.querySelector(".shop-list-items-img-Fresh-Orange-Juice");
const FreshOrganicHoney = document.querySelector(".shop-list-items-img-Fresh-Organic-Honey");
const HandSanitizer = document.querySelector(".shop-list-items-img-Hand-Sanitizer");
const HandpickedRedChillies = document.querySelector(".shop-list-items-img-Handpicked-Red-Chillies");
const noproduct = document.querySelector(".noproduct");
const nopara = document.querySelector(".search-results-para1");
const searchlist = document.querySelector(".search-list");
const OrganicFaceScrub = document.querySelector(".shop-list-items-img-Organic-Face-Scrub");
const PulsesFromOrganicFarm = document.querySelector(".shop-list-items-img-Pulses-From-Organic-Farm");
const WheatFromOrganicFarms = document.querySelector(".shop-list-items-img-Wheat-From-Organic-Farms");
// const selectBox = document.querySelector("#sort");
const griditems = document.querySelector(".shop-list-items");
const asimg = document.querySelector(".Assortedcoffee-img");
const shopinput = document.querySelector("#shop-input");
const searchproductsbtn = document.querySelector(".search-products-btn");
const trial = document.querySelector("#trial");
const searchoption = document.querySelector("#searchoption");
const headpara = document.querySelector(".shop-list-header-para1");
const head = document.querySelector(".shop-list-heading");
const para2 = document.querySelector(".shop-list-header-para2");
const para3 = document.querySelector(".shop-list-header-para3");

let priceGap = 10;
// asimg.src = "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-300x300.jpg";
// 
let minVal;
let maxVal;


    rangeInput.forEach(input =>{
        input.addEventListener("input" , (e)=>{
            minVal = parseInt(rangeInput[0].value);
            maxVal = parseInt(rangeInput[1].value);
            // console.log(minVal,maxVal);
            
            if(maxVal - minVal < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal - priceGap;
                }
                else{
                    rangeInput[1].value = minVal + priceGap;
                }
               
            }else{
                // priceInput.value = minVal;
                priceInput[0].value = "£"+ minVal;
                priceInput[1].value = "£"+ maxVal;
    
                
                progress.style.left = ((minVal)/ rangeInput[0].max) *100 + "%";
                progress1.style.left = ((maxVal - 80) / rangeInput[1].max) *100 + "%";
            }
    
            
            minVal = parseInt(rangeInput[0].value);
            maxVal = parseInt(rangeInput[1].value);
            
            if(minVal == 0 && maxVal == 40){
                pricepara.textContent = "No Filter Applied";
            }
            else if(minVal >= 0 && maxVal == 40){
                pricepara.textContent = "Up to £" + minVal;
            }else if(minVal == 0 && maxVal <= 40){
                pricepara.textContent = "Up to £" + maxVal;
            }else if(minVal != 0 && maxVal != 40){
                pricepara.textContent = "Between £" + minVal + " and £" + maxVal;
            }

            // searchoption.classList.add("inactive");
            // headpara.innerHTML = "Home / Grocceries";
            // head.innerHTML = "Grocceries";
            // nopara.innerHTML = "Showing 1–9 of 10 results";
            // shopinput.value = "";

            var products = [
                
                {
                    productName:"shop-list-items-img-Wheat-From-Organic-Farms",
                    price:34
                },

            ]

            var ans = [
                
                {
                    productName:"shop-list-items-img-Wheat-From-Organic-Farms",
                    price:34
                },

            ]


            products.forEach(product =>{
                
                

                let element = document.querySelector("." + product.productName);
                
                console.log(product.price);
                if(product.price <= minVal || product.price >= maxVal) {
                    ans.pop(product.productName);
                    element.classList.add("inactive");
                    if(ans.length == 0){
                        noproduct.classList.add("active");
                        console.log(noproduct.classList);
                        nopara.classList.add("inactive");
                        searchlist.classList.add("inactive");
                    }
                    
                }else if(product.price >= minVal || product.price <= maxVal+1){
                    ans.push(product.productName);
                    element.classList.remove("inactive");
                    if(ans.length > 0){
                        noproduct.classList.remove("active");
                        console.log(noproduct.classList);
                        nopara.classList.remove("inactive");
                        searchlist.classList.remove("inactive");
                        
                        
                    }
                    
                }

                
               
                
        })


    })
});

clear.addEventListener("click",(e) =>{
    if(minVal != 0 || maxVal != 40){
        rangeInput[0].value = 0;
        rangeInput[1].value = 40;
        priceInput[0].value = "£0";
        priceInput[1].value = "£40";
        progress.style.left = 0;
        progress1.style.left = 0;
        pricepara.textContent = "No Filter Applied";
        shopinput.value = "";
        selectBox.options[0].selected = true;
        searchoption.classList.add("inactive");
        headpara.innerHTML = "Home / ";
        para2.innerHTML = "Grocceries / ";
        para3.innerHTML = "Page 2"
        head.innerHTML = "Grocceries";
        nopara.innerHTML = "Showing 10-10 of 10 results";
        
    }
    noproduct.classList.remove("active");
    nopara.classList.remove("inactive");
    searchlist.classList.remove("inactive");
    var products = [
        
        {
            productName:"shop-list-items-img-Wheat-From-Organic-Farms",
            price:34
        },

    ]
    
    
     
    products.forEach(product =>{
        
            

            let element = document.querySelector("." + product.productName);
            
            if(element.classList == "inactive") {
                element.classList.add("inactive");
            }else{
                element.classList.remove("inactive");
            }

            
        
    
      
    
    })
}) 

var selectBox = document.getElementById("sort");
selectBox.options[0].selected = true;


    
var griditem1 = document.querySelector(".shop-list-items-img-Wheat-From-Organic-Farms");
function checkSelectedOption() {

    if(selectBox.value !== "search"){
        searchoption.classList.add("inactive");
        headpara.innerHTML = "Home / ";
        para2.innerHTML = "Grocceries / ";
        para3.innerHTML = "Page 2"
        head.innerHTML = "Grocceries";
        nopara.innerHTML = "Showing 10–10 of 10 results";
        shopinput.value = "";
    }
    if(selectBox.value === "Default sorting"){
       
        griditem1.classList.remove("inactive");
        
        

        griditem1.style.order = 0;
        

        
        
    }else if(selectBox.value === "Sort by popularity"){
       
        griditem1.classList.remove("inactive");
        
        

        griditem1.style.order = 0;
        
        
        
        
    }else if(selectBox.value === "Sort by average rating"){
       
        griditem1.classList.remove("inactive");
        

        griditem1.style.order = 0;

        
        
    }else if(selectBox.value === "Sort by latest"){
       
        griditem1.classList.remove("inactive");
        
        

        griditem1.style.order = 0;

        griditem2.classList.add("inactive");
        
    }else if(selectBox.value === "Sort by price:low to high"){
       
        griditem1.classList.remove("inactive");
        

        griditem1.style.order = 0;
        
    }else if(selectBox.value === "Sort by price:high to low"){
       
        griditem1.classList.remove("inactive");
        

    

        griditem1.style.order = 0;
       
        
        
    }

}

griditem1.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

function searchvalues() {

    var inputvalue = shopinput.value;

    inputvalue = inputvalue.charAt(0).toUpperCase() + inputvalue.slice(1);
    console.log(inputvalue);
    
    var productname = [
        
        {
            productName:"shop-list-items-img-Wheat-From-Organic-Farms",
            price:34
        },
    ]

    

        griditem1.classList.add("inactive");
        
    
    let cnt = 0;
    productname.forEach(p =>{
        if(p.productName.includes(inputvalue)){
            var element = document.querySelector("." + p.productName)
           element.classList.remove("inactive");
           cnt++;
        }
    })

    nopara.innerHTML = "Showing all " + cnt + " results";



    

      // Create a new option element
      

      // Set the text and value of the option
      searchoption.classList.remove("inactive");
      selectBox.options[6].selected = true;


    
    headpara.innerHTML = "Home / Grocerry / Page 2 / Search results for " + "'" + inputvalue + "'";
    head.innerHTML = "Search results: " + "'" + inputvalue + "'";
    para2.innerHTML = "";
    para3.innerHTML = "";
}