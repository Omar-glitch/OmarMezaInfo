let btnMenu = document.querySelector('.span');
let menu = document.querySelector('.header-list')
let containerMenu = document.querySelector('.menu');
let activador = true;
//Menu de navegacion animacion izquierda
btnMenu.addEventListener('click', () =>{
    document.querySelector('.span i').classList.toggle('fa-times');
    if(activador){
        menu.style.top = "60px";
        menu.style.transition = "0.5s";
        activador=false;
    }else{
        menu.style.top = "-1000px";
        menu.style.transition = "0.5s";
        activador=true;
    }
});
//Enlaces y navegacion izquierda

let bol = document.querySelectorAll('.header-list li a');
bol.forEach( (element) => {
    element.addEventListener('click', () => {
       menu.style.top = "-1000px";
       document.querySelector('.span i').classList.remove('fa-times');
       document.querySelector('.span i').classList.add('fa-bars');
       activador=true;
    });
});