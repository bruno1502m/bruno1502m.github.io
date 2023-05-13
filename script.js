//  assigning slideIndex variable to keep a track of which image is displayed at the moment
let slideIndex = 1;
//initially the first image is displayed
showSlides(slideIndex);

//to move forward or backwards across the slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//the function to define the current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//the function displays the current slide and updates the navigation dots
function showSlides(n) {
  let i;

  // returns an image that is inside an array of mySlides
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

//checking if the slideindex is out of range to move back to the first or the last slide
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

//looping over the slides and changes the value to "none" to ensure that only the current slide is displayed
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
//looping over the dots to ensure that only the current dot is highlighted as active
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  //to define which slide is displayed correspondigly to the dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
