const redirectArray = [...document.getElementsByClassName("alternate")];

redirectArray.map((x)=>x.addEventListener("mouseover", zoomRedirect));
redirectArray.map((x)=>x.addEventListener("mouseout", unzoomRedirect));
redirectArray.map((x)=>x.addEventListener("click", redirect));

function zoomRedirect(){
    [...this.children].map((x)=>x.style.transform = "scale(1.05)");
}

function unzoomRedirect(){
    [...this.children].map((x)=>x.style.transform = "scale(1)");
}

function redirect(){
    window.location = this.id;
}