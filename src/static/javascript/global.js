// apply the following after the page has loaded
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('hamburger').onclick = function() {

    // navbar slide up to reveal page
    document.getElementById('nav-links').classList.remove('nav-links-show')
    document.getElementById('drip-top').classList.toggle('drip-top-slide')

    // toggle hamburger animation
    document.getElementById('ham-top').classList.toggle('ham-top-transition')
    document.getElementById('ham-middle').classList.toggle('ham-middle-transition')
    document.getElementById('ham-bottom').classList.toggle('ham-bottom-transition')

    // lock body scrolling
    if(document.body.style.overflow == 'hidden')
      document.body.style.overflow = 'visible';

    // toggle navbar and drip graphic movement
    document.getElementById('nav-links').classList.toggle('nav-links-show')
    document.getElementById('drip-top').classList.toggle('drip-top-slide')
  }
})