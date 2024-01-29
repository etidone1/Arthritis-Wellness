const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", ()=>{
        hamburger.classList.remove("active");
       navMenu.classList.remove("active");
    }))

   

    const bang = document.querySelector(".bang");

window.addEventListener("scroll",() => {
    if (window.pageYOffset > 100){
        bang.classList.add("active");
    } else {
        bang.classList.remove("active");
    }
});
