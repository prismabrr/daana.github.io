let currentMySlide = 0;
let mySlideInterval;

function showMySlide(index){
  let slides = document.getElementsByClassName("myCarousel-slide");

  if (index >= slides.length){
    currentMySlide = 0;
  }else if(index < 0){
    currentMySlide = slides.length - 1;
  }else{
    currentMySlide = index;
  }

  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  slides[currentMySlide].style.display = "block";0
}

function moveMySlide(step){
  clearInterval(mySlideInterval);
  showMySlide(currentMySlide = step);
  startMySlideShow();
}

function startMySlideShow(){
  mySlideInterval = setInterval(() => {
    showMySlide(currentMySlide + 1);
  }, 3000);
};
window.onload = () => {
  showMySlide( currentMySlide);
  startMySlideShow();
};