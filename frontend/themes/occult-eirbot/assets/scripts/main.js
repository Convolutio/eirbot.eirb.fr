window.onscroll = function() {scrollFunction()};
document.getElementById("header_menu").addEventListener("click",menuClick);
document.getElementById("header_arrow").addEventListener("click",arrowClick);
document.getElementById("header_logo").addEventListener("click",goToHome);

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("header")[0].style.height = "7vh";
    document.getElementById("header_arrow").style.opacity = "1";
    // document.getElementsByTagName("nav")[0].style.paddingTop = "7%";
  } else {
    document.getElementsByTagName("header")[0].style.height = "13vh";
    document.getElementById("header_arrow").style.opacity = "0";
    // document.getElementsByTagName("nav")[0].style.paddingTop = "12%";
  }
}

function menuClick() {
  this.classList.toggle("change");
  document.getElementsByTagName("nav")[0].classList.toggle("change");
  document.getElementsByTagName("main")[0].classList.toggle("change");
} 

function arrowClick() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function goToHome() {
  window.location = "/index.html";
}

let viewport_height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const subheader = document.getElementsByClassName("subheader")[0]
  if (subheader) subheader.style.height = String(viewport_height) + "px;";
