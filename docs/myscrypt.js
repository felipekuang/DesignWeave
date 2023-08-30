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

// Show or hide the button based on scroll position
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Add smooth scrolling behavior when the button is clicked
backToTopButton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; 
});

