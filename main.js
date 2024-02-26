
const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");
openNavBtn.addEventListener('click',()=>{
    navItems.style.display='flex';
    openNavBtn.style.display='none';
    closeNavBtn.style.display='inline-block';
})
const closeNav=()=>{
    navItems.style.display='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
}
closeNavBtn.addEventListener('click',closeNav);

// colse nav menu when menu a menu items is clicked
if(window.innerWidth < 1024){
    document.querySelectorAll('#nav__items li a').forEach(navItems =>{
        navItems.addEventListener('click',()=>{
            closeNav();
        })
    })
}

//change navbar styles when scroll
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle('window-scroll',window.scrollY>0);});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
    el:".swiper-pagination",
    clickable: true,
    },
    breakpoints:{
        600:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
});