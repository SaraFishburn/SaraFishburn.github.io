// apply the following after the page has loaded
window.addEventListener('DOMContentLoaded', function() {

  // variable declaration
  const html = document.getElementById('html-bubble')
  const js = document.getElementById('js-bubble')
  const ruby = document.getElementById('ruby-bubble')
  const css = document.getElementById('css-bubble')
  const python = document.getElementById('python-bubble')
  const flask = document.getElementById('flask-bubble')
  const c = document.getElementById('c-bubble')
  const sql = document.getElementById('sql-bubble')

  const els = [html, js, ruby, css, python, flask, c, sql]
  const dist = 0.005

  // mouse movement parallax
  document.addEventListener('mousemove', (e) => {
    const xAxis = window.innerWidth / 2 - e.pageX;
    const yAxis = window.innerHeight / 2 - e.pageY;
    const translate = `translate3d(${xAxis * dist}px, ${yAxis * dist}px, 0)`
    parallax(els, translate)
  })

  // mobile accelerometer parallax
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', deviceOrientationHandler, false);
  }

  // parallax translation application
  function parallax(els, translate) {
    for(el of Array.from(els)) {

      el.style.transform = translate
      el.style.webkitTransform = translate

      el.children[0].style.transform = translate
      el.children[0].style.webkitTransform = translate

      el.children[0].children[0].style.transform = translate
      el.children[0].children[0].style.webkitTransform = translate

      el.children[0].children[0].children[0].style.transform = translate
      el.children[0].children[0].children[0].style.webkitTransform = translate

      el.children[0].children[0].children[0].children[0].style.transform = translate
      el.children[0].children[0].children[0].children[0].style.webkitTransform = translate
    }
  }

  // handle parallax for mobile
  function deviceOrientationHandler(e) {
    const mobileTranslate = `translate(${e.gamma/50}px, ${e.beta/50}px)`

    parallax(els, mobileTranslate)
    console.log(e.alpha + ' : ' + e.beta + ' : ' + e.gamma)
  }
})

