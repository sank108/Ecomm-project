const btn = document.querySelector(".btn-1");
const quantity = document.querySelector("#quantity");
const hiddentab = document.querySelector(".hidden");

hiddentab.classList.add("inactive");

btn.addEventListener("click",()=>{
    // const firstnameac = quantity.name;
    
    // localStorage.setItem('itemname',JSON.stringify({firstnameac:quantity.name,quantity:quantity.value}));
    localStorage.setItem("wheat",quantity.name);
    localStorage.setItem("wheatquantity",quantity.value);
    localStorage.setItem("clickedwheat",true);
    hiddentab.classList.remove("inactive");
})

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

const btn4 = document.querySelector(".btn-1");
btn4.addEventListener("click",()=>{
    WheatFromOrganicFarms1.classList.remove("inactive");
    totalcount = totalcount + Number(localStorage.getItem("wheatquantity")*34);
    console.log(totalcount);
    totalpricel.textContent ="£" + totalcount + ".00";
    subtotal1.textContent = "£" + totalcount + ".00";
    
    count+=Number(localStorage.getItem("wheatquantity"));
    itemcount1.textContent = count;
    wfofquantity.textContent = localStorage.getItem("wheatquantity") + " x 34";
    console.log(count);
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
})



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