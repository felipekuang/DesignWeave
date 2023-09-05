document.addEventListener("DOMContentLoaded", function() {
  const animatedElement = document.getElementById("animatedElement");
  animatedElement.classList.add("show");

  const indexLinks = document.querySelectorAll(".index a");

  indexLinks.forEach(link => {
    link.addEventListener("click", smoothScrollToSection);
  });

  function smoothScrollToSection(event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const offset = targetElement.getBoundingClientRect().top;

    window.scrollTo({
      top: offset + window.scrollY,
      behavior: "smooth"
    });
  }
});

var backToTopButton = document.getElementById("backToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function () {
  scrollToTop();
});

function scrollToTop() {
  var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    var decrement = Math.max(20, currentPosition / 20); 
    window.scrollTo(0, currentPosition - decrement);
  }
}

var modal = document.getElementById("canvasModal");
var img = document.getElementById("canvas");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
