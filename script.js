// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

function showExec(id) {
    // Hide all exec details
    document.querySelectorAll('.exec-detail').forEach(detail => {
      detail.style.display = 'none';
    });
  
    // Remove 'active' class from all names
    document.querySelectorAll('.exec-names li').forEach(name => {
      name.classList.remove('active');
    });
  
    // Show selected exec detail
    document.getElementById(id).style.display = 'block';
  
    // Add 'active' class to selected name
    document.querySelector(`.exec-names li[onclick="showExec('${id}')"]`).classList.add('active');
  }
  
  // Call function to show 'logan' as default
  showExec('logan');
  

  const currentIndex = {
    'about-carousel': 0
};

function updateCarousel(carouselId) {
    const track = document.querySelector(`#${carouselId} .carousel-track`);
    const slides = track.querySelectorAll('img');
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(${-currentIndex[carouselId] * slideWidth}px)`;
}

function prevSlide(carouselId) {
    const track = document.querySelector(`#${carouselId} .carousel-track`);
    const slides = track.querySelectorAll('img');
    const maxIndex = slides.length - 2; // Adjust for showing 3 images at a time

    currentIndex[carouselId] = (currentIndex[carouselId] > 0) ? currentIndex[carouselId] - 1 : maxIndex;
    updateCarousel(carouselId);
}

function nextSlide(carouselId) {
    const track = document.querySelector(`#${carouselId} .carousel-track`);
    const slides = track.querySelectorAll('img');
    const maxIndex = slides.length - 2; // Adjust for showing 3 images at a time

    currentIndex[carouselId] = (currentIndex[carouselId] < maxIndex) ? currentIndex[carouselId] + 1 : 0;
    updateCarousel(carouselId);
}

window.addEventListener('resize', () => updateCarousel('about-carousel'));
