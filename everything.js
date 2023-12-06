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

let priceGap = 10;
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
            
            
            
            // let pro = (maxVal / rangeInput[1].max) *100 + "%";
            // console.log(pro);
    
            // console.log(,priceInput[1].value);


            var products = [
                {
                    productName:"shop-list-items-img-Natural-Extracted-Edible-Oil",
                    price:25
                },
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
                    productName:"shop-list-items-img-Farm-Fresh-Eggs",
                    price:34
                },
                {
                    productName:"shop-list-items-img-Fresh-Orange-Juice",
                    price:18
                },
                {
                    productName:"shop-list-items-img-Fresh-Organic-Honey",
                    price:34
                },
                {
                    productName:"shop-list-items-img-Hand-Sanitizer",
                    price:15
                },
                {
                    productName:"shop-list-items-img-Handpicked-Red-Chillies",
                    price:19
                },
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
            
            
            var ans = [{
                productName:"shop-list-items-img-Natural-Extracted-Edible-Oil",
                price:25
            },
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
                productName:"shop-list-items-img-Farm-Fresh-Eggs",
                price:34
            },
            {
                productName:"shop-list-items-img-Fresh-Orange-Juice",
                price:18
            },
            {
                productName:"shop-list-items-img-Fresh-Organic-Honey",
                price:34
            },
            {
                productName:"shop-list-items-img-Hand-Sanitizer",
                price:15
            },
            {
                productName:"shop-list-items-img-Handpicked-Red-Chillies",
                price:19
            },
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

                    console.log(ans.length);
                   
                    
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
    }

    var products = [
        {
            productName:"shop-list-items-img-Natural-Extracted-Edible-Oil",
            price:25
        },
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
            productName:"shop-list-items-img-Farm-Fresh-Eggs",
            price:34
        },
        {
            productName:"shop-list-items-img-Fresh-Orange-Juice",
            price:18
        },
        {
            productName:"shop-list-items-img-Fresh-Organic-Honey",
            price:34
        },
        {
            productName:"shop-list-items-img-Hand-Sanitizer",
            price:15
        },
        {
            productName:"shop-list-items-img-Handpicked-Red-Chillies",
            price:19
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
    
    })
})


