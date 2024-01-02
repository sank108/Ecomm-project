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

const acquantity = document.querySelector(".ac-quantity");
const acprice = document.querySelector(".ac-price");
const accross1 = document.querySelector(".accross1");
const AssortedCoffee1 = document.querySelector(".Assorted-Coffee1");
const itemcount1 = document.querySelector(".itemcount1");
const basket1 = document.querySelector(".basket1");
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
const cbcross1 = document.querySelector(".cbcross1");
const dccross1 = document.querySelector(".dccross1");
const ffecross1 = document.querySelector(".ffecross1");
const fojcross1 = document.querySelector(".fojcross1");
const fohcross1 = document.querySelector(".fohcross1");
const hscross1 = document.querySelector(".hscross1");
const hrccross1 = document.querySelector(".hrccross1");
const neeocross1 = document.querySelector(".neeocross1");
const ofscross1 = document.querySelector(".ofscross1");
const pfmfcross1 = document.querySelector(".pfmfcross1");
const wfofcross1 = document.querySelector(".wfofcross1");
const totalpricel = document.querySelector(".cart-totalprice");
const container = document.querySelector(".container");
const subtotal1 = document.querySelector(".subtotalvalue");



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
    itemcount1.textContent = count;
    acquantity.textContent = localStorage.getItem("assortedcoffeequantity") + " x £35";
    ans.push(localStorage.getItem("assortedcoffeequantity")*35);
}


if(localStorage.getItem("clickedcashewbutterquantity") == "true"){
    CashewButter1.classList.remove("inactive");

    count += Number(localStorage.getItem("cashewbutterquantity"));
    itemcount1.textContent = count;
    cbquantity.textContent = localStorage.getItem("cashewbutterquantity") + " x £25";
    ans.push(localStorage.getItem("cashewbutterquantity")*25);
}


if(localStorage.getItem("clickeddiabeticcookiesquantity") == "true"){
    DiabeticCookies1.classList.remove("inactive");
    count += Number(localStorage.getItem("diabeticcookiesquantity"));
    itemcount1.textContent = count;
    dcquantity.textContent = localStorage.getItem("diabeticcookiesquantity") + " x £25";
    ans.push(localStorage.getItem("diabeticcookiesquantity")*25);
}


if(localStorage.getItem("clickfresheggquantity") == "true"){
    FarmFreshEggs1.classList.remove("inactive");
    count += Number(localStorage.getItem("fresheggquantity"));
    itemcount1.textContent = count;
    ffequantity.textContent = localStorage.getItem("fresheggquantity") + " x £34";
    ans.push(localStorage.getItem("fresheggquantity")*34);
}

if(localStorage.getItem("clickedfreshorangejuice") == "true"){
    FreshOrangeJuice1.classList.remove("inactive");
    count += Number(localStorage.getItem("freshorangejuicequantity"));
    itemcount1.textContent = count;
    fojquantity.textContent = localStorage.getItem("freshorangejuicequantity") + " x £18";
    ans.push(localStorage.getItem("freshorangejuicequantity")*18);
}

if(localStorage.getItem("clickedfreshhoney") == "true"){
    FreshOrganicHoney1.classList.remove("inactive");
    count += Number(localStorage.getItem("freshhoneyquantity"));
    itemcount1.textContent = count;
    fohquantity.textContent = localStorage.getItem("freshhoneyquantity") + " x £34";
    ans.push(localStorage.getItem("freshhoneyquantity")*34);
}

if(localStorage.getItem("clickedhandsanitizer") == "true"){
    HandSanitizer1.classList.remove("inactive");
    count += Number(localStorage.getItem("handsanitizerquantity"));
    itemcount1.textContent = count;
    hsquantity.textContent = localStorage.getItem("handsanitizerquantity") + " x £15";
    ans.push(localStorage.getItem("handsanitizerquantity")*15);
}

if(localStorage.getItem("clickedredchilly") == "true"){
    HandpickedRedChillies1.classList.remove("inactive");
    count += Number(localStorage.getItem("redchillyquantity"));
    itemcount1.textContent = count;
    hrcquantity.textContent = localStorage.getItem("redchillyquantity") + " x £19";
    ans.push(localStorage.getItem("redchillyquantity")*19);
}

if(localStorage.getItem("clickedextractedoilquantity") == "true"){
    NaturalExtractedEdibleOil1.classList.remove("inactive");
    count += Number(localStorage.getItem("extractedoilquantity"));
    itemcount1.textContent = count;
    neeoquantity.textContent = localStorage.getItem("extractedoilquantity") + " x £25";
    ans.push(localStorage.getItem("extractedoilquantity")*25);
}

if(localStorage.getItem("clickedfacescrub") == "true"){
    OrganicFaceScrub1.classList.remove("inactive");
    count += Number(localStorage.getItem("facescrubquantity"));
    itemcount1.textContent = count;
    ofsquantity.textContent = localStorage.getItem("facescrubquantity") + " x £35";
    ans.push(localStorage.getItem("facescrubquantity")*35);
}

if(localStorage.getItem("clickedpulses") == "true"){
    PulsesFromOrganicFarm1.classList.remove("inactive");
    count += Number(localStorage.getItem("pulsesquantity"));
    itemcount1.textContent = count;
    pfmfquantity.textContent = localStorage.getItem("pulsesquantity") + " x £15";
    ans.push(localStorage.getItem("pulsesquantity")*15);
}

if(localStorage.getItem("clickedwheat") == "true"){
    WheatFromOrganicFarms1.classList.remove("inactive");
    count += Number(localStorage.getItem("wheatquantity"));
    itemcount1.textContent = count;
    wfofquantity.textContent = localStorage.getItem("wheatquantity") + " x £34";
    ans.push(localStorage.getItem("wheatquantity")*34);
}



let clicked = false;
var account = localStorage.getItem("assortedcoffeequantity");


ans.forEach((p) =>{
    
    totalcount += p;
})

accross1.addEventListener("click",()=> {
    AssortedCoffee1.classList.add("inactive");
    ans.pop(localStorage.getItem("assortedcoffeequantity")*35);
    
    count -= Number(localStorage.getItem("assortedcoffeequantity"));

    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickedassortedcoffee");
    totalcount = totalcount - localStorage.getItem("assortedcoffeequantity")*35;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
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
});


cbcross1.addEventListener("click",()=> {
    CashewButter1.classList.add("inactive");
    ans.pop(localStorage.getItem("cashewbutterquantity")*25);
    
    count -= Number(localStorage.getItem("cashewbutterquantity"));
    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickedcashewbutterquantity");
    totalcount = totalcount - Number(localStorage.getItem("cashewbutterquantity"))*25;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";

    if(count>0) {
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
});
dccross1.addEventListener("click",()=> {
    DiabeticCookies1.classList.add("inactive");
    ans.pop(localStorage.getItem("diabeticcookiesquantity")*25);
    
    count -= Number(localStorage.getItem("diabeticcookiesquantity"));
    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickeddiabeticcookiesquantity");
    totalcount = totalcount - localStorage.getItem("diabeticcookiesquantity")*25;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
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
});
ffecross1.addEventListener("click",()=> {
    FarmFreshEggs1.classList.add("inactive");
    ans.pop(localStorage.getItem("fresheggquantity")*34);
    
    count -= Number(localStorage.getItem("fresheggquantity"));
    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickfresheggquantity");
    totalcount = totalcount - localStorage.getItem("clickfresheggquantity")*34;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
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
});
fojcross1.addEventListener("click",()=> {
    FreshOrangeJuice1.classList.add("inactive");
    ans.pop(localStorage.getItem("freshorangejuicequantity")*18);
    
    count -= Number(localStorage.getItem("freshorangejuicequantity"));
    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickedfreshorangejuice");
    totalcount = totalcount - localStorage.getItem("freshorangejuicequantity")*18;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
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
});
fohcross1.addEventListener("click",()=> {
    FreshOrganicHoney1.classList.add("inactive");
    ans.pop(localStorage.getItem("freshhoneyquantity")*34);
    
    count -= Number(localStorage.getItem("freshhoneyquantity"));
    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickedfreshhoney");
    totalcount = totalcount - localStorage.getItem("freshhoneyquantity")*34;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
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
});
hscross1.addEventListener("click",()=> {
    HandSanitizer1.classList.add("inactive");
    ans.pop(localStorage.getItem("handsanitizerquantity")*15);
    
    count -= Number(localStorage.getItem("handsanitizerquantity"));
    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickedhandsanitizer");
    totalcount = totalcount - localStorage.getItem("handsanitizerquantity")*15;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
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
});
hrccross1.addEventListener("click",()=> {
    HandpickedRedChillies1.classList.add("inactive");
    ans.pop(localStorage.getItem("redchillyquantity")*19);
    
    count -= Number(localStorage.getItem("redchillyquantity"));
    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickedredchilly");
    totalcount = totalcount - localStorage.getItem("redchillyquantity")*19;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
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
});
neeocross1.addEventListener("click",()=> {
    NaturalExtractedEdibleOil1.classList.add("inactive");
    ans.pop(localStorage.getItem("extractedoilquantity")*25);
    
    count -= Number(localStorage.getItem("extractedoilquantity"));
    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickedextractedoilquantity");
    totalcount = totalcount - localStorage.getItem("extractedoilquantity")*25;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
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
});
ofscross1.addEventListener("click",()=> {
    OrganicFaceScrub1.classList.add("inactive");
    ans.pop(localStorage.getItem("facescrubquantity")*35);
    
    count -= Number(localStorage.getItem("facescrubquantity"));
    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickedfacescrub");
    totalcount = totalcount - localStorage.getItem("facescrubquantity")*35;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
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
});
pfmfcross1.addEventListener("click",()=> {
    PulsesFromOrganicFarm1.classList.add("inactive");
    ans.pop(localStorage.getItem("pulsesquantity")*15);
    
    count -= Number(localStorage.getItem("pulsesquantity"));
    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickedpulses");
    totalcount = totalcount - localStorage.getItem("pulsesquantity")*15;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
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
});
wfofcross1.addEventListener("click",()=> {
    WheatFromOrganicFarms1.classList.add("inactive");
    ans.pop(localStorage.getItem("wheatquantity")*34);
    
    count -= Number(localStorage.getItem("wheatquantity"));
    itemcount1.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct1.classList.add("inactive");
    }else{
        noproduct1.classList.remove("inactive");
    }
    localStorage.removeItem("clickedwheat");
    totalcount = totalcount - localStorage.getItem("wheatquantity")*34;
    subtotal1.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
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
});

basket1.addEventListener("click",() =>{
    cartlist.classList.toggle("margin");
})

xslider.addEventListener("click",() =>{
    cartlist.classList.toggle("margin");
    // window.location.reload();
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



totalpricel.textContent ="£" + totalcount + ".00";
subtotal1.textContent = "£" + totalcount + ".00";




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