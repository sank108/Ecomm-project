// const pname = document.querySelector("#name-para");
//         const quan = document.querySelector("#quantity-para");

//         const pname1 = document.querySelector("#name-para-1");
//         const quan1 = document.querySelector("#quantity-para-1");

//         const lsname1 = localStorage.getItem("first-name");
//         const lsquan1 = localStorage.getItem("quantity");
//         const lsname = localStorage.getItem("first-name-1");
//         const lsquan = localStorage.getItem("quantity-1");
        
//         pname.textContent = lsname;
//         quan.textContent = lsquan;
//         pname1.textContent = lsname1;
//         quan1.textContent = lsquan1;

const assortedcoffee = document.querySelector(".Assorted-Coffee");
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
const tableheading = document.querySelector(".table-heading");
const assortedcoffeeinput = document.querySelector("#quantity-Assorted-Coffee");
const assortedcoffeesubtotal = document.querySelector(".product-subtotal-assorted-coffee");

tableheading.classList.add("inactive");
assortedcoffee.classList.add("inactive");
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

// assortedcoffeeinput.value = localStorage.getItem("quantity");
// var acsubtotal = assortedcoffeeinput.value*35;
// assortedcoffeesubtotal.textContent = "£"+acsubtotal+".00";