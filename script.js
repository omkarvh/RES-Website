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

//typing effect 


const texts = [
  "Education is Power 📚",
  "Knowledge is Strength 🧠",
  "Consistency is Key 🔑",
  "Discipline Builds Success 💪",
  "Dreams Need Action 🚀",
  "Focus Creates Results 🎯",
  "Hard Work Beats Talent ⚡",
  "Growth Never Stops 📈"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count >= texts.length) count = 0;

  currentText = texts[count];
  letter = currentText.slice(0, index++);

  document.getElementById("typing").textContent = letter;

  if (index > currentText.length) {
    setTimeout(erase, 1500);
  } else {
    setTimeout(type, 100);
  }
}

function erase() {
  letter = currentText.slice(0, index--);
  document.getElementById("typing").textContent = letter;

  if (index < 0) {
    count++;
    index = 0;
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 50);
  }
}

// start animation
type();



//pagewise data 

const projectData = {
  "index.html": {
    title: "Main Society Development",
    desc: "Overall development initiatives and educational expansion programs.",
    date: "Start Date: 01-01-2026"
  },

  "CSR.html": {
    title: "Corporate Social Responsibility",
    desc: "Programs focused on community development and social impact.",
    date: "Start Date: 05-02-2026"
  },

  "Disable.html": {
    title: "Disability Support Program",
    desc: "Helping specially-abled individuals with training and resources.",
    date: "Start Date: 15-02-2026"
  },

  "institute.html": {
    title: "Institute Development",
    desc: "Enhancing infrastructure and quality of affiliated institutions.",
    date: "Start Date: 20-02-2026"
  },

  "leader.html": {
    title: "Leadership Program",
    desc: "Training future leaders with skills and mentorship.",
    date: "Start Date: 01-03-2026"
  },

  "MOT.html": {
    title: "Motivation Program",
    desc: "Inspiring youth through workshops and seminars.",
    date: "Start Date: 10-03-2026"
  },

  "PMKK.html": {
    title: "Skill Development (PMKK)",
    desc: "Government-supported skill training programs.",
    date: "Start Date: 12-03-2026"
  },

  "PMKVY.html": {
    title: "PMKVY Training",
    desc: "Pradhan Mantri Kaushal Vikas Yojana training initiatives.",
    date: "Start Date: 18-03-2026"
  },

  "PMVK.html": {
    title: "Vocational Training",
    desc: "Hands-on vocational skill training programs.",
    date: "Start Date: 22-03-2026"
  }
};

// Detect current page
const currentPage = window.location.pathname.split("/").pop() || "index.html";
console.log("Current Page:", currentPage);

// Set content
const data = projectData[currentPage];

if (data) {
  document.getElementById("projectTitle").innerText = data.title;
  document.getElementById("projectDesc").innerText = data.desc;
  document.getElementById("projectDate").innerText = data.date;
}

// Toggle function
function toggleProject() {
  document.getElementById("projectBox").classList.toggle("active");
}
