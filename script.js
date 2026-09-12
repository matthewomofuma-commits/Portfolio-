const menuBtn = document.getElementById("menuBtn");

const closeBtn = document.getElementById("closeBtn");

const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", function (){
    mobileNav.classList.add("active");
});
closeBtn.addEventListener("click",function() {
    mobileNav.classList.remove("active");
});