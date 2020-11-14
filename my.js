const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('#title');
const sizes =  document.querySelector('.sizes');


//move
container.addEventListener('mousemove',(e)=> {
        console.log(e.pageX,e.pageY);
        let x = (window.innerWidth/2 - e.pageX )/25;
        let y = (window.innerHeight/2 - e.pageY) /25;
        card.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
});

//Animate Out
container.addEventListener('mouseleave',(e)=>{
    card.style.transition= "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});

//Animation In
container.addEventListener('mouseenter',e=>{
    card.style.transition= "none";
    title.style.transform = "translateZ(150px)"
    sizes.style.transform = "translateZ(120px)"
})