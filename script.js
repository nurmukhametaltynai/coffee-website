const images = [
"images/bg.jpg",
"images/bg2.jpg"
];

let i = 0;
const hero = document.querySelector(".hero");

hero.style.backgroundImage = `url(${images[0]})`;

setInterval(() => {
i = (i + 1) % images.length;
hero.style.backgroundImage = `url(${images[i]})`;
}, 5000);

function showMenu(type) {
document.querySelectorAll('.menu-content').forEach(el=>{
el.classList.remove('active');
});
document.querySelector('.'+type).classList.add('active');
}

const buttons = document.querySelectorAll('.menu-buttons button');

buttons.forEach(btn=>{
btn.addEventListener('click',()=>{
buttons.forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
});
});