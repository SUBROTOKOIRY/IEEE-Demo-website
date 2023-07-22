const toggleButton = document.getElementsByClassName('toggle-button')[0]

const navBarlinks = document.getElementsByClassName('navbar-dropdown')[0]

toggleButton.addEventListener('click', () => {
  console.log('hii')
  navBarlinks.classList.toggle('active')
})

window.onscroll = function () {
  myFunction()
}

var navlist = document.getElementsByClassName('navbar')[0]

/* Function to stick the nav bar */
function myFunction() {
  if (window.pageYOffset >= 100) {
    navlist.classList.add('sticky')
    navlist.classList.add('nav-sticky')
  } else {
    navlist.classList.remove('sticky')
    navlist.classList.remove('nav-sticky')
  }
}
