console.log('App is working')
out = document.getElementById('result')
let numold = 0
let numlengt = 0
let rezult = 0
let werash = 0
document.querySelector('.Btns').onclick = ()=>{
    if(out.value === ""){numold = 0}
    if (event.target.classList.contains('number')){
        out.value += event.target.textContent
        numold = 1
        numlengt = 0
    }
    if (event.target.classList.contains('operation') && numold === 1 && numlengt === 0){
        out.value += event.target.textContent
        numlengt = 1
    }
    if (event.target.classList.contains('result')){
        werash = out.value
        //out.value = werash
        console.log(eval(werash))
        out.value = eval(werash)
        rezult = 1
    }
    if (event.target.classList.contains('Del')){
        out.value = out.value .slice(0,-1)
    }
    console.log(numold)
}
