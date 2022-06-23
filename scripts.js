const counterEl = document.getElementById('counter')
const totalCount = document.getElementById('total')

let count = 0
function increase() {
  // get element from html
  //    wrong const count= counterEl+1
  //    counterEl.innerText= count
  console.log('incresase')
  count++
  counterEl.innerHTML = count
}

//function that decreases
function decrease () {
  if (count <= 0) {
    counterEl.innerText = 0
  } else if (count > 0) {
    count--
    counterEl.innerHTML = count
  }
}
function reseat(){
  count=0
  counterEl.innerHTML = count
}
///bonus function that prints total
function printTotal () {
  let countStr = count + '-'
  totalCount.innerHTML += countStr
}
