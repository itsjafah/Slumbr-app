document.addEventListener('DOMContentLoaded',() => {
  fetch('http://localhost:3000/api/v1/beds')
    .then(resp => resp.json())
    .then(respJSON => console.log(respJSON))

  const slumbrMenuButton = document.getElementById('slumbr-menu-button')
  const howItWorksMenuButton = document.getElementById('how-it-works-menu-button')
  const aboutUsButton = document.getElementById('about-us-menu-button')
  const makeYourBedMenuButton = document.getElementById('make-your-bed-menu-button')

  let elem = document.querySelectorAll('.main-carousel');
  let flkty = new Flickity( elem[0], {
    contain: true,
    wrapAround: true,
    // autoPlay: 5000,
    pauseAutoPlayOnHover: true
  })

  let flktyTwo = new Flickity( elem[1], {
    // contain: true,
    wrapAround: true,
    resize: true,
    // autoPlay: 5000,
    pauseAutoPlayOnHover: true
  })

  // let instance = M.Tabs.getInstance(elem)

  const selectSlumbrMenuButton = () => {
    slumbrMenuButton.className = "active"
    howItWorksMenuButton.className = ""
    aboutUsButton.className = ""
  }

  const selectHowItWorksMenuButton = () => {
    slumbrMenuButton.className = ""
    howItWorksMenuButton.className = "active"
    aboutUsButton.className = ""
  }

  const selectAboutUsMenuButton = () => {
    slumbrMenuButton.className = ""
    howItWorksMenuButton.className = ""
    aboutUsButton.className = "active"
  }

  let elems = document.querySelectorAll('.modal')
  let firstModal = document.querySelectorAll('.modal')[0]
  let secondModal = document.querySelectorAll('.modal')[1]
  let firstInstances = M.Modal.init(firstModal, {})
  let secondInstances = M.Modal.init(secondModal, {})

  window.addEventListener("click", function (event) {
    if (event.target.innerText === "MAKE YOUR BED") {
      firstInstances.open()
    }
  })

  let hostID

  const userInfoModal = document.querySelector(".user-info-modal")
  userInfoModal.addEventListener("submit", function (event) {
    event.preventDefault()

    const nameInput = document.getElementById('name-input')
    const emailInput = document.getElementById('email-input')
    const streetInput = document.getElementById('street-input')
    const cityInput = document.getElementById('city-input')
    const stateInput = document.getElementById('state-input')
    const zipInput = document.getElementById('zip-input')

    // debugger

    fetch('http://localhost:3000/api/v1/hosts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameInput.value,
        street_address: streetInput.value,
        city: cityInput.value,
        state: stateInput.value,
        zip: zipInput.value,
        email: emailInput.value,
      }),
    }).then(res=>res.json())
      .then(parsed=> hostID = parsed.id)

    event.target.reset()
    secondInstances.open()

    //   document.getElementsByClassName("flickity-viewport")[1].style.height = "200px"
    //   document.getElementsByClassName('main-carousel')[1].flkty('resize')
    //   console.log(document.getElementsByClassName('main-carousel')[1])
    //   .flkty.resize()

    

  })

  window.addEventListener("click", function (event) {
    if (event.target.innerText === "SLUMBR") {
      window.scrollTo({top: 0, behavior: 'smooth'})
      selectSlumbrMenuButton()
    } else if (event.target.innerText === "HOW IT WORKS") {
      window.scrollTo({top: 640, behavior: 'smooth'})
      selectHowItWorksMenuButton()
    } else if (event.target.innerText === "ABOUT US") {
      window.scrollTo({top: 1200, behavior: 'smooth'})
      selectAboutUsMenuButton()
    }
  })

})
