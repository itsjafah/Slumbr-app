//Menu vars, functions, events
const slumbrMenuButton = document.getElementById('slumbr-menu-button')
const howItWorksMenuButton = document.getElementById('how-it-works-menu-button')
const aboutUsButton = document.getElementById('about-us-menu-button')
const makeYourBedMenuButton = document.getElementById('make-your-bed-menu-button')
let flktyTwo
let bedId = 1

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
//End of Menu vars, functions, events

//First Modal things
const userInfoModal = document.querySelector(".user-info-modal")
userInfoModal.addEventListener("submit", function(event) {
  event.preventDefault()
  document.querySelector("#modal2").querySelector("h4").innerText = "Time To Make Your Bed"
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
    }).then(res => res.json())
    .then(parsed => {
      hostID = parsed.id
      document.querySelector("#modal2").querySelector("h4").innerText += " " + parsed.name.split(" ")[0] + "!"
    })

  event.target.reset()
  secondInstances.open()
  let elem = document.querySelectorAll('.main-carousel');
  let flktyTwo = new Flickity(elem[1], {
    contain: true,
    wrapAround: true,
    resize: true,
    pauseAutoPlayOnHover: true
  })
  flktyTwo.on( 'settle', (e)=>{
    bedId = e + 1
    console.log(bedId)
  })
  document.querySelector("#modal2").querySelector(".flickity-viewport").style.height = "200px"
})

//End of First Modal

let dropdown = document.querySelectorAll('.dropdown-trigger');
let dropdownInstance = M.Dropdown.init(dropdown, {})

let elem = document.querySelectorAll('.main-carousel');
let flkty = new Flickity(elem[0], {
  contain: true,
  wrapAround: true,
  pauseAutoPlayOnHover: true
})

let elems = document.querySelectorAll('.modal')
let firstModal = document.querySelectorAll('.modal')[0]
let secondModal = document.querySelectorAll('.modal')[1]
let firstInstances = M.Modal.init(firstModal, {})
let secondInstances = M.Modal.init(secondModal, {})
let thirdModal = document.querySelectorAll('.modal')[2]
let thirdInstances = M.Modal.init(thirdModal, {})
let hostID

window.addEventListener("click", function(event) {
  switch (event.target.innerText) {
    case "SLUMBR":
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      selectSlumbrMenuButton()
      break;
    case "HOW IT WORKS":
      window.scrollTo({
        top: 640,
        behavior: 'smooth'
      })
      selectHowItWorksMenuButton()
      break;
    case "ABOUT US":
      window.scrollTo({
        top: 1250,
        behavior: 'smooth'
      })
      selectAboutUsMenuButton()
      break;
    case "MAKE YOUR BED":
      firstInstances.open()
      break;
    case "CANCEL":
      event.target.parentElement.parentElement.reset()
      break;
    case "CONFIRM":
      alert("Order submitted!")
      break;
    case "DELETE":
      deleteOrder(confirmObj.id)
      break;
  }
})

document.addEventListener('DOMContentLoaded', () => {

})
// const bedSize =  document.querySelector("#flickity-2")
// bedSize.addEventListener("mouseover", e=>{
//   bedId = e.target.id
// })

let confirmObj
const orderInfoModal = document.querySelector("#modal2")
orderInfoModal.addEventListener("submit", function (event) {
  event.preventDefault()
  const pillowInput = document.getElementById('pillow-amount').value
  const startInput = document.getElementById('startDate').value
  const endInput = document.getElementById('endDate').value
  fetch('http://localhost:3000/api/v1/orders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "bed_id": bedId,
        "host_id": hostID,
        "pillows": pillowInput,
        "start_date": startInput,
        "end_date": endInput,
        "total_price": 200,
      }),
    }).then(res => res.json())
    .then(parsed => {
      confirmObj=parsed
      thirdModal.querySelector(".modal-content").innerHTML = displayThirdModal(confirmObj)})
    bedId=1
  event.target.reset()
  thirdInstances.open()
})

const displayThirdModal = (confirmObj)=>{
  return `<h3>Well done, ${confirmObj.host.name.split(' ')[0]}! Please confirm the details of your order.</h3>
          <hr>
          <h5>You will be receiving a ${confirmObj.bed.size.toLowerCase()} size ${confirmObj.bed.bed_type.toLowerCase()} with ${confirmObj.pillows} pillow(s)
          on ${date_display(confirmObj.start_date)} - We will expect you to send this back to us by ${date_display(confirmObj.end_date)}</h5>

          <h5>Shipping Address:</h5>
          <h6>${confirmObj.host.street_address}
          <br>
          ${confirmObj.host.city}, ${confirmObj.host.state}
          <br>
          ${confirmObj.host.zip}</h6>
          `
}

// SCROLL EVENT
document.addEventListener('scroll', (event) => {
  if (window.scrollY >= 1100) {
    selectAboutUsMenuButton()
  } else if (window.scrollY >= 400) {
    selectHowItWorksMenuButton()
  } else if (window.scrollY < 400){
    selectSlumbrMenuButton()
  }
})
// SCROLL EVENT END

const date_display = (date)=>{
  let date_array = date.toString().split("-")
  let newDate = [date_array[1], date_array[2], date_array[0]].join("/")
  return newDate
}

const deleteOrder = (id)=>{
  fetch('http://localhost:3000/api/v1/orders/'+ id, {
      method: 'DELETE'})
      .then(alert("Order deleted!"))
    }
