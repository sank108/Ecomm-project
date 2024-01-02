const hiddentab = document.querySelector(".hidden");
const clicked = document.querySelector(".clicked");
const form = document.querySelector(".form");



// hiddentab.classList.add("inactive");
// let isclicked = true;
clicked.addEventListener("click",() =>{
    
    // if(isclicked){
    //     hiddentab.classList.toggle("inactive");
    //     isclicked = false;
    // }else{
    //     hiddentab.classList.toggle("inactive");
    //     isclicked = true;
    // }
    
    hiddentab.classList.toggle("active");
    form.style.marginTop = hiddentab.classList.contains("active") ? "100px" : "0";
})

const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));

const AssortedCoffee = document.querySelector("#assorted-coffee");
const CashewButter = document.querySelector("#cashew-butter");
const DiabeticCookies = document.querySelector("#diabetic-cookies");
const FarmFreshEggs = document.querySelector("#Farm-Fresh-Eggs");
const FreshOrangeJuice = document.querySelector("#Fresh-Orange-Juice");
const FreshOrganicHoney = document.querySelector("#Fresh-Organic-Honey");
const HandSanitizer = document.querySelector("#Hand-Sanitizer");
const HandpickedRedChillies = document.querySelector("#Handpicked-Red-Chillies");
const NaturalExtractedEdibleOil = document.querySelector("#Natural-Extracted-Edible-Oil");
const OrganicFaceScrub = document.querySelector("#Organic-Face-Scrub");
const PulsesFromOrganicFarm = document.querySelector("#Pulses-From-Organic-Farm");
const WheatFromOrganicFarms = document.querySelector("#Wheat-From-Organic-Farms");
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


const acquan = document.querySelector("#ac-quantity");
const cbquan = document.querySelector("#cb-quantity");
const dcquan = document.querySelector("#dc-quantity");
const ffequan = document.querySelector("#ffe-quantity");
const fojquan = document.querySelector("#foj-quantity");
const fohquan = document.querySelector("#foh-quantity");
const hsquan = document.querySelector("#hs-quantity");
const hprcquan = document.querySelector("#hprc-quantity");
const neeoquan = document.querySelector("#neeo-quantity");
const ofsquan = document.querySelector("#ofs-quantity");
const pfofquan = document.querySelector("#pfof-quantity");
const wfofquan = document.querySelector("#wfof-quantity");

const acst = document.querySelector("#ac-subtotal");
const cbst = document.querySelector("#cb-subtotal");
const dcst = document.querySelector("#dc-subtotal");
const ffest = document.querySelector("#ffe-subtotal");
const fojst = document.querySelector("#foj-subtotal");
const fohst = document.querySelector("#foh-subtotal");
const hsst = document.querySelector("#hs-subtotal");
const hprcst = document.querySelector("#hprc-subtotal");
const neeost = document.querySelector("#neeo-subtotal");
const ofsst = document.querySelector("#ofs-subtotal");
const pfofst = document.querySelector("#pfof-subtotal");
const wfofst = document.querySelector("#wfof-subtotal");

var ans = [];
if(localStorage.getItem("clickedassortedcoffee") == "true"){
    AssortedCoffee.classList.remove("inactive");
    acquan.textContent = localStorage.getItem("acquantity")
    let actotal = acquan.textContent;
    let acsubtotal = actotal*35;
    acst.textContent = "£" + acsubtotal +".00";
    ans.push(acsubtotal);
}

if(localStorage.getItem("clickedcashewbutterquantity") == "true"){
    CashewButter.classList.remove("inactive");
    cbquan.textContent = localStorage.getItem("cbquantity");
    let cbtotal = cbquan.textContent;
    let cbsubtotal = cbtotal*25;
    cbst.textContent = "£" + cbsubtotal +".00";
    ans.push(cbsubtotal);
}
if(localStorage.getItem("clickeddiabeticcookiesquantity") == "true"){
    DiabeticCookies.classList.remove("inactive");
    dcquan.textContent = localStorage.getItem("dcquantity");
    let dctotal = dcquan.textContent;
    let dcsubtotal = dctotal*25;
    dcst.textContent = "£" + dcsubtotal +".00";
    ans.push(dcsubtotal);
}
if(localStorage.getItem("clickfresheggquantity") == "true"){
    FarmFreshEggs.classList.remove("inactive");
    ffequan.textContent = localStorage.getItem("ffequantity");
    let ffetotal = ffequan.textContent;
    let ffesubtotal = ffetotal*34;
    ffest.textContent = "£" + ffesubtotal +".00";
    ans.push(ffesubtotal);
}
if(localStorage.getItem("clickedfreshorangejuice") == "true"){
    FreshOrangeJuice.classList.remove("inactive");
    fojquan.textContent = localStorage.getItem("fojquantity");
    let fojtotal = fojquan.textContent;
    let fojsubtotal = fojtotal*18;
    fojst.textContent = "£" + fojsubtotal +".00";
    ans.push(fojsubtotal);
}
if(localStorage.getItem("clickedfreshhoney") == "true"){
    FreshOrganicHoney.classList.remove("inactive");
    fohquan.textContent = localStorage.getItem("fohquantity");
    let fohtotal = fohquan.textContent;
    let fohsubtotal = fohtotal*34;
    fohst.textContent = "£" + fohsubtotal +".00";
    ans.push(fohsubtotal);
}
if(localStorage.getItem("clickedhandsanitizer") == "true"){
    HandSanitizer.classList.remove("inactive");
    hsquan.textContent = localStorage.getItem("hsquantity")
    let hstotal = hsquan.textContent;
    let hssubtotal = hstotal*15;
    hsst.textContent = "£" + hssubtotal +".00";
    ans.push(hssubtotal);
}
if(localStorage.getItem("clickedredchilly") == "true"){
    HandpickedRedChillies.classList.remove("inactive");
    hprcquan.textContent = localStorage.getItem("hrcquantity");
    let hprctotal = hprcquan.textContent;
    let hprcsubtotal = hprctotal*19;
    hprcst.textContent = "£" + hprcsubtotal +".00";
    ans.push(hprcsubtotal);
}
if(localStorage.getItem("clickedextractedoilquantity") == "true"){
    NaturalExtractedEdibleOil.classList.remove("inactive");
    neeoquan.textContent = localStorage.getItem("neeoquantity");
    let neeototal = neeoquan.textContent;
    let neeosubtotal = neeototal*25;
    neeost.textContent = "£" + neeosubtotal +".00";
    ans.push(neeosubtotal);
}
if(localStorage.getItem("clickedfacescrub") == "true"){
    OrganicFaceScrub.classList.remove("inactive");
    ofsquan.textContent = localStorage.getItem("ofsquantity");
    let ofstotal = ofsquan.textContent;
    let ofssubtotal =ofstotal*35;
    ofsst.textContent = "£" + ofssubtotal +".00";
    ans.push(ofssubtotal);
}
if(localStorage.getItem("clickedpulses") == "true"){
    PulsesFromOrganicFarm.classList.remove("inactive");
    pfofquan.textContent = localStorage.getItem("pfofquantity");
    let pfoftotal = pfofquan.textContent;
    let pfofsubtotal =pfoftotal*15;
    pfofst.textContent = "£" + pfofsubtotal +".00";
    ans.push(pfofsubtotal);
}
if(localStorage.getItem("clickedwheat") == "true"){
    WheatFromOrganicFarms.classList.remove("inactive");
    wfofquan.textContent = localStorage.getItem("wfofquantity");
    let wfoftotal = wfofquan.textContent;
    let wfofsubtotal =wfoftotal*34;
    wfofst.textContent = "£" + wfofsubtotal +".00";
    ans.push(wfofsubtotal);
}

const subtt = document.querySelector("#subtotal");
const tot = document.querySelector("#total");
let subt = 0;
let t = 0;
for (const price of ans) {
    subt += price;
    t += price;
  }

  subtt.textContent ="£" + subt +".00";
  tot.textContent ="£" + t +".00";


const check = document.querySelector("#checky");
const dpa = document.querySelector(".check-para-para1");
const checkparadiv = document.querySelector(".check-para1");
const checkparaarrow = document.querySelector(".deliverypara");
const delivery = document.querySelector(".delivery");
const checkspara = document.querySelector(".checks-para");
const checkpara = document.querySelector(".check-para-para");
const paraback = document.querySelector(".check-para");

dpa.classList.add("inactive");
    checkparadiv.classList.add("inactive");
    checkparaarrow.classList.add("inactive");
check.addEventListener("click",() =>{
    checkpara.classList.remove("inactive");
    checkspara.classList.remove("inactive");
    paraback.classList.remove("inactive");
    dpa.classList.add("inactive");
    checkparadiv.classList.add("inactive");
    checkparaarrow.classList.add("inactive");
})
    
delivery.addEventListener("click",() =>{
    dpa.classList.remove("inactive");
    checkparadiv.classList.remove("inactive");
    checkparaarrow.classList.remove("inactive");
    checkpara.classList.add("inactive");
    checkspara.classList.add("inactive");
    paraback.classList.add("inactive");

})


const placeorder = document.querySelector(".placeorder");
const warningline = document.querySelector(".warning-line");
const firstname = document.querySelector(".firstn");
const lastn = document.querySelector(".lastn");
const coun = document.querySelector(".coun");
const stradd = document.querySelector(".stradd");
const towncity = document.querySelector(".towncity");
const state = document.querySelector(".state");
const pincode = document.querySelector(".pincode");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

warningline.classList.add("inactive");
firstname.classList.add("inactive");
lastn.classList.add("inactive");
coun.classList.add("inactive");
stradd.classList.add("inactive");
towncity.classList.add("inactive");
state.classList.add("inactive");
pincode.classList.add("inactive");
phone.classList.add("inactive");
email.classList.add("inactive");

const formfirstname = document.querySelector(".formfirstname");
const formlastname = document.querySelector(".formlastname");
const formaddress = document.querySelector(".formaddress");
const formcity = document.querySelector(".formcity");
const formstate = document.querySelector(".formstate");
const formpin = document.querySelector(".formpin");
const formphone = document.querySelector(".formphone");
const formemail = document.querySelector(".formemail");
const countr = document.querySelector(".countries");
const countwrap = document.querySelector(".wrapper");

placeorder.addEventListener("click",(e) =>{
let errorcount = 0;
 if(formfirstname.value == ""){
    firstname.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formfirstname.placeholder = "Required Field!";
    formfirstname.classList.add("errorborder");
    errorcount++;
 }else{
    firstname.classList.add("inactive");
    warningline.classList.add("inactive");
    formfirstname.placeholder = "";
    formfirstname.classList.remove("errorborder");
    errorcount--;
 }
if(formlastname.value == ""){
    lastn.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formlastname.placeholder = "Required Field!";
    formlastname.classList.add("errorborder");
    errorcount++;
 }else{
    lastn.classList.add("inactive");
    warningline.classList.add("inactive");
    formlastname.placeholder = "";
    formlastname.classList.remove("errorborder");
    errorcount--;
 }
 if(formaddress.value == ""){
    stradd.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formaddress.placeholder = "Required Field!";
    formaddress.classList.add("errorborder");
    errorcount++;
 }else{
    stradd.classList.add("inactive");
    warningline.classList.add("inactive");
    formaddress.placeholder = "";
    formaddress.classList.remove("errorborder");
    errorcount--;
 }
 if(formcity.value == ""){
    towncity.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formcity.placeholder = "Required Field!";
    formcity.classList.add("errorborder");
    errorcount++;
 }else{
    towncity.classList.add("inactive");
    warningline.classList.add("inactive");
    formcity.placeholder = "";
    formcity.classList.remove("errorborder");
    errorcount--;
 }
 if(formstate.value == ""){
    state.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formstate.placeholder = "Required Field!";
    formstate.classList.add("errorborder");
    errorcount++;
 }else{
    state.classList.add("inactive");
    warningline.classList.add("inactive");
    formstate.placeholder = "";
    formstate.classList.remove("errorborder");
    errorcount--;
 }
 if(formpin.value == ""){
    pincode.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formpin.placeholder = "Required Field!";
    formpin.classList.add("errorborder");
    errorcount++;
 }else{
    pincode.classList.add("inactive");
    warningline.classList.add("inactive");
    formpin.placeholder = "";
    formpin.classList.remove("errorborder");
    errorcount--;
 }
 if(formphone.value == ""){
    phone.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formphone.placeholder = "Required Field!";
    formphone.classList.add("errorborder");
    errorcount++;
 }else{
    phone.classList.add("inactive");
    warningline.classList.add("inactive");
    formphone.placeholder = "";
    formphone.classList.remove("errorborder");
    errorcount--;
 }
 if(countr.innerHTML == "Select Country" || countr.innerHTML == "Required Field!"){
    coun.classList.remove("inactive");
    warningline.classList.remove("inactive");
    countr.innerHTML = "Required Field!";
    countwrap.classList.add("errorborder");
    errorcount++;
 }else{
    coun.classList.add("inactive");
    warningline.classList.add("inactive");
    countr.classList.remove("border");
    countwrap.classList.remove("errorborder");
    errorcount--;
 }
 if(formemail.value == ""){
    email.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formemail.placeholder = "Required Field!";
    formemail.classList.add("errorborder");
    errorcount++;
 }else{
    email.classList.add("inactive");
    warningline.classList.add("inactive");
    formemail.placeholder = "Required Field!";
    errorcount--;
    formemail.classList.remove("errorborder");
 }

 console.log(errorcount);
if((errorcount <= 0)&&(countr.innerHTML != "Select Country") ){
warningline.classList.add("inactive");
firstname.classList.add("inactive");
lastn.classList.add("inactive");
coun.classList.add("inactive");
stradd.classList.add("inactive");
towncity.classList.add("inactive");
state.classList.add("inactive");
pincode.classList.add("inactive");
phone.classList.add("inactive");
email.classList.add("inactive");
alert("Order Successful");
}

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



var account = localStorage.getItem("assortedcoffeequantity");
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
    totalcount = totalcount - localStorage.getItem("cashewbutterquantity")*25;
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
    totalcount = totalcount - localStorage.getItem("cashewbutterquantity")*34;
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


ans.forEach((p) =>{
    
    totalcount += p;
})
totalpricel.textContent ="£" + totalcount + ".00";
subtotal1.textContent = "£" + totalcount + ".00";  
