// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-mySlides");
  let dots = document.getElementsByClassName("slide-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slide-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slide-active";
}

let slideIndex = 1;
showSlides(slideIndex);

document.getElementsByClassName("slide-prev")[0]?.addEventListener("click", () => plusSlides(-1));
document.getElementsByClassName("slide-next")[0]?.addEventListener("click", () => plusSlides(1));

[...document.getElementsByClassName("slide-dot")].forEach((elt, idx) => elt.addEventListener("click", () => currentSlide(idx+1)));
