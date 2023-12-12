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

            searchoption.classList.add("inactive");
            headpara.innerHTML = "Home / Grocceries";
            head.innerHTML = "Grocceries";
            nopara.innerHTML = "Showing 1–9 of 10 results";
            shopinput.value = "";

            var products = [
                {
                    productName:"shop-list-items-img-Assorted-coffee",
                    price:35
                },
                {
                    productName:"shop-list-items-img-Cashew-Butter",
                    price:25
                },
                {
                    productName:"shop-list-items-img-Diabetic-Cookies",
                    price:25
                },
                {
                    productName:"shop-list-items-img-Fresh-Organic-Honey",
                    price:35
                },
                {
                    productName:"shop-list-items-img-Hand-Sanitizer",
                    price:15
                },
                {
                    productName:"shop-list-items-img-Handpicked-Red-Chillies",
                    price:34
                },
                {
                    productName:"shop-list-items-img-Natural-Extracted-Edible-Oil",
                    price:15
                },
                {
                    productName:"shop-list-items-img-Organic-Face-Scrub",
                    price:19
                },
                {
                    productName:"shop-list-items-img-Pulses-From-Organic-Farm",
                    price:25
                },
                {
                    productName:"shop-list-items-img-Wheat-From-Organic-Farms",
                    price:34
                },

            ]

            var ans = [
                {
                    productName:"shop-list-items-img-Assorted-coffee",
                    price:35
                },
                {
                    productName:"shop-list-items-img-Cashew-Butter",
                    price:25
                },
                {
                    productName:"shop-list-items-img-Diabetic-Cookies",
                    price:25
                },
                {
                    productName:"shop-list-items-img-Fresh-Organic-Honey",
                    price:35
                },
                {
                    productName:"shop-list-items-img-Hand-Sanitizer",
                    price:15
                },
                {
                    productName:"shop-list-items-img-Handpicked-Red-Chillies",
                    price:34
                },
                {
                    productName:"shop-list-items-img-Natural-Extracted-Edible-Oil",
                    price:15
                },
                {
                    productName:"shop-list-items-img-Organic-Face-Scrub",
                    price:19
                },
                {
                    productName:"shop-list-items-img-Pulses-From-Organic-Farm",
                    price:25
                },
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

// noproduct.classList.add("active");

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
        headpara.innerHTML = "Home / Grocceries";
        head.innerHTML = "Grocceries";
        nopara.innerHTML = "Showing 1–9 of 10 results";
    }

    var products = [
        {
            productName:"shop-list-items-img-Assorted-coffee",
            price:35
        },
        {
            productName:"shop-list-items-img-Cashew-Butter",
            price:25
        },
        {
            productName:"shop-list-items-img-Diabetic-Cookies",
            price:25
        },
        {
            productName:"shop-list-items-img-Fresh-Organic-Honey",
            price:35
        },
        {
            productName:"shop-list-items-img-Hand-Sanitizer",
            price:15
        },
        {
            productName:"shop-list-items-img-Handpicked-Red-Chillies",
            price:34
        },
        {
            productName:"shop-list-items-img-Natural-Extracted-Edible-Oil",
            price:15
        },
        {
            productName:"shop-list-items-img-Organic-Face-Scrub",
            price:19
        },
        {
            productName:"shop-list-items-img-Pulses-From-Organic-Farm",
            price:25
        },
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
let wheat = document.querySelector(".shop-list-items-img-Wheat-From-Organic-Farms");
wheat.classList.add("inactive");

    var griditem1 = document.querySelector(".shop-list-items-img-Assorted-coffee");
    var griditem2 = document.querySelector(".shop-list-items-img-Cashew-Butter");
    var griditem3 = document.querySelector(".shop-list-items-img-Diabetic-Cookies");
    var griditem4 = document.querySelector(".shop-list-items-img-Fresh-Organic-Honey");
    var griditem5 = document.querySelector(".shop-list-items-img-Hand-Sanitizer");
    var griditem6 = document.querySelector(".shop-list-items-img-Handpicked-Red-Chillies");
    var griditem7 = document.querySelector(".shop-list-items-img-Natural-Extracted-Edible-Oil");
    var griditem8 = document.querySelector(".shop-list-items-img-Organic-Face-Scrub");
    var griditem9 = document.querySelector(".shop-list-items-img-Pulses-From-Organic-Farm");
    var griditem10 = document.querySelector(".shop-list-items-img-Wheat-From-Organic-Farms");
function checkSelectedOption() {

    if(selectBox.value !== "search"){
        searchoption.classList.add("inactive");
        headpara.innerHTML = "Home / Grocceries";
        head.innerHTML = "Grocceries";
        nopara.innerHTML = "Showing 1–9 of 10 results";
        shopinput.value = "";
    }
    if(selectBox.value === "Default sorting"){
       
        griditem1.classList.remove("inactive");
        griditem2.classList.remove("inactive");
        griditem3.classList.remove("inactive");
        griditem4.classList.remove("inactive");
        griditem5.classList.remove("inactive");
        griditem6.classList.remove("inactive");
        griditem7.classList.remove("inactive");
        griditem8.classList.remove("inactive");
        griditem9.classList.remove("inactive");
        griditem10.classList.remove("inactive");
        

        griditem1.style.order = 0;
        griditem2.style.order = 1;
        griditem3.style.order = 2;
        griditem4.style.order = 3;
        griditem5.style.order = 4;
        griditem6.style.order = 5;
        griditem7.style.order = 6;
        griditem8.style.order = 7;
        griditem9.style.order = 8;

        griditem10.classList.add("inactive");
        
    }else if(selectBox.value === "Sort by popularity"){
       
        griditem1.classList.remove("inactive");
        griditem2.classList.remove("inactive");
        griditem3.classList.remove("inactive");
        griditem4.classList.remove("inactive");
        griditem5.classList.remove("inactive");
        griditem6.classList.remove("inactive");
        griditem7.classList.remove("inactive");
        griditem8.classList.remove("inactive");
        griditem9.classList.remove("inactive");
        griditem10.classList.remove("inactive");
        

        griditem1.style.order = 3;
        griditem2.style.order = 6;
        griditem3.style.order = 8;
        griditem4.style.order = 7;
        griditem5.style.order = 1;
        griditem6.style.order = 4;
        griditem7.style.order = 0;
        
        griditem9.style.order = 5;
        griditem10.style.order = 2;

        griditem8.classList.add("inactive");
        
    }else if(selectBox.value === "Sort by average rating"){
       
        griditem1.classList.remove("inactive");
        griditem2.classList.remove("inactive");
        griditem3.classList.remove("inactive");
        griditem4.classList.remove("inactive");
        griditem5.classList.remove("inactive");
        griditem6.classList.remove("inactive");
        griditem7.classList.remove("inactive");
        griditem8.classList.remove("inactive");
        griditem9.classList.remove("inactive");
        griditem10.classList.remove("inactive");
        

        griditem1.style.order = 5;
        
        griditem3.style.order = 7;
        griditem4.style.order = 3;
        griditem5.style.order = 2;
        griditem6.style.order = 0;
        griditem7.style.order = 4;
        griditem8.style.order = 8;
        griditem9.style.order = 1;
        griditem10.style.order = 6;

        griditem2.classList.add("inactive");
        
    }else if(selectBox.value === "Sort by latest"){
       
        griditem1.classList.remove("inactive");
        griditem2.classList.remove("inactive");
        griditem3.classList.remove("inactive");
        griditem4.classList.remove("inactive");
        griditem5.classList.remove("inactive");
        griditem6.classList.remove("inactive");
        griditem7.classList.remove("inactive");
        griditem8.classList.remove("inactive");
        griditem9.classList.remove("inactive");
        griditem10.classList.remove("inactive");
        

        griditem1.style.order = 1;
        
        griditem3.style.order = 7;
        griditem4.style.order = 6;
        griditem5.style.order = 2;
        griditem6.style.order = 0;
        griditem7.style.order = 4;
        griditem8.style.order = 8;
        griditem9.style.order = 5;
        griditem10.style.order = 3;

        griditem2.classList.add("inactive");
        
    }else if(selectBox.value === "Sort by price:low to high"){
       
        griditem1.classList.remove("inactive");
        griditem2.classList.remove("inactive");
        griditem3.classList.remove("inactive");
        griditem4.classList.remove("inactive");
        griditem5.classList.remove("inactive");
        griditem6.classList.remove("inactive");
        griditem7.classList.remove("inactive");
        griditem8.classList.remove("inactive");
        griditem9.classList.remove("inactive");
        griditem10.classList.remove("inactive");

        griditem2.style.order = 3;
        griditem3.style.order = 4;
        griditem4.style.order = 7;
        griditem5.style.order = 0;
        griditem6.style.order = 2;
        griditem7.style.order = 5;
        griditem8.style.order = 8;
        griditem9.style.order = 1;
        griditem10.style.order = 6;

        griditem1.classList.add("inactive");
        
    }else if(selectBox.value === "Sort by price:high to low"){
       
        griditem1.classList.remove("inactive");
        griditem2.classList.remove("inactive");
        griditem3.classList.remove("inactive");
        griditem4.classList.remove("inactive");
        griditem5.classList.remove("inactive");
        griditem6.classList.remove("inactive");
        griditem7.classList.remove("inactive");
        griditem8.classList.remove("inactive");
        griditem9.classList.remove("inactive");
        griditem10.classList.remove("inactive");

    

        griditem1.style.order = 0;
       
        griditem3.style.order = 5;
        griditem4.style.order = 2;
        griditem5.style.order = 0;
        griditem6.style.order = 7;
        griditem7.style.order = 4;
        griditem8.style.order = 1;
        griditem9.style.order = 8;
        griditem10.style.order = 3;

        griditem2.classList.add("inactive");
        
    }

}

griditem1.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

griditem2.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})
griditem3.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})
griditem4.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})
griditem5.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})
griditem6.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})
griditem7.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})
griditem8.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})
griditem9.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})
griditem10.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})


function searchvalues() {

    var inputvalue = shopinput.value;

    inputvalue = inputvalue.charAt(0).toUpperCase() + inputvalue.slice(1);
    console.log(inputvalue);
    
    var productname = [
        {
            productName:"shop-list-items-img-Assorted-coffee",
            price:35
        },
        {
            productName:"shop-list-items-img-Cashew-Butter",
            price:25
        },
        {
            productName:"shop-list-items-img-Diabetic-Cookies",
            price:25
        },
        {
            productName:"shop-list-items-img-Fresh-Organic-Honey",
            price:35
        },
        {
            productName:"shop-list-items-img-Hand-Sanitizer",
            price:15
        },
        {
            productName:"shop-list-items-img-Handpicked-Red-Chillies",
            price:34
        },
        {
            productName:"shop-list-items-img-Natural-Extracted-Edible-Oil",
            price:15
        },
        {
            productName:"shop-list-items-img-Organic-Face-Scrub",
            price:19
        },
        {
            productName:"shop-list-items-img-Pulses-From-Organic-Farm",
            price:25
        },
        {
            productName:"shop-list-items-img-Wheat-From-Organic-Farms",
            price:34
        },
    ]

    

        griditem1.classList.add("inactive");
        griditem2.classList.add("inactive");
        griditem3.classList.add("inactive");
        griditem4.classList.add("inactive");
        griditem5.classList.add("inactive");
        griditem6.classList.add("inactive");
        griditem7.classList.add("inactive");
        griditem8.classList.add("inactive");
        griditem9.classList.add("inactive");
        griditem10.classList.add("inactive");
    
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


    
    headpara.innerHTML = "Home / Grocerry / Search results for " + "'" + inputvalue + "'";
    head.innerHTML = "Search results: " + "'" + inputvalue + "'";
}