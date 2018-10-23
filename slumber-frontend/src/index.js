document.addEventListener('DOMContentLoaded',() => {
  fetch('http://localhost:3000/api/v1/beds')
    .then(resp => resp.json())
    .then(respJSON => console.log(respJSON))
})
