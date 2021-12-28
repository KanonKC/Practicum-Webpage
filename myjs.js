var about_us = document.getElementById("about-us")
var amoungUs = ["Among Us","sugomA","SUS"]
// var audio = document.getElementById("audio")

about_us.addEventListener('mouseover',(test)=>{
    about_us.textContent = amoungUs[Math.floor((Math.random()*amoungUs.length))]
    // audio.play()
})

about_us.addEventListener('mouseleave',(test)=>{
    about_us.textContent = "About Us"
})