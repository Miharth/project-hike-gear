// // image slider

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId=null; 

// // initializeSlider();
// document.addEventListener("DOMContentLoaded",initializeSlider);

// function initializeSlider(){

//     if(slides.length >0){
//     slides[slideIndex].classList.add("displaySlide");
//     intervalId =setInterval(nextSlide,5000);
//     }

// }

// function showSlide(index){

//     if(index >= slides.length){
//         slideIndex=0;

//     }

//     else if(index < 0){
//         slideIndex = slides.length -1;

//     }

//     slides.forEach(slide => {
//         slide.classList.remove("displayslide");
//     });
//     slides[slideIndex].classList.add("displayslide");

// }

// function prevSlide(){
//     clearInterval(intervalId)
//     slideIndex--;
//     showSlide(slideIndex);

// }

// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);

// }



//  vs coe 

// let currentSlide = 0;

// function changeSlide(direction) {
//     const slides = document.querySelector('.slides');
//     const totalSlides = document.querySelectorAll('.slide').length;

//     currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
//     slides.style.transform = `translateX(-${currentSlide * 100}%)`;
// }



// W3  SLIDER START HEAR //

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// W3 SLIDER ENDS HEAR //