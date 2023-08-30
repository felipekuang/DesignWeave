document.addEventListener("DOMContentLoaded", function() {
    const animatedElement = document.getElementById("animatedElement");
    animatedElement.classList.add("show");
});
const indexLinks = document.querySelectorAll(".index a");

indexLinks.forEach(link => {
    link.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const offset = targetElement.getBoundingClientRect().top;
    
    window.scrollTo({
        top: offset + window.scrollY,
        behavior: "smooth"
    });
}

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
