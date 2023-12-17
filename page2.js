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
const headpara = document.querySelector(".shop-list-header-para1");
const head = document.querySelector(".shop-list-heading");

searchoption.classList.add("inactive");
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
    
            console.log(activeFilter.display);
            minVal = parseInt(rangeInput[0].value);
            maxVal = parseInt(rangeInput[1].value);
            // if(minVal != 0 || maxVal != 40){
            //     activeFilter.classList.add("active");
            // }else{
            //     activeFilter.classList.remove("active");
            // }
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
            headpara.innerHTML = "Home / Shop";
            head.innerHTML = "Shop";
            nopara.innerHTML = "Showing 10-12 of 12 results";
            shopinput.value = "";
            // let pro = (maxVal / rangeInput[1].max) *100 + "%";
            // console.log(pro);
    
            // console.log(,priceInput[1].value);


            var products = [
                
                {
                    productName:"shop-list-items-img-Organic-Face-Scrub",
                    price:35
                },
                {
                    productName:"shop-list-items-img-Pulses-From-Organic-Farm",
                    price:15
                },
                {
                    productName:"shop-list-items-img-Wheat-From-Organic-Farms",
                    price:34
                },

            ];
            
            
            var ans = [
            {
                productName:"shop-list-items-img-Organic-Face-Scrub",
                price:35
            },
            {
                productName:"shop-list-items-img-Pulses-From-Organic-Farm",
                price:15
            },
            {
                productName:"shop-list-items-img-Wheat-From-Organic-Farms",
                price:34
            },
        ];
            products.forEach(product =>{
                
                    // product.productName.classList.add("inactive");
                    // console.log(product.productName);
                    // let pro = product.productName;
                    // pro.classList.add("inactive");

                    let element = document.querySelector("." + product.productName);
                    // Check the condition and add the class
                    console.log(product.price);
                    if(product.price <= minVal || product.price >= maxVal) {
                        ans.pop(product.productName);
                        element.classList.add("inactive");
                        if(ans.length == 0){
                            noproduct.classList.add("active");
                            nopara.classList.add("inactive");
                            searchlist.classList.add("inactive");
                        }
                        
                    }else if(product.price >= minVal || product.price <= maxVal+1){
                        ans.push(product.productName);
                        element.classList.remove("inactive");
                        if(ans.length > 0){
                            noproduct.classList.remove("active");
                            nopara.classList.remove("inactive");
                            searchlist.classList.remove("inactive");
                            
                            
                        }
                        
                    }

                    // console.log(ans.length);
                   
                    
            })

            // if(ans.length == 0){
            //     noproduct.classList.add("active");
            //     nopara.classList.add("inactive");
            // }
            // }else{
            //     noproduct.classList.add("inactive");
            //     nopara.classList.add("active");
            // }
            
        });
    });
    


// rangeInput.forEach(input =>{
//     input.addEventListener("input" , (e)=>{
//         rangeInput.addEventListener('dragstart', function (event) {
//             // The drag has started
//             console.log('Drag started');
//         });
        
//         rangeInput.addEventListener('drag', function (event) {
//             // The element is being dragged
//             console.log('Dragging');
//         });
        
//         rangeInput.addEventListener('dragend', function (event) {
//             // The drag has ended
//             console.log('Drag ended');
//         });
//     });
// });

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
        headpara.innerHTML = "Home / Shop";
        head.innerHTML = "Shop";
        nopara.innerHTML = "Showing 10-12 of 12 results";
    }
    noproduct.classList.remove("active");
    nopara.classList.remove("inactive");
    searchlist.classList.remove("inactive");
    var products = [
        {
            productName:"shop-list-items-img-Organic-Face-Scrub",
            price:35
        },
        {
            productName:"shop-list-items-img-Pulses-From-Organic-Farm",
            price:15
        },
        {
            productName:"shop-list-items-img-Wheat-From-Organic-Farms",
            price:34
        }

    ];
    
    
     
    products.forEach(product =>{
        
            // product.productName.classList.add("inactive");
            // console.log(product.productName);
            // let pro = product.productName;
            // pro.classList.add("inactive");

            let element = document.querySelector("." + product.productName);
            // Check the condition and add the class
            console.log(product.price);
            if(element.classList == "inactive") {
                element.classList.add("inactive");
            }else{
                element.classList.remove("inactive");
            }

            
        
    
      // Get the selected index
      
    
    })
})

var selectBox = document.getElementById("sort");

console.log(selectBox.value);

// var pro = [
//     {
//         name:"shop-list-items-img-Organic-Face-Scrub",
//     },
//     {
//         name:"shop-list-items-img-Pulses-From-Organic-Farm",
//     },
//     {
//         name:"shop-list-items-img-Wheat-From-Organic-Farms",
//     }
// ]


// pro.forEach(p =>{
//     let item = griditems.querySelector("." + p.name);
//     item.classList.add("inactive");
// })





function checkSelectedOption() {
    // Get the select element
    
    var griditem10 = document.querySelector(".shop-list-items-img-Organic-Face-Scrub");
    var griditem11 = document.querySelector(".shop-list-items-img-Pulses-From-Organic-Farm");
    var griditem12 = document.querySelector(".shop-list-items-img-Wheat-From-Organic-Farms");

    if(selectBox.value !== "search"){
        searchoption.classList.add("inactive");
        headpara.innerHTML = "Home / Shop";
        head.innerHTML = "Shop";
        nopara.innerHTML = "Showing 10-12 of 12 results";
        shopinput.value = "";
    }

    if(selectBox.value === "Default sorting"){
        
        griditem10.classList.remove("inactive");
        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");
        
        griditem10.style.order = 0;
        griditem11.style.order = 1;
        griditem12.style.order = 2;

        
    }
    else if(selectBox.value === "Sort by popularity"){

        griditem10.classList.remove("inactive");
        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");

        griditem10.style.order = 1;
        griditem11.style.order = 0;
        griditem12.style.order = 2;

        
        

    }else if(selectBox.value === "Sort by average rating"){

        griditem10.classList.remove("inactive");
        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");
        griditem10.style.order = 1;
        griditem11.style.order = 2;
        griditem12.style.order = 0;

    }else if(selectBox.value === "Sort by latest"){

        griditem10.classList.remove("inactive");
        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");
        griditem10.style.order = 2;
        griditem11.style.order = 1;
        griditem12.style.order = 0;

    }else if (selectBox.value === "Sort by price:low to high") {

        griditem10.classList.remove("inactive");
        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");
        
        griditem10.style.order = 2;
        griditem11.style.order = 0;
        griditem12.style.order = 1;
    }else if (selectBox.value === "Sort by price:high to low") {

        griditem10.classList.remove("inactive");
        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");
        
        
        griditem10.style.order = 0;
        griditem11.style.order = 1;
        griditem12.style.order = 2;
    }
}

// griditems[1].src = "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-300x300.jpg";
// const item = 

// var imgas = item.querySelector(".Assortedcoffeeimg");
// console.log(item.querySelector(".Assortedcoffeeimg"));
// imgas.src = "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg";



const img10 = document.querySelector(".Organic");
const img11 = document.querySelector(".Pulses");
const img12 = document.querySelector(".Wheat");




img10.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

img11.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

img12.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

function searchvalues() {

    var inputvalue = shopinput.value;

    inputvalue = inputvalue.charAt(0).toUpperCase() + inputvalue.slice(1);
    console.log(inputvalue);
    
    var productname = [
        {
            productName:"shop-list-items-img-Organic-Face-Scrub",
        },
        {
            productName:"shop-list-items-img-Pulses-From-Organic-Farm",
        },
        {
            productName:"shop-list-items-img-Wheat-From-Organic-Farms",
        }
    ]

    
    let input10 = document.querySelector(".shop-list-items-img-Organic-Face-Scrub");
    let input11 = document.querySelector(".shop-list-items-img-Pulses-From-Organic-Farm");
    let input12 = document.querySelector(".shop-list-items-img-Wheat-From-Organic-Farms");

    
    input10.classList.add("inactive");
    input11.classList.add("inactive");
    input12.classList.add("inactive");

    console.log(inputvalue);
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


    
    headpara.innerHTML = "Home / Shop / Search results for " + "'" + inputvalue + "'";
    head.innerHTML = "Search results: " + "'" + inputvalue + "'";
}