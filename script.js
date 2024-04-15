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

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwmyE9EyCKRAXoonmIsqfNfVMeS5qvbwL79_wwH0cF0yajwPt1we7zIv4fu_nOZAMwuWw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  });

