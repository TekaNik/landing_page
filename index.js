document.getElementById('black').onclick = dothis

function dothis(){
    let name = prompt()
    if(name =='admin'){
        document.querySelector('body').style.backgroundColor ='blue'
        document.querySelector('body').style.color ='red'

    } else {
        document.getElementById('black').innerHTML ="wrong Password"
    }
    
}