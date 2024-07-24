
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Increment index and reset if it exceeds number of slides
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";  
  
  // Change slide every 2 seconds
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


