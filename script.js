document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature')
  const dotsContainer = document.querySelector('.carousel-dots')
  let currentSlide = 0

  function createDots() {
    const numSlides = Math.ceil(features.length / 2)
    for (let i = 0; i < numSlides; i++) {
      const dot = document.createElement('div')
      console.log('dot', dot)
      dot.classList.add('dot')
      dot.addEventListener('click', () => goToSlide(i))
      dotsContainer.appendChild(dot)
    }
    updateDots()
  }

  function updateDots() {
    const dots = document.querySelectorAll('.dot')
    dots.forEach((dot, index) => {
      dot.classList.remove('active')
      if (index === currentSlide) {
        dot.classList.add('active')
      }
    })
  }

  function goToSlide(slideIndex) {
    const offset = slideIndex * -100
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`
    currentSlide = slideIndex
    updateDots()
  }

  createDots()
  goToSlide(0)
})
