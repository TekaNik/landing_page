/*
document.getElementById('black').onclick = dothis

function dothis(){
    let name = prompt()
    if(name =='admin'){
        document.querySelector('body').style.backgroundColor ='blue'
        document.querySelector('body').style.color ='red'

    } else {
        document.getElementById('black').innerHTML ="wrong Password"
    }
    
} */

// ourservice section
let total = 0;
document.querySelector('#zero').addEventListener('click',addZero)
document.querySelector('#add3').addEventListener('click',add3)
document.querySelector('#subt-1').addEventListener('click',subtract1)

function addZero(){
    total = total + 0
    document.getElementById('result').innerText = total
}

function add3(){
    total = total + 3;
    document.getElementById('result').innerText = total
}
function subtract1(){
    total = total - 1
    document.getElementById('result').innerText = total
}


document.querySelector('#check'). addEventListener('click', check)

function check(){
    const day = document.querySelector('#day').value.toLowerCase();

    if(day ==='tuesday' || day ==='thursday'){
        document.querySelector('#result').innerText = 'class Day'
    }
    else if( day === 'saturday' || day === 'sunday'){
        document.querySelector('#result').innerText = ' WeeKend'
    }
    else{
        document.querySelector('#result').innerText= 'Borrrring day'
    }
}