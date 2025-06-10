// theme lightchanges
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

// typing animation
var typed = new Typed(".typing", {
  strings: ["ReactJS developer", "MERN Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// aside
const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li");
totalNavList = navlist.length;
(allsection = document.querySelectorAll(".section")),
  (totlasection = allsection.length);
for (let i = 0; i < totalNavList; i++) {
  // console.log(navlist[i]);
  const a = navlist[i].querySelector("a");
  // console.log(a);
  a.addEventListener("click", function () {
    for (let i = 0; i < totlasection; i++) {
      allsection[i].classList.remove("back-section");
    }
    // console.log(this);
    for (let j = 0; j < totalNavList; j++) {
      if (navlist[j].querySelector("a").classList.contains("active")) {
        // console.log("back-section" + navlist[j].querySelector("a"));
        allsection[j].classList.add("back-section");
      }
      navlist[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
  });
}

function showSection(element) {
  for (let i = 0; i < totlasection; i++) {
    allsection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  // console.log(target);
  document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", function () {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}


