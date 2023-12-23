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
const cashewbutterinput = document.querySelector("#quantity-Cashew-Butter");
const cashewbuttersubtotal = document.querySelector(".product-subtotal-Cashew-Butter");
const diabeticcookiesinput = document.querySelector("#quantity-Diabetic-Cookies");
const diabeticcookiessubtotal = document.querySelector(".product-subtotal-Diabetic-Cookies");
const NaturalExtractedEdibleOilinput = document.querySelector("#quantity-Natural-Extracted-Edible-Oil");
const NaturalExtractedEdibleOilsubtotal = document.querySelector(".product-subtotal-Natural-Extracted-Edible-Oil");
const FarmFreshEggsinput = document.querySelector("#quantity-Farm-Fresh-Eggs");
const FarmFreshEggssubtotal = document.querySelector(".product-subtotal-Farm-Fresh-Eggs");

const FreshOrangeJuiceinput = document.querySelector("#quantity-Fresh-Orange-Juice");
const FreshOrangeJuicesubtotal = document.querySelector(".product-subtotal-Fresh-Orange-Juice");
const FreshOrganicHoneyinput = document.querySelector("#quantity-Fresh-Organic-Honey");
const FreshOrganicHoneysubtotal = document.querySelector(".product-subtotal-Fresh-Organic-Honey");
const HandSanitizerinput = document.querySelector("#quantity-Hand-Sanitizer");
const HandSanitizersubtotal = document.querySelector(".product-subtotal-Hand-Sanitizer");
const HandpickedRedChilliesinput = document.querySelector("#quantity-Handpicked-Red-Chillies");
const HandpickedRedChilliessubtotal = document.querySelector(".product-subtotal-Handpicked-Red-Chillies");
const OrganicFaceScrubinput = document.querySelector("#quantity-Organic-Face-Scrub");
const OrganicFaceScrubsubtotal = document.querySelector(".product-subtotal-Organic-Face-Scrub");
const PulsesFromOrganicFarminput = document.querySelector("#quantity-Pulses-From-Organic-Farm");
const PulsesFromOrganicFarmsubtotal = document.querySelector(".product-subtotal-Pulses-From-Organic-Farm");
const WheatFromOrganicFarmsinput = document.querySelector("#quantity-Wheat-From-Organic-Farms");
const WheatFromOrganicFarmssubtotal = document.querySelector(".product-subtotal-Wheat-From-Organic-Farms");
const hidden = document.querySelector(".hidden");
const updatecart = document.querySelector(".updatecart");
const quantity = document.querySelector(".quantity");
const upblur = document.querySelector("#upblur");
const upact = document.querySelector("#upact");
const subtotalprice = document.querySelector(".subtotal-price");
const totalprice = document.querySelector(".total-price");
const checkoutbtn = document.querySelector(".checkoutbtn");

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
upact.classList.add("inactive");

const map = new Map();
var ans = [];
let updateinput = false;

const acquan = localStorage.getItem("assortedcoffeequantity");
if(localStorage.getItem("clickedassortedcoffee") == "true"){
    tableheading.classList.remove("inactive");
    assortedcoffee.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    assortedcoffeeinput.value = localStorage.getItem("assortedcoffeequantity");
    var acsubtotal = assortedcoffeeinput.value*35;
    assortedcoffeesubtotal.textContent = "£"+acsubtotal+".00";
    map.set('assortedcoffeeinput',acsubtotal);
    // localStorage.setItem("acquantity",assortedcoffeeinput.value);
    console.log(assortedcoffeeinput.value);
    assortedcoffeeinput.addEventListener("change",function() {
        upact.classList.remove("inactive");
        upblur.classList.add("inactive");
        var acsubtotal = assortedcoffeeinput.value*35;
        assortedcoffeesubtotal.textContent = "£"+acsubtotal+".00";
        map.set('assortedcoffeeinput',acsubtotal);
        console.log(assortedcoffeeinput.value);
        updateinput = true;
        
    })
    
    
}







if(localStorage.getItem("clickedcashewbutterquantity") == "true"){
    tableheading.classList.remove("inactive");
    CashewButter.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    cashewbutterinput.value = localStorage.getItem("cashewbutterquantity");
    var cbsubtotal = cashewbutterinput.value*25;
    cashewbuttersubtotal.textContent = "£"+cbsubtotal+".00";
    map.set('cashewbutterinput',cbsubtotal);
    
    cashewbutterinput.addEventListener("change",function() {
        if(upact.classList == "inactive" && upblur.classList != "inactive"){
            upact.classList.remove("inactive");
            upblur.classList.add("inactive");
        }
        
        var cbsubtotal = cashewbutterinput.value*25;
        cashewbuttersubtotal.textContent = "£"+cbsubtotal+".00";
        map.set('cashewbutterinput',cbsubtotal);
        updateinput = true;
    })
}

if(localStorage.getItem("clickeddiabeticcookiesquantity") == "true"){
    tableheading.classList.remove("inactive");
    DiabeticCookies.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    diabeticcookiesinput.value = localStorage.getItem("diabeticcookiesquantity");
    var dcsubtotal = diabeticcookiesinput.value*25;
    diabeticcookiessubtotal.textContent = "£"+dcsubtotal+".00";
    map.set('diabeticcookiesinput',dcsubtotal);
    
    diabeticcookiesinput.addEventListener("change",function() {
        if(upact.classList == "inactive" && upblur.classList != "inactive"){
            upact.classList.remove("inactive");
            upblur.classList.add("inactive");
        }
        
        var dcsubtotal = diabeticcookiesinput.value*25;
        diabeticcookiessubtotal.textContent = "£"+dcsubtotal+".00";
        map.set('diabeticcookiesinput',dcsubtotal);
        updateinput = true;
    })
}

if(localStorage.getItem("clickedextractedoilquantity") == "true"){
    tableheading.classList.remove("inactive");
    NaturalExtractedEdibleOil.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    NaturalExtractedEdibleOilinput.value = localStorage.getItem("extractedoilquantity");
    var eosubtotal = NaturalExtractedEdibleOilinput.value*25;
    NaturalExtractedEdibleOilsubtotal.textContent = "£"+eosubtotal+".00";
    map.set('NaturalExtractedEdibleOilinput',eosubtotal);
    
    NaturalExtractedEdibleOilinput.addEventListener("change",function() {
        if(upact.classList == "inactive" && upblur.classList != "inactive"){
            upact.classList.remove("inactive");
            upblur.classList.add("inactive");
        }
        
        var eosubtotal = NaturalExtractedEdibleOilinput.value*25;
        NaturalExtractedEdibleOilsubtotal.textContent = "£"+eosubtotal+".00";
        map.set('NaturalExtractedEdibleOilinput',eosubtotal);
        updateinput = true;
    })
}

if(localStorage.getItem("clickfresheggquantity") == "true"){
    tableheading.classList.remove("inactive");
    FarmFreshEggs.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    FarmFreshEggsinput.value = localStorage.getItem("fresheggquantity");
    var ffesubtotal = FarmFreshEggsinput.value*34;
    FarmFreshEggssubtotal.textContent = "£"+ffesubtotal+".00";
    map.set('FarmFreshEggsinput',ffesubtotal);
    
    FarmFreshEggsinput.addEventListener("change",function() {
        if(upact.classList == "inactive" && upblur.classList != "inactive"){
            upact.classList.remove("inactive");
            upblur.classList.add("inactive");
        }
        
        var ffesubtotal = FarmFreshEggsinput.value*34;
        FarmFreshEggssubtotal.textContent = "£"+ffesubtotal+".00";
        map.set('FarmFreshEggsinput',ffesubtotal);
        updateinput = true;
    })
}

if(localStorage.getItem("clickedfreshorangejuice") == "true"){
    tableheading.classList.remove("inactive");
    FreshOrangeJuice.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    FreshOrangeJuiceinput.value = localStorage.getItem("freshorangejuicequantity");
    var ff0subtotal = FreshOrangeJuiceinput.value*18;
    FreshOrangeJuicesubtotal.textContent = "£"+ff0subtotal+".00";
    map.set('FreshOrangeJuiceinput',ff0subtotal);
    
    FreshOrangeJuiceinput.addEventListener("change",function() {
        if(upact.classList == "inactive" && upblur.classList != "inactive"){
            upact.classList.remove("inactive");
            upblur.classList.add("inactive");
        }
        
        var ff0subtotal = FreshOrangeJuiceinput.value*18;
        FreshOrangeJuicesubtotal.textContent = "£"+ff0subtotal+".00";
        map.set('FreshOrangeJuiceinput',ff0subtotal);
        updateinput = true;
    })
}

if(localStorage.getItem("clickedfreshhoney") == "true"){
    tableheading.classList.remove("inactive");
    FreshOrganicHoney.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    FreshOrganicHoneyinput.value = localStorage.getItem("freshhoneyquantity");
    var ffhsubtotal = FreshOrganicHoneyinput.value*34;
    FreshOrganicHoneysubtotal.textContent = "£"+ffhsubtotal+".00";
    map.set('FreshOrganicHoneyinput',ffhsubtotal);
    
    FreshOrganicHoneyinput.addEventListener("change",function() {
        if(upact.classList == "inactive" && upblur.classList != "inactive"){
            upact.classList.remove("inactive");
            upblur.classList.add("inactive");
        }
        
        var ffhsubtotal = FreshOrganicHoneyinput.value*34;
        FreshOrganicHoneysubtotal.textContent = "£"+ffhsubtotal+".00";
        map.set('FreshOrganicHoneyinput',ffhsubtotal);
        updateinput = true;
    })
}

if(localStorage.getItem("clickedhandsanitizer") == "true"){
    tableheading.classList.remove("inactive");
    HandSanitizer.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    HandSanitizerinput.value = localStorage.getItem("handsanitizerquantity");
    var hssubtotal = HandSanitizerinput.value*15;
    HandSanitizersubtotal.textContent = "£"+hssubtotal+".00";
    map.set('HandSanitizerinput',hssubtotal);
    
    HandSanitizerinput.addEventListener("change",function() {
        if(upact.classList == "inactive" && upblur.classList != "inactive"){
            upact.classList.remove("inactive");
            upblur.classList.add("inactive");
        }
        
        var hssubtotal = HandSanitizerinput.value*15;
    HandSanitizersubtotal.textContent = "£"+hssubtotal+".00";
    map.set('HandSanitizerinput',hssubtotal);
    updateinput = true;
    })
}

if(localStorage.getItem("clickedredchilly") == "true"){
    tableheading.classList.remove("inactive");
    HandpickedRedChillies.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    HandpickedRedChilliesinput.value = localStorage.getItem("redchillyquantity");
    var hprsubtotal = HandpickedRedChilliesinput.value*19;
    HandpickedRedChilliessubtotal.textContent = "£"+hprsubtotal+".00";
    map.set('HandSanitizerinput',hprsubtotal);
    
    HandpickedRedChilliesinput.addEventListener("change",function() {
        if(upact.classList == "inactive" && upblur.classList != "inactive"){
            upact.classList.remove("inactive");
            upblur.classList.add("inactive");
        }
        updateinput = true;
        var hprsubtotal = HandpickedRedChilliesinput.value*19;
        HandpickedRedChilliessubtotal.textContent = "£"+hprsubtotal+".00";
        map.set('HandSanitizerinput',hprsubtotal);
    })
}

if(localStorage.getItem("clickedfacescrub") == "true"){
    tableheading.classList.remove("inactive");
    OrganicFaceScrub.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    OrganicFaceScrubinput.value = localStorage.getItem("facescrubquantity");
    var ofssubtotal = OrganicFaceScrubinput.value*35;
    OrganicFaceScrubsubtotal.textContent = "£"+ofssubtotal+".00";
    map.set('OrganicFaceScrubinput',ofssubtotal);
    
    OrganicFaceScrubinput.addEventListener("change",function() {
        if(upact.classList == "inactive" && upblur.classList != "inactive"){
            upact.classList.remove("inactive");
            upblur.classList.add("inactive");
        }
        updateinput = true;
        var ofssubtotal = OrganicFaceScrubinput.value*35;
    OrganicFaceScrubsubtotal.textContent = "£"+ofssubtotal+".00";
    map.set('OrganicFaceScrubinput',ofssubtotal);
    })
}

if(localStorage.getItem("clickedpulses") == "true"){
    tableheading.classList.remove("inactive");
    PulsesFromOrganicFarm.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    PulsesFromOrganicFarminput.value = localStorage.getItem("pulsesquantity");
    var pulsessubtotal = PulsesFromOrganicFarminput.value*15;
    PulsesFromOrganicFarmsubtotal.textContent = "£"+pulsessubtotal+".00";
    map.set('PulsesFromOrganicFarminput',pulsessubtotal);
    
    PulsesFromOrganicFarminput.addEventListener("change",function() {
        if(upact.classList == "inactive" && upblur.classList != "inactive"){
            upact.classList.remove("inactive");
            upblur.classList.add("inactive");
        }
        updateinput = true;
        var pulsessubtotal = PulsesFromOrganicFarminput.value*15;
        PulsesFromOrganicFarmsubtotal.textContent = "£"+pulsessubtotal+".00";
        map.set('PulsesFromOrganicFarminput',pulsessubtotal);
    })
}

if(localStorage.getItem("clickedwheat") == "true"){
    tableheading.classList.remove("inactive");
    WheatFromOrganicFarms.classList.remove("inactive");
    hidden.classList.add("inactive");
    
    WheatFromOrganicFarmsinput.value = localStorage.getItem("wheatquantity");
    var wheatsubtotal = WheatFromOrganicFarmsinput.value*34;
    WheatFromOrganicFarmssubtotal.textContent = "£"+wheatsubtotal+".00";
    map.set('WheatFromOrganicFarmsinput',wheatsubtotal);
    
    WheatFromOrganicFarmsinput.addEventListener("change",function() {
        if(upact.classList == "inactive" && upblur.classList != "inactive"){
            upact.classList.remove("inactive");
            upblur.classList.add("inactive");
        }
        updateinput = true;
        var wheatsubtotal = WheatFromOrganicFarmsinput.value*34;
    WheatFromOrganicFarmssubtotal.textContent = "£"+wheatsubtotal+".00";
    map.set('WheatFromOrganicFarmsinput',wheatsubtotal);
    })
}

var subtotal = 0;
        map.forEach((value) => {
            subtotal += value;
            
        })
        subtotalprice.textContent = "£"+subtotal+".00";
        totalprice.textContent = "£"+subtotal+".00";


upact.addEventListener("click",changetotal);
var clickupact = true;
    function changetotal() {
        var subtotal = 0;
        map.forEach((value) => {
            subtotal += value;
            
        })
        subtotalprice.textContent = "£"+subtotal+".00";
        totalprice.textContent = "£"+subtotal+".00";
        localStorage.setItem("acquantity",assortedcoffeeinput.value);
        localStorage.setItem("cbquantity",cashewbutterinput.value);
        localStorage.setItem("dcquantity",diabeticcookiesinput.value);
        localStorage.setItem("ffequantity",FarmFreshEggsinput.value);
        localStorage.setItem("fojquantity",FreshOrangeJuiceinput.value);
        localStorage.setItem("fohquantity",FreshOrganicHoneyinput.value);
        localStorage.setItem("hsquantity",HandSanitizerinput.value);
        localStorage.setItem("hrcquantity",HandpickedRedChilliesinput.value);
        localStorage.setItem("neeoquantity",NaturalExtractedEdibleOilinput.value);
        localStorage.setItem("ofsquantity",OrganicFaceScrubinput.value);
        localStorage.setItem("pfofquantity",PulsesFromOrganicFarminput.value);
        localStorage.setItem("wfofquantity",WheatFromOrganicFarmsinput.value);
        clickupact = false;
    }



checkoutbtn.addEventListener("click",() =>{
    if((clickupact == true) && (updateinput == false)){
        localStorage.setItem("acquantity",localStorage.getItem("assortedcoffeequantity"));
        localStorage.setItem("cbquantity",localStorage.getItem("cashewbutterquantity"));
        localStorage.setItem("dcquantity",localStorage.getItem("diabeticcookiesquantity"));
        localStorage.setItem("ffequantity",localStorage.getItem("fresheggquantity"));
        localStorage.setItem("fojquantity",localStorage.getItem("freshorangejuicequantity"));
        localStorage.setItem("fohquantity",localStorage.getItem("freshhoneyquantity"));
        localStorage.setItem("hsquantity",localStorage.getItem("handsanitizerquantity"));
        localStorage.setItem("hrcquantity",localStorage.getItem("redchillyquantity"));
        localStorage.setItem("neeoquantity",localStorage.getItem("extractedoilquantity"));
        localStorage.setItem("ofsquantity",localStorage.getItem("facescrubquantity"));
        localStorage.setItem("pfofquantity",localStorage.getItem("pulsesquantity"));
        localStorage.setItem("wfofquantity",localStorage.getItem("wheatquantity"));
    }
    
})

const accross = document.querySelector(".accross");



accross.addEventListener("click",function() {
    localStorage.removeItem("clickedassortedcoffee");
    window.location.reload();
},10000);

const cbcross = document.querySelector(".cbcross");
cbcross.addEventListener("click",() =>{
    localStorage.removeItem("clickedcashewbutterquantity");
    window.location.reload();
})

const dccross = document.querySelector(".dccross");
dccross.addEventListener("click",() =>{
    localStorage.removeItem("clickeddiabeticcookiesquantity");
    window.location.reload();
})

const ffecross = document.querySelector(".ffecross");
ffecross.addEventListener("click",() =>{
    localStorage.removeItem("clickfresheggquantity");
    window.location.reload();
})

const fojcross = document.querySelector(".fojcross");
fojcross.addEventListener("click",() =>{
    localStorage.removeItem("clickedfreshorangejuice");
    window.location.reload();
})

const fohcross = document.querySelector(".fohcross");
fohcross.addEventListener("click",() =>{
    localStorage.removeItem("clickedfreshhoney");
    window.location.reload();
})

const hscross = document.querySelector(".hscross");
hscross.addEventListener("click",() =>{
    localStorage.removeItem("clickedhandsanitizer");
    window.location.reload();
})

const hrccross = document.querySelector(".hrccross");
hrccross.addEventListener("click",() =>{
    localStorage.removeItem("clickedredchilly");
    window.location.reload();
})

const neeocross = document.querySelector(".neeocross");
neeocross.addEventListener("click",() =>{
    localStorage.removeItem("clickedextractedoilquantity");
    window.location.reload();
})

const ofscross = document.querySelector(".ofscross");
ofscross.addEventListener("click",() =>{
    localStorage.removeItem("clickedfacescrub");
    window.location.reload();
})

const pfmfcross = document.querySelector(".pfmfcross");
pfmfcross.addEventListener("click",() =>{
    localStorage.removeItem("clickedpulses");
    window.location.reload();
})

const wfofcross = document.querySelector(".wfofcross");
wfofcross.addEventListener("click",() =>{
    localStorage.removeItem("clickedwheat");
    window.location.reload();
})

const paycard = document.querySelector(".paycard");
if(subtotal == 0){
    paycard.classList.add("inactive");
}