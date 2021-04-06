
function insertLogo(){

let logoDiv = document.createElement('div')
logoDiv.className = 'tile-logo'
logoDiv.innerHTML = `<i class="fab fa-spotify"></i>`
let tileTitle = document.querySelectorAll('.tile-title')

for(let i=0; i<tileTitle.length;i++){
    tileTitle[i].parentNode.insertBefore(logoDiv,tileTitle[i])
    
}

}

insertLogo()