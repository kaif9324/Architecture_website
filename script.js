function logout(e) {
  const login = confirm("Are you sure to logout ?");
  if (login) {
    window.open("./login.html");
  } else {
    e.preventDefault();
  }
}

// --------footer-nav-for small device---
let Up_down_btn=document.querySelector(".hede_show_btn")
Up_down_btn.addEventListener("click",()=>{
 
  Up_down_btn.classList.toggle("arrow_rotate")
 
  document.querySelector(".footer-nav").classList.toggle("footer-nav-display")
 

})
// window.addEventListener("wheel",(event)=>{
//   if(event.deltaY < 0){
//       document.querySelector(".footer-nav").style.transform = "translateY(0)";
//   } else if(event.deltaY > 0){
//       document.querySelector(".footer-nav").style.transform = "translateY(100%)";
//   }
// });


// ----second-code---


// window.addEventListener("wheel",(event)=>{
//   if(event.deltaY<  0){
//     document.querySelector(".footer-nav").style.display="block"
//     // console.log("scroll up  ")

//   }
//   else if(event.deltaY> 0){
//     // console.log("scroll down ")
//     document.querySelector(".footer-nav").style.display="none"

//   }

// })

// window animation
let rightCon = document.getElementById("right");
let leftCon = document.getElementById("left");
let leftcon2 = document.getElementById("left2");
let rightcon2 = document.getElementById("right2");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300 && window.scrollY < 920) {
    rightCon.style.right = "0";
    leftCon.style.left = "0";
    // console.log('scrolling down') // for checking
  } else {
    rightCon.style.right = "-100%";
    leftCon.style.left = "-100%";
    // console.log('scrolling up...') // for checking
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 800 && window.scrollY < 1650) {
    leftcon2.style.left = "0";
    rightcon2.style.right = "0";
  } else {
    leftcon2.style.left = "-100%";
    rightcon2.style.right = "-100%";
  }
});

// --------menu right slide--

let menubutton = document.querySelector(".fa-list");
menubutton.addEventListener("click", () => {
  document.querySelector(".side-menu").classList.add("Add-side-menu");
});

document.getElementById("removebtn").addEventListener("click", () => {
  document.querySelector(".side-menu").classList.remove("Add-side-menu");
});
// --------menu right slide--end----

// --------------slide--------
let leftButton = document.getElementById("left-btn");
let rightButton = document.getElementById("right-btn");
let slide = document.querySelector(".slide-container");
let displaypage = document.querySelectorAll(".sli-pg");

let pag_num = 1;
function next_page() {
  slide.style.transform = `translate(-${pag_num * 100}%)`;
  pag_num++;
  // console.log(pag_num) for checking
}
function last_page() {
  slide.style.transform = `translate(0)`;
  pag_num = 1;
}
rightButton.addEventListener("click", () => {
  pag_num < displaypage.length ? next_page() : last_page();
});

function preve_page() {
  slide.style.transform = `translate(-${(pag_num - 2) * 100}%)`;
  pag_num--;
}
function first_page() {
  slide.style.transform = `translate(-${(displaypage.length - 1) * 100}%)`;
  pag_num = displaypage.length;
}

leftButton.addEventListener("click", () => {
  pag_num > 1 ? preve_page() : first_page();

  // animation on slide
});
setInterval(() => {
  if (pag_num < displaypage.length) {
    next_page();
  } else {
    last_page();
  }
}, 5000);

// ---------------------show more images------------------
let show_morebtn = document.getElementById("show_morebtn");
let displaIMg = document.querySelector(".img-slide");
let increaseHeight = "300px";

function Height() {
  displaIMg.style.height = "1300px";
}
show_morebtn.addEventListener("click", () => {
  Height();
  show_morebtn.style.display = "none";
});
