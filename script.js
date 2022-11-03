let result =  document.getElementById('result');
let display = document.querySelectorAll('.display');


display.forEach(el => {
    el.addEventListener('click',clickedButton)
});


function clickedButton(event) {
    const x =  event.target.innerText;

    if(result.innerHTML == 0){
        return result.innerHTML = x;
    }
    return result.innerHTML  += x;
}

function calculate () {
    result.innerHTML = eval(result.innerText)
}

function allClear() {
    result.innerText = 0;
}

function clear() {
    let text = result.innerText;
    if (text.length === 1) {
        result.innerText = 0;
    } else { 
        result.innerText = text.substring(0, text.length - 1)
    }result
}

document.querySelector(".clear-all").addEventListener("click", allClear);
document.querySelector(".clear").addEventListener("click", clear);