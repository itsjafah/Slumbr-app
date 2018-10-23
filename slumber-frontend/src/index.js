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
});

let instance = M.Tabs.getInstance(elem)
