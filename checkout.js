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
const countr = document.querySelector(".ct");

placeorder.addEventListener("click",(e) =>{
let errorcount = 0;
 if(formfirstname.value == ""){
    firstname.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formfirstname.placeholder = "Required Field!";
    errorcount++;
 }else{
    firstname.classList.add("inactive");
    warningline.classList.add("inactive");
    formfirstname.placeholder = "";
    errorcount--;
 }
if(formlastname.value == ""){
    lastn.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formlastname.placeholder = "Required Field!";
    errorcount++;
 }else{
    lastn.classList.add("inactive");
    warningline.classList.add("inactive");
    formlastname.placeholder = "";
    errorcount--;
 }
 if(formaddress.value == ""){
    stradd.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formaddress.placeholder = "Required Field!";
    errorcount++;
 }else{
    stradd.classList.add("inactive");
    warningline.classList.add("inactive");
    formaddress.placeholder = "";
    errorcount--;
 }
 if(formcity.value == ""){
    towncity.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formcity.placeholder = "Required Field!";
    errorcount++;
 }else{
    towncity.classList.add("inactive");
    warningline.classList.add("inactive");
    formcity.placeholder = "";
    errorcount--;
 }
 if(formstate.value == ""){
    state.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formstate.placeholder = "Required Field!";
    errorcount++;
 }else{
    state.classList.add("inactive");
    warningline.classList.add("inactive");
    formstate.placeholder = "";
    errorcount--;
 }
 if(formpin.value == ""){
    pincode.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formpin.placeholder = "Required Field!";
    errorcount++;
 }else{
    pincode.classList.add("inactive");
    warningline.classList.add("inactive");
    formpin.placeholder = "";
    errorcount--;
 }
 if(formphone.value == ""){
    phone.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formphone.placeholder = "Required Field!";
    errorcount++;
 }else{
    phone.classList.add("inactive");
    warningline.classList.add("inactive");
    formphone.placeholder = "";
    errorcount--;
 }
 if(countr.innerHTML == "Select Country"){
    coun.classList.remove("inactive");
    warningline.classList.remove("inactive");
    countr.innerHTML = "Required Field!";
    errorcount++;
 }else{
    coun.classList.add("inactive");
    warningline.classList.add("inactive");
    countr.classList.remove("border");
    errorcount--;
 }
 if(formemail.value == ""){
    email.classList.remove("inactive");
    warningline.classList.remove("inactive");
    formemail.placeholder = "Required Field!";
    errorcount++;
 }else{
    email.classList.add("inactive");
    warningline.classList.add("inactive");
    formemail.placeholder = "Required Field!";
    errorcount--;
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

    
   
    
