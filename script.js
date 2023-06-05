const bar = document.getElementById("bar");
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}
Array.from(document.getElementsByClassName('pro')).forEach((element)=>element.addEventListener('click',()=>{
    window.location.href='sproduct.html'
}))

