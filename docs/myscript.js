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

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

var histUsuModal = document.getElementById("hist_usu_Modal");
var histUsuImg = document.getElementById("hist_usu");
var histUsuModalImg = document.getElementById("img02");

histUsuImg.onclick = function() {
  histUsuModal.style.display = "block";
  histUsuModalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

histUsuModal.addEventListener("click", function(event) {
  if (event.target === histUsuModal) {
    histUsuModal.style.display = "none";
  }
});

var casosUsoImg = document.getElementById("casos_uso");
casosUsoImg.addEventListener("click", function () {
  narrativasModal.style.display = "block";
  narrativasModalImg.src = casosUsoImg.src;
  narrativasText.innerHTML = casosUsoImg.alt;
});

var narrativasModal = document.getElementById("narrativas_Modal");
var narrativasText = document.getElementById("narrativasText");
var narrativasModalImg = document.getElementById("img03");
var narrativasImg = [...document.getElementsByClassName("narrativas")].forEach(element => {
  element.onclick = function() {
    narrativasModal.style.display = "block";
    narrativasModalImg.src = element.src;
    narrativasText.innerHTML = element.alt;
  }
});

narrativasModal.addEventListener("click", function(event) {
  if (event.target === narrativasModal) {
   narrativasModal.style.display = "none";
  }
});

close = [...document.getElementsByClassName("close")].forEach(element => {
  element.onclick = function() {
    modal.style.display = "none";
    narrativasModal.style.display = "none";
  }
}
);