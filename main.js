
let maincolor = localStorage.getItem("color-option");
if (maincolor !== null){
  document.documentElement.style.setProperty("--main-color", localStorage.getItem("color-option"));
}

// toggle spin class on icon 
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");
    // toggle class open in main settings 
    document.querySelector(".settings-box").classList.toggle("open");
}

// ########################################################################################
// switch color opcction
const colrsli = document.querySelectorAll(".color-list li");

colrsli.forEach(li =>{

  li.addEventListener('click', (e) =>{

    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    localStorage.setItem("color-option", e.target.dataset.color)

    e.target.parentElement.querySelectorAll(".active").forEach(element =>{
      element.classList.remove("active");
      e.target.classList.add("active")
    })

  });

});
// ###########################################################################################

// ######################################################################################################
let landing = document.querySelector(".landing-page");

let imgsArrays = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

setInterval(()=>{

  let randomNumber = Math.floor(Math.random() * imgsArrays.length);

  landing.style.backgroundImage = 'url(imags/'+imgsArrays[randomNumber]+')';
},5000);

// ###############################################################################################
let ourSkills = document.querySelector(".our-skills");
window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;
  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // Window Height
  let windowHeight = this.innerHeight;
  // Window ScrollTop
  let windowScrollTop = window.scrollY;
  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    allSkills.forEach(skill => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
// ###############################################################################


let ourGallary = document.querySelectorAll(".imgs-box img");
ourGallary.forEach(img =>{
  img.addEventListener('click', (e) => {
    let overlay = document.createElement("div");
    overlay.className = "popup-overlaye";
    document.body.appendChild(overlay)
    let popupbox = document.createElement("div");
    popupbox.className = "popupbox";
    if (img.alt !== null){
      let imghedding = document.createElement("h3");
      let imgtext = document.createElement(img.alt)
      imghedding.appendChild(imgtext);
      popupbox.appendChild(imghedding)
    };
    let popupImage = document.createElement("img");
    popupImage.src = img.src;
    popupbox.appendChild(popupImage);
    document.body.appendChild(popupbox);
    let close = document.createElement("span");
    let closebottom = document.createTextNode("X");
    close.appendChild(closebottom);
    close.className= "close-button";
    popupbox.appendChild(close);
  })
});
document.addEventListener("click", function (e) {
  if (e.target.className == 'close-button'){
    e.target.parentNode.remove();
    document.querySelector(".popup-overlaye").remove();
  }
});





// toggle menu 

let toggle = document.querySelector(".toggle-menu");
let lin = document.querySelector(".links-container ul");

toggle.onclick = function(){
  this.classList.toggle("menuActive");
  lin.classList.toggle("open")
};

document.addEventListener("click", (e)=>{
  if(e.target !== toggle && e.target !== lin){
    if(lin.classList.contains("open")){
      toggle.classList.toggle("menuActive");
      lin.classList.toggle("open")
    }
  }
});

lin.onclick = function (e){
  e.stopPropagation();
};


// ########################################################################################


// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });

}
scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);
