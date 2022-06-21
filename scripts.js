const counterEl = document.getElementById('counter')
const totalCount = document.getElementById('total')


let count=0
function increase(){
// get element from html
//    wrong const count= counterEl+1
//    counterEl.innerText= count
count=count+1
counterEl.innerHTML=count
if(count<0){counterEl.innerHTML=0}
}

//function that decreases
function decrease(){
    count--
    counterEl.innerText=count
    if(count<0){counterEl.innerText=0}
}

///bonus function that prints total
function printTotal(){
    let countStr=count+'-'
    totalCount.innerText+=countStr 
}
