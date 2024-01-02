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
            nopara.innerHTML = "Showing 1–9 of 12 results";
            shopinput.value = "";
            
            
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
        nopara.innerHTML = "Showing 1–9 of 12 results";

    }
    noproduct.classList.remove("active");
    nopara.classList.remove("inactive");
    searchlist.classList.remove("inactive");
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

            
        
    
      // Get the selected index
      
    
    })
})

var selectBox = document.getElementById("sort");

console.log(selectBox.value);

var pro = [
    {
        name:"shop-list-items-img-Organic-Face-Scrub",
    },
    {
        name:"shop-list-items-img-Pulses-From-Organic-Farm",
    },
    {
        name:"shop-list-items-img-Wheat-From-Organic-Farms",
    }
]


pro.forEach(p =>{
    let item = griditems.querySelector("." + p.name);
    item.classList.add("inactive");
})





function checkSelectedOption() {
    // Get the select element
    var griditem1 = document.querySelector(".shop-list-items-img-Assorted-coffee");
    var griditem2 = document.querySelector(".shop-list-items-img-Cashew-Butter");
    var griditem3 = document.querySelector(".shop-list-items-img-Diabetic-Cookies");
    var griditem4 = document.querySelector(".shop-list-items-img-Farm-Fresh-Eggs");
    var griditem5 = document.querySelector(".shop-list-items-img-Fresh-Orange-Juice");
    var griditem6 = document.querySelector(".shop-list-items-img-Fresh-Organic-Honey");
    var griditem7 = document.querySelector(".shop-list-items-img-Hand-Sanitizer");
    var griditem8 = document.querySelector(".shop-list-items-img-Handpicked-Red-Chillies");
    var griditem9 = document.querySelector(".shop-list-items-img-Natural-Extracted-Edible-Oil");
    var griditem10 = document.querySelector(".shop-list-items-img-Organic-Face-Scrub");
    var griditem11 = document.querySelector(".shop-list-items-img-Pulses-From-Organic-Farm");
    var griditem12 = document.querySelector(".shop-list-items-img-Wheat-From-Organic-Farms");

    if(selectBox.value !== "search"){
        searchoption.classList.add("inactive");
        headpara.innerHTML = "Home / Shop";
        head.innerHTML = "Shop";
        nopara.innerHTML = "Showing 1–9 of 12 results";
        shopinput.value = "";
    }

    if(selectBox.value === "Default sorting"){
        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");
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

        griditem11.classList.add("inactive");
        griditem12.classList.add("inactive");
        griditem10.classList.add("inactive");
    }
    else if(selectBox.value === "Sort by popularity"){

        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");
        griditem9.style.order = 0;
        griditem7.style.order = 1;
        griditem12.style.order = 2;
        griditem1.style.order = 3;
        griditem8.style.order = 4;
        griditem11.style.order = 5;
        griditem5.style.order = 6;
        griditem2.style.order = 7;
        griditem6.style.order = 8;

        griditem3.classList.add("inactive");
        griditem4.classList.add("inactive");

        
        

    }else if(selectBox.value === "Sort by average rating"){
        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");
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
       
        

        griditem8.style.order = 0;
        griditem11.style.order = 1;
        griditem5.style.order = 2;
        griditem7.style.order = 3;
        griditem7.style.order = 4;
        griditem4.style.order = 5;
        griditem6.style.order = 6;
        griditem9.style.order = 7;
        griditem1.style.order = 8;
        griditem12.style.order = 9;
        griditem3.classList.add("inactive");
        griditem2.classList.add("inactive");
        griditem10.classList.add("inactive");

    }else if(selectBox.value === "Sort by latest"){
        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");
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
        griditem8.style.order = 0;
        griditem11.style.order = 1;
        griditem5.style.order = 2;
        griditem7.style.order = 3;
        griditem7.style.order = 4;
        griditem4.style.order = 5;
        griditem6.style.order = 6;
        griditem9.style.order = 7;
        griditem1.style.order = 8;
        griditem12.style.order = 9;
        griditem3.classList.add("inactive");
        griditem2.classList.add("inactive");

    }else if (selectBox.value === "Sort by price:low to high") {
        
        console.log(selectBox.value);
        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");
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
        griditem7.style.order = 0;
        griditem11.style.order = 1;
        griditem5.style.order = 2;
        griditem8.style.order = 3;
        griditem2.style.order = 4;
        griditem3.style.order = 5;
        griditem9.style.order = 6;
        griditem12.style.order = 7;
        griditem6.style.order = 8;
        griditem1.classList.add("inactive");
        griditem4.classList.add("inactive");
        griditem10.classList.add("inactive");
    }else if (selectBox.value === "Sort by price:high to low") {
        
        
        griditem11.classList.remove("inactive");
        griditem12.classList.remove("inactive");
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
        griditem10.style.order = 1;
        griditem4.style.order = 2;
        griditem6.style.order = 3;
        griditem12.style.order = 4;
        griditem9.style.order = 5;
        griditem3.style.order = 6;
        griditem2.style.order = 7;
        griditem8.style.order = 8;
        griditem11.classList.add("inactive");
        griditem7.classList.add("inactive");
        griditem5.classList.add("inactive");
    }
}

// griditems[1].src = "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-300x300.jpg";
// const item = 

// var imgas = item.querySelector(".Assortedcoffeeimg");
// console.log(item.querySelector(".Assortedcoffeeimg"));
// imgas.src = "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg";


const img1 = document.querySelector(".Assortedcoffeeimg");
const img2 = document.querySelector(".CashewButterimg");
const img3 = document.querySelector(".Diabetic");
const img4 = document.querySelector(".Farm");
const img5 = document.querySelector(".FreshOrangeJuice");
const img6 = document.querySelector(".FreshOrganicHoney");
const img7 = document.querySelector(".Hand");
const img8 = document.querySelector(".Handpicked");
const img9 = document.querySelector(".Edible");
const img10 = document.querySelector(".Organic");
const img11 = document.querySelector(".Pulses");
const img12 = document.querySelector(".Wheat");


img1.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

img2.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

img3.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

img4.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

img5.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

img6.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

img7.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

img8.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

img9.addEventListener("click",function() {
    selectBox.options[0].selected = true;
})

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
            productName:"shop-list-items-img-Natural-Extracted-Edible-Oil",
            
        },
        {
            productName:"shop-list-items-img-Assorted-coffee",
            
        },
        {
            productName:"shop-list-items-img-Cashew-Butter",
            
        },
        {
            productName:"shop-list-items-img-Diabetic-Cookies",
            
        },
        {
            productName:"shop-list-items-img-Farm-Fresh-Eggs",
            
        },
        {
            productName:"shop-list-items-img-Fresh-Orange-Juice",
            
        },
        {
            productName:"shop-list-items-img-Fresh-Organic-Honey",
            
        },
        {
            productName:"shop-list-items-img-Hand-Sanitizer",
            
        },
        {
            productName:"shop-list-items-img-Handpicked-Red-Chillies",
            
        },
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

    let input1 = document.querySelector(".shop-list-items-img-Natural-Extracted-Edible-Oil");
    let input2 = document.querySelector(".shop-list-items-img-Assorted-coffee");
    let input3 = document.querySelector(".shop-list-items-img-Cashew-Butter");
    let input4 = document.querySelector(".shop-list-items-img-Diabetic-Cookies");
    let input5 = document.querySelector(".shop-list-items-img-Farm-Fresh-Eggs");
    let input6 = document.querySelector(".shop-list-items-img-Fresh-Orange-Juice");
    let input7 = document.querySelector(".shop-list-items-img-Fresh-Organic-Honey");
    let input8 = document.querySelector(".shop-list-items-img-Hand-Sanitizer");
    let input9 = document.querySelector(".shop-list-items-img-Handpicked-Red-Chillies");
    let input10 = document.querySelector(".shop-list-items-img-Organic-Face-Scrub");
    let input11 = document.querySelector(".shop-list-items-img-Pulses-From-Organic-Farm");
    let input12 = document.querySelector(".shop-list-items-img-Wheat-From-Organic-Farms");

    input1.classList.add("inactive");
    input2.classList.add("inactive");
    input3.classList.add("inactive");
    input4.classList.add("inactive");
    input5.classList.add("inactive");
    input6.classList.add("inactive");
    input7.classList.add("inactive");
    input8.classList.add("inactive");
    input9.classList.add("inactive");
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


const acquantity = document.querySelector(".ac-quantity");
const acprice = document.querySelector(".ac-price");
const accross = document.querySelector(".accross");
const AssortedCoffee1 = document.querySelector(".Assorted-Coffee1");
const itemcount = document.querySelector(".itemcount");
const basket = document.querySelector(".basket");
const cartlist = document.querySelector(".cartlist");
const noproduct1 = document.querySelector(".noproduct1");
const xslider = document.querySelector(".xslider");
const CashewButter1 = document.querySelector(".Cashew-Butter1");
const DiabeticCookies1 = document.querySelector(".Diabetic-Cookies1");
const FarmFreshEggs1 = document.querySelector(".Farm-Fresh-Eggs1");
const FreshOrangeJuice1 = document.querySelector(".Fresh-Orange-Juice1");
const FreshOrganicHoney1 = document.querySelector(".Fresh-Organic-Honey1");
const HandSanitizer1 = document.querySelector(".Hand-Sanitizer1");
const HandpickedRedChillies1 = document.querySelector(".Handpicked-Red-Chillies1");
const NaturalExtractedEdibleOil1 = document.querySelector(".Natural-Extracted-Edible-Oil1");
const OrganicFaceScrub1 = document.querySelector(".Organic-Face-Scrub1");
const PulsesFromOrganicFarm1 = document.querySelector(".Pulses-From-Organic-Farm1");
const WheatFromOrganicFarms1 = document.querySelector(".Wheat-From-Organic-Farms1");
const cbquantity = document.querySelector(".cb-quantity");
const dcquantity = document.querySelector(".dc-quantity");
const ffequantity = document.querySelector(".ffe-quantity");
const fojquantity = document.querySelector(".foj-quantity");
const fohquantity = document.querySelector(".foh-quantity");
const hsquantity = document.querySelector(".hs-quantity");
const hrcquantity = document.querySelector(".hrc-quantity");
const neeoquantity = document.querySelector(".neeo-quantity");
const ofsquantity = document.querySelector(".ofs-quantity");
const pfmfquantity = document.querySelector(".pfmf-quantity");
const wfofquantity = document.querySelector(".wfof-quantity");
const cbcross = document.querySelector(".cbcross");
const dccross = document.querySelector(".dccross");
const ffecross = document.querySelector(".ffecross");
const fojcross = document.querySelector(".fojcross");
const fohcross = document.querySelector(".fohcross");
const hscross = document.querySelector(".hscross");
const hrccross = document.querySelector(".hrccross");
const neeocross = document.querySelector(".neeocross");
const ofscross = document.querySelector(".ofscross");
const pfmfcross = document.querySelector(".pfmfcross");
const wfofcross = document.querySelector(".wfofcross");
const totalpricel = document.querySelector(".cart-totalprice");
const container = document.querySelector(".container");
const subtotal = document.querySelector(".subtotalvalue");



let count = Number(0);
var ans = [];
var totalcount = 0;

AssortedCoffee1.classList.add("inactive");
CashewButter1.classList.add("inactive");
DiabeticCookies1.classList.add("inactive");
FarmFreshEggs1.classList.add("inactive");
FreshOrangeJuice1.classList.add("inactive");
FreshOrganicHoney1.classList.add("inactive");
HandSanitizer1.classList.add("inactive");
HandpickedRedChillies1.classList.add("inactive");
NaturalExtractedEdibleOil1.classList.add("inactive");
OrganicFaceScrub1.classList.add("inactive");
PulsesFromOrganicFarm1.classList.add("inactive");
WheatFromOrganicFarms1.classList.add("inactive");


if(localStorage.getItem("clickedassortedcoffee") == "true"){
    AssortedCoffee1.classList.remove("inactive");
    count += Number(localStorage.getItem("assortedcoffeequantity"));
    itemcount.textContent = count;
    acquantity.textContent = localStorage.getItem("assortedcoffeequantity") + " x £35";
    ans.push(localStorage.getItem("assortedcoffeequantity")*35);
}


if(localStorage.getItem("clickedcashewbutterquantity") == "true"){
    CashewButter1.classList.remove("inactive");

    count += Number(localStorage.getItem("cashewbutterquantity"));
    itemcount.textContent = count;
    cbquantity.textContent = localStorage.getItem("cashewbutterquantity") + " x £25";
    ans.push(localStorage.getItem("cashewbutterquantity")*25);
}


if(localStorage.getItem("clickeddiabeticcookiesquantity") == "true"){
    DiabeticCookies1.classList.remove("inactive");
    count += Number(localStorage.getItem("diabeticcookiesquantity"));
    itemcount.textContent = count;
    dcquantity.textContent = localStorage.getItem("diabeticcookiesquantity") + " x £25";
    ans.push(localStorage.getItem("diabeticcookiesquantity")*25);
}


if(localStorage.getItem("clickfresheggquantity") == "true"){
    FarmFreshEggs1.classList.remove("inactive");
    count += Number(localStorage.getItem("fresheggquantity"));
    itemcount.textContent = count;
    ffequantity.textContent = localStorage.getItem("fresheggquantity") + " x £34";
    ans.push(localStorage.getItem("fresheggquantity")*34);
}

if(localStorage.getItem("clickedfreshorangejuice") == "true"){
    FreshOrangeJuice1.classList.remove("inactive");
    count += Number(localStorage.getItem("freshorangejuicequantity"));
    itemcount.textContent = count;
    fojquantity.textContent = localStorage.getItem("freshorangejuicequantity") + " x £18";
    ans.push(localStorage.getItem("freshorangejuicequantity")*18);
}

if(localStorage.getItem("clickedfreshhoney") == "true"){
    FreshOrganicHoney1.classList.remove("inactive");
    count += Number(localStorage.getItem("freshhoneyquantity"));
    itemcount.textContent = count;
    fohquantity.textContent = localStorage.getItem("freshhoneyquantity") + " x £34";
    ans.push(localStorage.getItem("freshhoneyquantity")*34);
}

if(localStorage.getItem("clickedhandsanitizer") == "true"){
    HandSanitizer1.classList.remove("inactive");
    count += Number(localStorage.getItem("handsanitizerquantity"));
    itemcount.textContent = count;
    hsquantity.textContent = localStorage.getItem("handsanitizerquantity") + " x £15";
    ans.push(localStorage.getItem("handsanitizerquantity")*15);
}

if(localStorage.getItem("clickedredchilly") == "true"){
    HandpickedRedChillies1.classList.remove("inactive");
    count += Number(localStorage.getItem("redchillyquantity"));
    itemcount.textContent = count;
    hrcquantity.textContent = localStorage.getItem("redchillyquantity") + " x £19";
    ans.push(localStorage.getItem("redchillyquantity")*19);
}

if(localStorage.getItem("clickedextractedoilquantity") == "true"){
    NaturalExtractedEdibleOil1.classList.remove("inactive");
    count += Number(localStorage.getItem("extractedoilquantity"));
    itemcount.textContent = count;
    neeoquantity.textContent = localStorage.getItem("extractedoilquantity") + " x £25";
    ans.push(localStorage.getItem("extractedoilquantity")*25);
}

if(localStorage.getItem("clickedfacescrub") == "true"){
    OrganicFaceScrub1.classList.remove("inactive");
    count += Number(localStorage.getItem("facescrubquantity"));
    itemcount.textContent = count;
    ofsquantity.textContent = localStorage.getItem("facescrubquantity") + " x £35";
    ans.push(localStorage.getItem("facescrubquantity")*35);
}

if(localStorage.getItem("clickedpulses") == "true"){
    PulsesFromOrganicFarm1.classList.remove("inactive");
    count += Number(localStorage.getItem("pulsesquantity"));
    itemcount.textContent = count;
    pfmfquantity.textContent = localStorage.getItem("pulsesquantity") + " x £15";
    ans.push(localStorage.getItem("pulsesquantity")*15);
}

if(localStorage.getItem("clickedwheat") == "true"){
    WheatFromOrganicFarms1.classList.remove("inactive");
    count += Number(localStorage.getItem("wheatquantity"));
    itemcount.textContent = count;
    wfofquantity.textContent = localStorage.getItem("wheatquantity") + " x £34";
    ans.push(localStorage.getItem("wheatquantity")*34);
}



let clicked = false;
var account = localStorage.getItem("assortedcoffeequantity");
accross.addEventListener("click",()=> {
    AssortedCoffee1.classList.add("inactive");
    ans.pop(localStorage.getItem("assortedcoffeequantity")*35);
    
    count -= Number(localStorage.getItem("assortedcoffeequantity"));

    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickedassortedcoffee");
    totalcount = totalcount - localStorage.getItem("assortedcoffeequantity")*35;
    subtotal.textContent = "£" + totalcount + ".00";
});


cbcross.addEventListener("click",()=> {
    CashewButter1.classList.add("inactive");
    ans.pop(localStorage.getItem("cashewbutterquantity")*25);
    
    count -= Number(localStorage.getItem("cashewbutterquantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickedcashewbutterquantity");
    totalcount = totalcount - localStorage.getItem("cashewbutterquantity")*25;
    subtotal.textContent = "£" + totalcount + ".00";
});
dccross.addEventListener("click",()=> {
    DiabeticCookies1.classList.add("inactive");
    ans.pop(localStorage.getItem("diabeticcookiesquantity")*25);
    
    count -= Number(localStorage.getItem("diabeticcookiesquantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickeddiabeticcookiesquantity");
    totalcount = totalcount - localStorage.getItem("diabeticcookiesquantity")*25;
    subtotal.textContent = "£" + totalcount + ".00";
});
ffecross.addEventListener("click",()=> {
    FarmFreshEggs1.classList.add("inactive");
    ans.pop(localStorage.getItem("fresheggquantity")*34);
    
    count -= Number(localStorage.getItem("fresheggquantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickfresheggquantity");
    totalcount = totalcount - localStorage.getItem("cashewbutterquantity")*34;
    subtotal.textContent = "£" + totalcount + ".00";
});
fojcross.addEventListener("click",()=> {
    FreshOrangeJuice1.classList.add("inactive");
    ans.pop(localStorage.getItem("freshorangejuicequantity")*18);
    
    count -= Number(localStorage.getItem("freshorangejuicequantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickedfreshorangejuice");
    totalcount = totalcount - localStorage.getItem("freshorangejuicequantity")*18;
    subtotal.textContent = "£" + totalcount + ".00";
});
fohcross.addEventListener("click",()=> {
    FreshOrganicHoney1.classList.add("inactive");
    ans.pop(localStorage.getItem("freshhoneyquantity")*34);
    
    count -= Number(localStorage.getItem("freshhoneyquantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickedfreshhoney");
    totalcount = totalcount - localStorage.getItem("freshhoneyquantity")*34;
    subtotal.textContent = "£" + totalcount + ".00";
});
hscross.addEventListener("click",()=> {
    HandSanitizer1.classList.add("inactive");
    ans.pop(localStorage.getItem("handsanitizerquantity")*15);
    
    count -= Number(localStorage.getItem("handsanitizerquantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickedhandsanitizer");
    totalcount = totalcount - localStorage.getItem("handsanitizerquantity")*15;
    subtotal.textContent = "£" + totalcount + ".00";
});
hrccross.addEventListener("click",()=> {
    HandpickedRedChillies1.classList.add("inactive");
    ans.pop(localStorage.getItem("redchillyquantity")*19);
    
    count -= Number(localStorage.getItem("redchillyquantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickedredchilly");
    totalcount = totalcount - localStorage.getItem("redchillyquantity")*19;
    subtotal.textContent = "£" + totalcount + ".00";
});
neeocross.addEventListener("click",()=> {
    NaturalExtractedEdibleOil1.classList.add("inactive");
    ans.pop(localStorage.getItem("extractedoilquantity")*25);
    
    count -= Number(localStorage.getItem("extractedoilquantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickedextractedoilquantity");
    totalcount = totalcount - localStorage.getItem("extractedoilquantity")*25;
    subtotal.textContent = "£" + totalcount + ".00";
});
ofscross.addEventListener("click",()=> {
    OrganicFaceScrub1.classList.add("inactive");
    ans.pop(localStorage.getItem("facescrubquantity")*35);
    
    count -= Number(localStorage.getItem("facescrubquantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickedfacescrub");
    totalcount = totalcount - localStorage.getItem("facescrubquantity")*35;
    subtotal.textContent = "£" + totalcount + ".00";
});
pfmfcross.addEventListener("click",()=> {
    PulsesFromOrganicFarm1.classList.add("inactive");
    ans.pop(localStorage.getItem("pulsesquantity")*15);
    
    count -= Number(localStorage.getItem("pulsesquantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickedpulses");
    totalcount = totalcount - localStorage.getItem("pulsesquantity")*15;
    subtotal.textContent = "£" + totalcount + ".00";
});
wfofcross.addEventListener("click",()=> {
    WheatFromOrganicFarms1.classList.add("inactive");
    ans.pop(localStorage.getItem("wheatquantity")*34);
    
    count -= Number(localStorage.getItem("wheatquantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickedwheat");
    totalcount = totalcount - localStorage.getItem("wheatquantity")*34;
    subtotal.textContent = "£" + totalcount + ".00";
});

basket.addEventListener("click",() =>{
    cartlist.classList.toggle("margin");
})

xslider.addEventListener("click",() =>{
    cartlist.classList.toggle("margin");
})


// basket.addEventListener("click",() =>{
//     container.classList.toggle("inactive");
//     container1.classList.toggle("inactive");
// })

const cartlistunderline1 = document.querySelector(".cartlist-underline-1");
const cartitem1 = document.querySelector(".cart-item-1");
const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const btn3 = document.querySelector(".button3");


if (count>0) {
    noproduct1.classList.add("inactive");
    cartlistunderline1.classList.remove("inactive");
    cartitem1.classList.remove("inactive");
    btn2.classList.remove("inactive");
    btn3.classList.remove("inactive");
    btn1.classList.add("inactive");
}else{
    noproduct1.classList.remove("inactive");
    cartlistunderline1.classList.add("inactive");
    cartitem1.classList.add("inactive");
    btn2.classList.add("inactive");
    btn3.classList.add("inactive");
    btn1.classList.remove("inactive");
}


ans.forEach((p) =>{
    
    totalcount += p;
})
totalpricel.textContent ="£" + totalcount + ".00";
subtotal.textContent = "£" + totalcount + ".00";