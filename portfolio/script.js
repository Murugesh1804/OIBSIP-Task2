function sendmail(){
    var emailAddress = 'your-email@example.com'; // Replace with desired email address
    window.location.href = 'mailto:' + emailAddress;
}

let currentIndex = 0;

function slide(direction) {
  const slides = document.querySelectorAll('.frame-wrapper4');
  
  if (direction === 'left') {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
  } else {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
  }

  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.transform = 'translateX(0)';
    } else if (index === currentIndex - 1 || (currentIndex === 0 && index === slides.length - 1)) {
      slide.style.transform = 'translateX(-100%)';
    } else if (index === currentIndex + 1 || (currentIndex === slides.length - 1 && index === 0)) {
      slide.style.transform = 'translateX(100%)';
    } else {
      slide.style.transform = 'translateX(200%)';
    }
  });
}

//certificates
const track = document.querySelector("track"); //ul
const slides = Array.from(track.children); //li items
const nextButton = document.querySelector(".linkedin-instagram-github");
const prevButton = document.querySelector(".predict-i-t-project");

const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});
