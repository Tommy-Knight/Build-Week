
function insertLogo(){


let tileTitle = document.querySelectorAll('.tile-title')

for(let i=0; i<tileTitle.length;i++){
    let logoDiv = document.createElement('div')
    logoDiv.className = 'tile-logo'
    logoDiv.innerHTML = `<i class="fab fa-spotify testing"></i>`
    tileTitle[i].parentNode.insertBefore(logoDiv,tileTitle[i])
    
}
}


insertLogo()



//  Get the container element
 var btnContainer = document.getElementById("HomePageNav");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("home-nav-btns");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activateButton");
    current[0].className = current[0].className.replace(" activateButton", "");
    this.className += " activateButton";
  });
} 

