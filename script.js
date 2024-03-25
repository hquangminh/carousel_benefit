let index = 0

function moveCarousel(step) {
  const features = document.querySelectorAll('.feature')
  const totalFeatures = features.length
  const featuresToShow = 2
  index = (index + step + totalFeatures / featuresToShow) % (totalFeatures / featuresToShow)
  const offset = index * -100
  const innerCarousel = document.querySelector('.carousel-inner')
  innerCarousel.style.transform = `translateX(${offset}%)`
}
