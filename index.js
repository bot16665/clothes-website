var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000; // duration(speed) of the slide

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) { // reset
    imgs[i].style.opacity = 0;
    dots[i].classList.remove('active'); // Use classList.remove instead of replace
  }

  if (n !== undefined) {
    currentImg = n; // Update currentImg if n is defined
  } else {
    currentImg = (currentImg + 1) % imgs.length; // Increment currentImg otherwise
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].classList.add('active'); // Use classList.add to add 'active' class
}

// Start the automatic slide
var timer = setInterval(changeSlide, interval);

// Function to manually change slides
function goToSlide(n) {
  clearInterval(timer); // Clear the existing interval
  changeSlide(n); // Immediately change to the selected slide
  timer = setInterval(changeSlide, interval); // Set a new interval
}

// Add event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});
