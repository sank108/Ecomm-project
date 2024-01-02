const acquantity = document.querySelector(".ac-quantity");
const acprice = document.querySelector(".ac-price");
const accross = document.querySelector(".accross");
const AssortedCoffee = document.querySelector(".Assorted-Coffee");
const itemcount = document.querySelector(".itemcount");
const basket = document.querySelector(".basket");
const cartlist = document.querySelector(".cartlist");
const noproduct = document.querySelector(".noproduct");
const xslider = document.querySelector(".xslider");
const CashewButter = document.querySelector(".Cashew-Butter");
const DiabeticCookies = document.querySelector(".Diabetic-Cookies");
const FarmFreshEggs = document.querySelector(".Farm-Fresh-Eggs");
const FreshOrangeJuice = document.querySelector(".Fresh-Orange-Juice");
const FreshOrganicHoney = document.querySelector(".Fresh-Organic-Honey");
const HandSanitizer = document.querySelector(".Hand-Sanitizer");
const HandpickedRedChillies = document.querySelector(".Handpicked-Red-Chillies");
const NaturalExtractedEdibleOil = document.querySelector(".Natural-Extracted-Edible-Oil");
const OrganicFaceScrub = document.querySelector(".Organic-Face-Scrub");
const PulsesFromOrganicFarm = document.querySelector(".Pulses-From-Organic-Farm");
const WheatFromOrganicFarms = document.querySelector(".Wheat-From-Organic-Farms");
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

AssortedCoffee.classList.add("inactive");
CashewButter.classList.add("inactive");
DiabeticCookies.classList.add("inactive");
FarmFreshEggs.classList.add("inactive");
FreshOrangeJuice.classList.add("inactive");
FreshOrganicHoney.classList.add("inactive");
HandSanitizer.classList.add("inactive");
HandpickedRedChillies.classList.add("inactive");
NaturalExtractedEdibleOil.classList.add("inactive");
OrganicFaceScrub.classList.add("inactive");
PulsesFromOrganicFarm.classList.add("inactive");
WheatFromOrganicFarms.classList.add("inactive");


if(localStorage.getItem("clickedassortedcoffee") == "true"){
    AssortedCoffee.classList.remove("inactive");
    count += Number(localStorage.getItem("assortedcoffeequantity"));
    itemcount.textContent = count;
    acquantity.textContent = localStorage.getItem("assortedcoffeequantity") + " x £35";
    ans.push(localStorage.getItem("assortedcoffeequantity")*35);
}


if(localStorage.getItem("clickedcashewbutterquantity") == "true"){
    CashewButter.classList.remove("inactive");

    count += Number(localStorage.getItem("cashewbutterquantity"));
    itemcount.textContent = count;
    cbquantity.textContent = localStorage.getItem("cashewbutterquantity") + " x £25";
    ans.push(localStorage.getItem("cashewbutterquantity")*25);
}


if(localStorage.getItem("clickeddiabeticcookiesquantity") == "true"){
    DiabeticCookies.classList.remove("inactive");
    count += Number(localStorage.getItem("diabeticcookiesquantity"));
    itemcount.textContent = count;
    dcquantity.textContent = localStorage.getItem("diabeticcookiesquantity") + " x £25";
    ans.push(localStorage.getItem("diabeticcookiesquantity")*25);
}


if(localStorage.getItem("clickfresheggquantity") == "true"){
    FarmFreshEggs.classList.remove("inactive");
    count += Number(localStorage.getItem("fresheggquantity"));
    itemcount.textContent = count;
    ffequantity.textContent = localStorage.getItem("fresheggquantity") + " x £34";
    ans.push(localStorage.getItem("fresheggquantity")*34);
}

if(localStorage.getItem("clickedfreshorangejuice") == "true"){
    FreshOrangeJuice.classList.remove("inactive");
    count += Number(localStorage.getItem("freshorangejuicequantity"));
    itemcount.textContent = count;
    fojquantity.textContent = localStorage.getItem("freshorangejuicequantity") + " x £18";
    ans.push(localStorage.getItem("freshorangejuicequantity")*18);
}

if(localStorage.getItem("clickedfreshhoney") == "true"){
    FreshOrganicHoney.classList.remove("inactive");
    count += Number(localStorage.getItem("freshhoneyquantity"));
    itemcount.textContent = count;
    fohquantity.textContent = localStorage.getItem("freshhoneyquantity") + " x £34";
    ans.push(localStorage.getItem("freshhoneyquantity")*34);
}

if(localStorage.getItem("clickedhandsanitizer") == "true"){
    HandSanitizer.classList.remove("inactive");
    count += Number(localStorage.getItem("handsanitizerquantity"));
    itemcount.textContent = count;
    hsquantity.textContent = localStorage.getItem("handsanitizerquantity") + " x £15";
    ans.push(localStorage.getItem("handsanitizerquantity")*15);
}

if(localStorage.getItem("clickedredchilly") == "true"){
    HandpickedRedChillies.classList.remove("inactive");
    count += Number(localStorage.getItem("redchillyquantity"));
    itemcount.textContent = count;
    hrcquantity.textContent = localStorage.getItem("redchillyquantity") + " x £19";
    ans.push(localStorage.getItem("redchillyquantity")*19);
}

if(localStorage.getItem("clickedextractedoilquantity") == "true"){
    NaturalExtractedEdibleOil.classList.remove("inactive");
    count += Number(localStorage.getItem("extractedoilquantity"));
    itemcount.textContent = count;
    neeoquantity.textContent = localStorage.getItem("extractedoilquantity") + " x £25";
    ans.push(localStorage.getItem("extractedoilquantity")*25);
}

if(localStorage.getItem("clickedfacescrub") == "true"){
    OrganicFaceScrub.classList.remove("inactive");
    count += Number(localStorage.getItem("facescrubquantity"));
    itemcount.textContent = count;
    ofsquantity.textContent = localStorage.getItem("facescrubquantity") + " x £35";
    ans.push(localStorage.getItem("facescrubquantity")*35);
}

if(localStorage.getItem("clickedpulses") == "true"){
    PulsesFromOrganicFarm.classList.remove("inactive");
    count += Number(localStorage.getItem("pulsesquantity"));
    itemcount.textContent = count;
    pfmfquantity.textContent = localStorage.getItem("pulsesquantity") + " x £15";
    ans.push(localStorage.getItem("pulsesquantity")*15);
}

if(localStorage.getItem("clickedwheat") == "true"){
    WheatFromOrganicFarms.classList.remove("inactive");
    count += Number(localStorage.getItem("wheatquantity"));
    itemcount.textContent = count;
    wfofquantity.textContent = localStorage.getItem("wheatquantity") + " x £34";
    ans.push(localStorage.getItem("wheatquantity")*34);
}



let clicked = false;
var account = localStorage.getItem("assortedcoffeequantity");
accross.addEventListener("click",()=> {
    AssortedCoffee.classList.add("inactive");
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
    totalpricel.textContent ="£" + totalcount + ".00";
});


cbcross.addEventListener("click",()=> {
    CashewButter.classList.add("inactive");
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
    totalpricel.textContent ="£" + totalcount + ".00";
});
dccross.addEventListener("click",()=> {
    DiabeticCookies.classList.add("inactive");
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
    totalpricel.textContent ="£" + totalcount + ".00";
});
ffecross.addEventListener("click",()=> {
    FarmFreshEggs.classList.add("inactive");
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
    totalpricel.textContent ="£" + totalcount + ".00";
});
fojcross.addEventListener("click",()=> {
    FreshOrangeJuice.classList.add("inactive");
    ans.pop(localStorage.getItem("freshorangejuicequantity")*18);
    
    count -= Number(localStorage.getItem("freshorangejuicequantity"));
    itemcount.textContent = count;
    console.log(count);
    if (count>0) {
        noproduct.classList.add("inactive");
    }else{
        noproduct.classList.remove("inactive");
    }
    localStorage.removeItem("clickedfreshorangejuice");
    totalcount = totalcount - localStorage.getItem("freshorangejuicequantity")*18;
    subtotal.textContent = "£" + totalcount + ".00";
    totalpricel.textContent ="£" + totalcount + ".00";
});
fohcross.addEventListener("click",()=> {
    FreshOrganicHoney.classList.add("inactive");
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
    totalpricel.textContent ="£" + totalcount + ".00";
});
hscross.addEventListener("click",()=> {
    HandSanitizer.classList.add("inactive");
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
    totalpricel.textContent ="£" + totalcount + ".00";
});
hrccross.addEventListener("click",()=> {
    HandpickedRedChillies.classList.add("inactive");
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
    totalpricel.textContent ="£" + totalcount + ".00";
});
neeocross.addEventListener("click",()=> {
    NaturalExtractedEdibleOil.classList.add("inactive");
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
    totalpricel.textContent ="£" + totalcount + ".00";
});
ofscross.addEventListener("click",()=> {
    OrganicFaceScrub.classList.add("inactive");
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
    totalpricel.textContent ="£" + totalcount + ".00";
});
pfmfcross.addEventListener("click",()=> {
    PulsesFromOrganicFarm.classList.add("inactive");
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
    totalpricel.textContent ="£" + totalcount + ".00";
});
wfofcross.addEventListener("click",()=> {
    WheatFromOrganicFarms.classList.add("inactive");
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
    totalpricel.textContent ="£" + totalcount + ".00";
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
    noproduct.classList.add("inactive");
    cartlistunderline1.classList.remove("inactive");
    cartitem1.classList.remove("inactive");
    btn2.classList.remove("inactive");
    btn3.classList.remove("inactive");
    btn1.classList.add("inactive");
}else{
    noproduct.classList.remove("inactive");
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