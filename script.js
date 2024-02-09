let message = document.querySelector('#message');
let now = new Date();
let hours = now.getHours();
console.log('hours: '+hours); 

function addDarkmodeWidget() {
  const darkModeHours = 9;
  localStorage.setItem("darkmode", false);
  if(hours > darkModeHours) {
    localStorage.setItem("darkmode", true);
    console.log('set darkmode to true, beacuse hours > '+darkModeHours);
  }
  
  const darkmode = new Darkmode({
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  })
  console.log('addDarkmodeWidget');
  darkmode.showWidget();
}

window.addEventListener('load', addDarkmodeWidget);
