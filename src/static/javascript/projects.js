window.addEventListener('DOMContentLoaded', function() {

  if(window.matchMedia("(min-width: 550px)")) {

    // Find elements
    const tabs = Array.from(document.getElementById('tabs').children)
    const projects = Array.from(document.getElementsByClassName('project'))
  
    // Set first tab to be active on load
    tabs[0].classList.add('active-tab')
    projects[0].style.opacity = 1
  
    // Loop through each tab
    for(let i = 0; i < tabs.length; i++) {
      const tab = tabs[i]
  
      // Add onClick to tab
      tab.addEventListener('click', function() {
  
        // Loop through all tabs and remove the active-tab class
        for(const otherTab of tabs) {
          otherTab.classList.remove('active-tab')
        }
        // Add the active tab class to the current tab
        tab.classList.add('active-tab')
  
  
        // Loop through each project, hide them all, and make them able to be clicked through
        for(const project of projects) {
          project.style.opacity = 0
          project.style.pointerEvents = 'none'
        }
        // Make the correct project display
        projects[i].style.opacity = 1
        projects[i].style.pointerEvents = 'all'
      })
    }
  }
})
