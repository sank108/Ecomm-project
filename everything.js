const rangeInput = document.querySelectorAll(".range-input input");
const progress = document.querySelector(".slider .progress1");
const progress1 = document.querySelector(".slider .progress2");


let priceGap = 10;
rangeInput.forEach(input =>{
    input.addEventListener("input" , (e)=>{
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);
        console.log(minVal,maxVal);
        
        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }
            else{
                rangeInput[1].value = minVal + priceGap;
            }
           
        }else{
            progress.style.left = ((minVal)/ rangeInput[0].max) *100 + "%";
            progress1.style.left = ((maxVal - 80) / rangeInput[1].max) *100 + "%";
        }


        
        // let pro = (maxVal / rangeInput[1].max) *100 + "%";
        // console.log(pro);


        
    });
});