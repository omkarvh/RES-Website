const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const update = () => {
          const increment = target / 100;

          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count) + "+";
            requestAnimationFrame(update);
          } else {
            counter.innerText = target + "+";
          }
        };

        update();
        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => observer.observe(counter));

// NAVBAR
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")
const closeMenu = document.getElementById("closeMenu")

hamburger.onclick = () =>{
navMenu.classList.toggle("active")
}

closeMenu.onclick = () =>{
navMenu.classList.remove("active")
}

window.addEventListener("scroll", function(){
const navbar = document.getElementById("navbar")

if(window.scrollY > 50){
navbar.classList.add("scrolled")
}else{
navbar.classList.remove("scrolled")
}
})