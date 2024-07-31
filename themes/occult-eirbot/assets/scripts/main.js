window.onscroll = function() {scrollFunction()};
document.getElementById("header_menu").addEventListener("click",menuClick);
document.getElementById("header_arrow").addEventListener("click",arrowClick);
document.getElementById("header_logo").addEventListener("click",goToHome);

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header_logo").style.width = "5%";
    document.getElementById("header_arrow").style.opacity = "1";
    document.getElementById("menu").style.paddingTop = "7%";
  } else {
    document.getElementById("header_logo").style.width = "10%";
    document.getElementById("header_arrow").style.opacity = "0";
    document.getElementById("menu").style.paddingTop = "12%";
  }
}

function menuClick() {
  this.classList.toggle("change");
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("content").classList.toggle("change");
} 

function arrowClick() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function goToHome() {
  window.location = "/index.html";
}

let viewport_height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
document.getElementsByClassName("subheader")[0].setAttribute("style", "height:"+String(viewport_height)+"px;");