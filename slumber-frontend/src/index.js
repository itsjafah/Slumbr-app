document.addEventListener('DOMContentLoaded',() => {
  fetch('http://localhost:3000/api/v1/beds')
    .then(resp => resp.json())
    .then(respJSON => console.log(respJSON))
})

let elem = document.querySelector('.main-carousel');
let flkty = new Flickity( elem, {
  contain: true,
  wrapAround: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: false
})

let instance = M.Tabs.getInstance(elem)

window.addEventListener("click", function (event) {
  if (event.target.innerText === "HOW IT WORKS") {
    window.scrollTo({top: 640, behavior: 'smooth'})
    event.target.className = "active"
  } else if (event.target.innerText === "SLUMBR") {
    window.scrollTo({top: 0, behavior: 'smooth'})
    event.target.className = "active"
  } else if (event.target.innerText === "ABOUT US") {
    window.scrollTo({top: 1200, behavior: 'smooth'})
    event.target.className = "active"
  }
})
