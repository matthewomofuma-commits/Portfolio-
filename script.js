const menuBtn = document.getElementById("menuBtn");

const closeBtn = document.getElementById("closeBtn");

const mobileNav = document.getElementById("mobileNav");

const mobileLinks = document.querySelectorAll(".mobile-nav a");

menuBtn.addEventListener("click",()=> {

    mobileNav.classList.add("active");
});

closeBtn.addEventListener("click",() => {
    mobileNav.classList.remove("active");
});

mobileLinks.forEach(link => {
    link.addEventListener("click", () =>{
        mobileNav.classList.remove("active");
    });
});




// menuBtn.addEventListener("click", function (){
//     mobileNav.classList.add("active");
// });
// closeBtn.addEventListener("click",function() {
//     mobileNav.classList.remove("active");
// });